import React from "react";
import styles from "./DropdownItem.module.css";

export default function DropdownItem({ children, onClick }) {
  return (
    <div className={styles.dropdownitem} onClick={onClick}>
      {children}
    </div>
  );
}
