import styles from "@/app/styles/navbar.module.css"
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <h1 style={{fontSize:"35px",color:"white"}}>
                    Movieflix
                </h1>

            </div>
            <Nav/>
        </header>
    );
};

export default Header;