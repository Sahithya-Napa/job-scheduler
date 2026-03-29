"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Filters from "../components/Filters";
import ProductGrid from "../components/ProductGrid";

export default function Page() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";

    if (category) {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [category]);

  return (
    <>
      <Header />

      <main style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "auto"
      }}>
        <h1 style={{ marginBottom: "20px" }}>
          Product Listing Page
        </h1>

        <div style={{
          display: "flex",
          gap: "20px",
          alignItems: "flex-start"
        }}>
          <Filters setCategory={setCategory} />

          <section style={{ flex: 1 }}>
            <h2>Products</h2>
            <ProductGrid products={products} />
          </section>
        </div>
      </main>
    </>
  );
}