import React, { useState } from "react";
import "./AddProduct.css";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "sweets",
    new_price: "",
    old_price: "",
  });
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);
    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product)
    }
  };

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p> Product Title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="Type here"
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Offer Price</p>
        <input
          value={productDetails.new_price}
          onChange={changeHandler}
          type="text"
          name="new_price"
          placeholder="Type here"
        />{" "}
      </div>

      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="add-product-selector"
        >
          <option value="breakfast">Breakfast</option>
          <option value="sweets">Sweets</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <p>add image</p>
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
        />
      </div>
      <button
        onClick={() => {
          Add_Product();
        }}
        className="addproduct-btn"
      >
        Add
      </button>
    </div>
  );
};
export default AddProduct;
