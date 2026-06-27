import React from "react";
import styles from "./pageshom.module.css";
import tel from "../../../assets/tel.svg";

export default function PagesHom() {
  return (
    <div className={styles.home}>
      <div className={styles.leftMenu}>
        <p>Woman's Fashion</p>
        <p>Men's Fashion</p>
        <p>Electronics</p>
        <p>Home & Lifestyle</p>
        <p>Medicine</p>
        <p>Sports & Outdoor</p>
        <p>Baby's & Toys</p>
        <p>Groceries & Pets</p>
        <p>Health & Beauty</p>
      </div>

      <div className={styles.banner}>
        <div className={styles.text}>
          <h5> iPhone 14 Series</h5>

          <h1>
            Up to 10%
            <br />
            off Voucher
          </h1>

          <a href="/">Shop Now →</a>
        </div>

        <img src={tel} alt="iPhone" className={styles.phone} />

        <div className={styles.dots}>
          <span></span>
          <span></span>
          <span className={styles.active}></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}