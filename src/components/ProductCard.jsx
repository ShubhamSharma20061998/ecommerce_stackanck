import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import styles from "./ProductCard.module.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
const ProductCard = () => {
  const [productDetails, setProductDetails] = useState([
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail:
        "https://im.indiatimes.in/content/2020/Mar/iPhone-9-and-9-plus_5e71d66e079f2.jpg?w=1200&h=900&cc=1",
      images: ["...", "...", "..."],
    },
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail:
        "https://im.indiatimes.in/content/2020/Mar/iPhone-9-and-9-plus_5e71d66e079f2.jpg?w=1200&h=900&cc=1",
      images: ["...", "...", "..."],
    },
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail:
        "https://im.indiatimes.in/content/2020/Mar/iPhone-9-and-9-plus_5e71d66e079f2.jpg?w=1200&h=900&cc=1",
      images: ["...", "...", "..."],
    },
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail:
        "https://im.indiatimes.in/content/2020/Mar/iPhone-9-and-9-plus_5e71d66e079f2.jpg?w=1200&h=900&cc=1",
      images: ["...", "...", "..."],
    },
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail:
        "https://im.indiatimes.in/content/2020/Mar/iPhone-9-and-9-plus_5e71d66e079f2.jpg?w=1200&h=900&cc=1",
      images: ["...", "...", "..."],
    },
  ]);
  return (
    <div className="container">
      <div className={`row ${styles.searchBar}`}>
        <div className="col-md-5">
          <FloatingLabel controlId="floatingInput" label="Search for Products">
            <Form.Control type="text" placeholder="search" />
          </FloatingLabel>
        </div>
      </div>
      <div className="row">
        {productDetails?.map(
          ({
            id,
            title,
            description,
            price,
            discountPercentage,
            rating,
            stock,
            thumbnail,
          }) => {
            return (
              <div className="col-md-3 col-12">
                <Card className={styles.Product_card} key={id}>
                  <Card.Img variant="top" src={thumbnail} className={styles.thumbnail_images} />
                  <Card.Body>
                    <div className="row">
                      <div className="col-7">
                        <Card.Title>{title}</Card.Title>
                      </div>
                      <div className="col-5">
                        <span className={styles.discount_Percentage}>
                          {discountPercentage}% Off
                        </span>
                      </div>
                    </div>
                    <Card.Text>{description}</Card.Text>
                    <div className="row">
                      <div className="col-8">
                        <span className={styles.rating}>
                          <b>Rating:</b> {rating}/5
                        </span>
                      </div>
                      <div className="col-4">
                        <span className={styles.remain_stock}>
                          <b>Left:</b> {stock}
                        </span>
                      </div>
                    </div>
                    <div className={`row ${styles.price_button}`}>
                      <div className="col">
                        <h5>₹{price}</h5>
                      </div>
                      <div className={`col ${styles.addToCartBtn}`}>
                        Add To Cart
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ProductCard;
