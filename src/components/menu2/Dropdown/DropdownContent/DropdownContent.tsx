import React from "react";
import styles from "./DropdownContent.module.css";

export default function DropdownContent({ children, open }) {
  return (
    <div className={open ? styles.dropdowncontent2 : styles.dropdowncontent}>
      {children}
    </div>
  );
}
