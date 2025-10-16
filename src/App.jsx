import React from "react";
import ProductList from "./ProductList";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",  
        alignItems: "center",      
        height: "100vh",           
        backgroundColor: "#f8f9fa", 
      }}
    >
      <ProductList />
    </div>
  );
}

export default App;


