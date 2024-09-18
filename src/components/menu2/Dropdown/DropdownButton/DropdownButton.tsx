import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import styles from "./DropdownButton.module.css";

const DropdownButton = ({ children, open, toggle }) => {
  return (
    <div
      onClick={toggle}
      className={open ? styles.dropdownbutton : styles.dropdownbutton2}
    >
      {children}
      <span>
        {open ? (
          <FaChevronUp className={styles.dropico} />
        ) : (
          <FaChevronDown className={styles.dropico} />
        )}
      </span>
    </div>
  );
};

export default DropdownButton;
