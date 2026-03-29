export default function ProductCard({ product }) {
  return (
    <div style={{
      border: "1px solid #eee",
      borderRadius: "10px",
      padding: "15px",
      background: "#fff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"   // 👈 added
    }}>
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "contain"
        }}
      />

      <h3 style={{
        fontSize: "14px",
        margin: "10px 0",
        height: "40px",
        overflow: "hidden"
      }}>
        {product.title}
      </h3>

      <p style={{
        fontWeight: "bold"
      }}>
        ₹ {product.price}
      </p>
    </div>
  );
}