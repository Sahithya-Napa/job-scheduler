export default function Filters({ setCategory }) {
  return (
    <aside style={{
      width: "100%",
      maxWidth: "250px",
      padding: "10px"
    }}>
      <h2 style={{ marginBottom: "10px" }}>Filters</h2>

      <p><strong>Category</strong></p>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label>
          <input type="radio" name="cat" onChange={() => setCategory("electronics")} />
          Electronics
        </label>

        <label>
          <input type="radio" name="cat" onChange={() => setCategory("men's clothing")} />
          Clothing
        </label>

        <label>
          <input type="radio" name="cat" onChange={() => setCategory("jewelery")} />
          Jewelry
        </label>
      </div>
    </aside>
  );
}