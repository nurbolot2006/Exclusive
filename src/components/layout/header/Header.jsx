import {IoIosHeartEmpty, IoIosSearch} from "react-icons/io";
import {BsCart3} from "react-icons/bs";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={`${styles.header} container`}>
            <h1 className={styles.logo}>Exclusive</h1>

            <nav className={styles.nav}>
                <p className={styles.link}>Home</p>
                <p className={styles.link}>Contact</p>
                <p className={styles.link}>About</p>
                <p className={styles.link}>Sign Up</p>
            </nav>

            <div className={styles.actions}>
                <div className={styles.search_box}>
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className={styles.search_input}
                    />

                    <button className={styles.search_btn}>
                        <IoIosSearch/>
                    </button>
                </div>

                <div className={styles.icons}>
                    <button className={styles.icon_btn}>
                        <IoIosHeartEmpty/>
                    </button>

                    <button className={styles.icon_btn}>
                        <BsCart3/>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;