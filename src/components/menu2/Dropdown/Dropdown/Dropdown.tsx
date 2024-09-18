"use client";
import React, { useState } from "react";
import DropdownButton from "../DropdownButton/DropdownButton";
import DropdownContent from "../DropdownContent/DropdownContent";
import DropdownItem from "../DropdownItem/DropdownItem";
import styles from "./Dropdown.module.css";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const [buttontxt, setButtontxt] = useState("Categories");

  const toggleDrop = () => {
    setOpen((open) => !open);
  };

  const items = [
    { label: "Categories", id: 1 },
    { label: "Produits", id: 2 },
    { label: "Boutique", id: 3 },
    { label: "Membre", id: 4 },
  ];

  return (
    <div className={styles.Dropdown}>
      <DropdownButton toggle={toggleDrop} open={open}>
        <p>{buttontxt}</p>
      </DropdownButton>
      <DropdownContent open={open}>
        {
          <>
            {items.map((item) => (
              <DropdownItem
                key={item.id}
                onClick={() => {
                  setButtontxt(item.label);
                  toggleDrop();
                }}
              >
                <p>{item.label}</p>
              </DropdownItem>
            ))}
          </>
        }
      </DropdownContent>
    </div>
  );
}
