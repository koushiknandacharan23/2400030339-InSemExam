import React, { useState } from "react";

const ProductList = () => {
  const products = [
    { name: "Notebook", price: 100, category: "Stationery" },
    { name: "Pen", price: 20, category: "Stationery" },
    { name: "Laptop", price: 60000, category: "Electronics" },
    { name: "Headphones", price: 1500, category: "Electronics" },
    { name: "School Bag", price: 700, category: "Bags" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Stationery", "Bags", "Electronics"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🛍️ Product List with Category Filter</h2>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ marginRight: "10px" }}>Filter by Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>
            <strong>{product.name}</strong> — ₹{product.price} (
            {product.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
