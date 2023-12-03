
import React, { useState } from "react";

const ProductTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([
      {
        id: 1,
        name: "Amanda Waller Shirt Men",
        price: "$333",
        category: "Fashion",
      },
      {
        id: 2,
        name: "Abercrombie Allen Brook shirt",
        price: "$70",
        category: "Fashion",
      },
      {
        id: 3,
        name: "Abercrombie Lake Arnaki Shirt",
        price: "$60",
        category: "Fashion",
      },
      { id: 4, name: "Bench Shirt", price: "$29", category: "Fashion" },
    ]);
  
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <div>
          <div className="container mt-5">
      <h1>Search Products : shirt</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="input-group-append">
          {/* Add search icon if needed */}
          <span className="input-group-text">🔍</span>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => console.log("React clicked")}
                >
                  React
                </button>
                <button
                  className="btn btn-info"
                  onClick={() => console.log("Edit clicked")}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => console.log("Delete clicked")}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {/* Add button for creating a new product */}
        <button
          className="btn btn-success"
          onClick={() => console.log("Create product clicked")}
        >
          + Create Product
        </button>
      </div>
    </div>
    </div>
  )
}

export default ProductTable



