"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../publique/wenze.png";
//import en from "../../publique/en.ico";
//import fr from "../../publique/fr.ico";
import styles from "./menu.module.css";
import Link from "next/link";
import {
  MdFavoriteBorder,
  MdOutlineMessage,
  MdOutlineNotificationsNone,
  MdOutlineShoppingCart,
  MdSearch,
} from "react-icons/md";
import { AiOutlineShop, AiOutlineUser } from "react-icons/ai";
import Dropdown from "./Dropdown/Dropdown/Dropdown";
import { CiMenuFries } from "react-icons/ci";
import { RiCloseLargeLine } from "react-icons/ri";

export default function Menu2() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((openMenu) => !openMenu);
  };
  return (
    <>
      <div className={styles.menu}>
        <div className="flex">
          <Image src={Logo} alt="my logo image" />
          <div className={styles.search}>
            <Dropdown />
            <input
              type="text"
              placeholder="Faites vôtre recherche!"
              className={styles.inputTxt}
            />
            <button className={styles.btn}>
              <MdSearch className={styles.btnIco} />
            </button>
          </div>
          <div className={styles.menuliste}>
            <ul className={styles.menufonction}>
              <li className={styles.borderBottom}>
                <Link href="#">
                  <MdOutlineNotificationsNone />
                  <span className={styles.spanNotification}></span>
                  <p>Notification</p>
                </Link>
              </li>
              <li className={styles.borderBottom}>
                <Link href="#">
                  <MdOutlineMessage />
                  <p>Message</p>
                </Link>
              </li>
              <li className={styles.borderBottom}>
                <Link href="#">
                  <MdFavoriteBorder />
                  <p>Favori</p>
                </Link>
              </li>
              <li className={styles.borderBottom}>
                <Link href="#">
                  <AiOutlineShop />
                  <p>Ma Boutique</p>
                </Link>
              </li>
              <li className={styles.borderBottom}>
                <Link href="#">
                  <AiOutlineUser />
                  <p>Se Connecter</p>
                </Link>
              </li>
            </ul>
            <ul className="flex">
              <li className={styles.borderBottom}>
                <Link href="#">
                  <MdOutlineShoppingCart />
                  <p>Panier</p>
                </Link>
              </li>
              <li className={styles.borderBottom}>
                <select className="">
                  <option>fr</option>
                  <option>en</option>
                </select>
              </li>
            </ul>
            <div className={styles.menubtn} onClick={toggleMenu}>
              {<>{openMenu ? <RiCloseLargeLine /> : <CiMenuFries />}</>}
            </div>
          </div>
        </div>
        <div className="">
          <div className={styles.search2}>
            <Dropdown />
            <input
              type="text"
              placeholder="Faites vôtre recherche!"
              className={styles.inputTxt2}
            />
            <button className={styles.btnsearch}>
              <MdSearch className={styles.btnIco} />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.filter}>
        <ul>
          <li>
            <Link href="">Homme</Link>
          </li>
          <li>
            <Link href="">Femme</Link>
          </li>
          <li>
            <Link href="">Enfant</Link>
          </li>
          <li>
            <Link href="">Art</Link>
          </li>
          <li>
            <Link href="">Maison</Link>
          </li>
          <li>
            <Link href="">Divertisement</Link>
          </li>
          <li>
            <Link href="">Electronique</Link>
          </li>
          <li>
            <Link href="">Accesoir</Link>
          </li>
        </ul>
      </div>
      <div className={styles.smMenu}>
        <div className={openMenu ? "block mb-3" : "hidden"}>
          <div>
            <h5>Option</h5>
            <ul className={styles.smMenufonction}>
              <li className="">
                <Link href="#">
                  <MdOutlineNotificationsNone />
                  <p>Notification</p>
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  <MdOutlineMessage />
                  <p>Message</p>
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  <MdFavoriteBorder />
                  <p>Favori</p>
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  <AiOutlineShop />
                  <p>Ma Boutique</p>
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  <AiOutlineUser />
                  <p>Se Connecter</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.smfilter}>
            <h5>Parcourir</h5>
            <ul>
              <li>
                <Link href="">Homme</Link>
              </li>
              <li>
                <Link href="">Femme</Link>
              </li>
              <li>
                <Link href="">Enfant</Link>
              </li>
              <li>
                <Link href="">Art</Link>
              </li>
              <li>
                <Link href="">Maison</Link>
              </li>
              <li>
                <Link href="">Divertisement</Link>
              </li>
              <li>
                <Link href="">Electronique</Link>
              </li>
              <li>
                <Link href="">Accesoir</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
