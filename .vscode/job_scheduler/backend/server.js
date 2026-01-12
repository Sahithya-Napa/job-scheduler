const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

// Database
const db = new sqlite3.Database("./jobs.db");

// Create table if not exists
db.run(`
CREATE TABLE IF NOT EXISTS jobs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  taskName TEXT,
  payload TEXT,
  priority TEXT,
  status TEXT,
  createdAt TEXT
)
`);

// Create Job
app.post("/jobs", (req, res) => {
  const { taskName, payload, priority } = req.body;

  db.run(
    `INSERT INTO jobs (taskName, payload, priority, status, createdAt)
     VALUES (?, ?, ?, 'pending', datetime('now'))`,
    [taskName, JSON.stringify(payload), priority],
    function () {
      res.json({ id: this.lastID, message: "Job created" });
    }
  );
});

// List Jobs
app.get("/jobs", (req, res) => {
  db.all("SELECT * FROM jobs", (err, rows) => {
    res.json(rows);
  });
});

// Job Detail
app.get("/jobs/:id", (req, res) => {
  db.get(
    "SELECT * FROM jobs WHERE id = ?",
    [req.params.id],
    (err, row) => {
      res.json(row);
    }
  );
});

// Run Job
app.post("/run-job/:id", (req, res) => {
  const id = req.params.id;

  // Set status to running
  db.run("UPDATE jobs SET status='running' WHERE id=?", [id]);

  // Simulate background job
  setTimeout(() => {
    db.get("SELECT * FROM jobs WHERE id=?", [id], async (err, job) => {
      db.run("UPDATE jobs SET status='completed' WHERE id=?", [id]);

      // Webhook trigger
      try {
        await axios.post("https://webhook.site/YOUR-ID-HERE", {
          jobId: job.id,
          taskName: job.taskName,
          priority: job.priority,
          payload: JSON.parse(job.payload),
          completedAt: new Date()
        });
        console.log("Webhook sent successfully");
      } catch (e) {
        console.log("Webhook failed");
      }
    });
  }, 3000);

  res.json({ message: "Job started" });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
