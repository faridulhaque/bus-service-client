import React from "react";
import styles from "../../styles/header/Navbar.module.css";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <div className={styles.logo}>
          <Link href="#home">OSTRICH</Link>
        </div>

        <div className={styles.navItems}>
            <ul>
                <li>
                    <Link href="#home">Home</Link>
                </li>
                <li>
                    <Link href="#about">About</Link>
                </li>
                <li>
                    <Link href="#services">Services</Link>
                </li>
                <li>
                    <Link href="#ticketing">Ticketing</Link>
                </li>
               
            </ul>
        </div>

        <div className={styles.contact}>
          <BsFillTelephoneFill className={styles.icon}></BsFillTelephoneFill>
          <Link href="tel:+8801234567890">+880 1234 567 890</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
