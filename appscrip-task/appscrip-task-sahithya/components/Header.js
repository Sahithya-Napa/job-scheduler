export default function Header() {
  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 20px",
      borderBottom: "1px solid #eee"
    }}>
      <h2>MyStore</h2>

      <input
        type="text"
        placeholder="Search..."
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "5px"
        }}
      />
    </header>
  );
}