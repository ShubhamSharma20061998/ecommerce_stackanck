import React from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";

const LandingPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-12">
          <Header />
        </div>
        <div className="col-md-9 col-12">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
