import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={`container ${styles.inner_container}`}>
        <div className="row">
          <div className="col-6">
            <h6>Quick links</h6>
          </div>
          <div className="col-6">
            <h6>Social</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
