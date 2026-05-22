import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn
} from "react-icons/fa";

import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.footer_container} container`}>
                <div className={styles.footer_top}>
                    <div className={styles.footer_logo}>
                        <h2>Exclusive</h2>
                        <p>
                            Subscribe and get 10% off your first order
                        </p>

                        <div className={styles.subscribe}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                            />

                            <button>Send</button>
                        </div>
                    </div>

                    <div className={styles.footer_links}>
                        <h3>Support</h3>

                        <p>Bishkek, Kyrgyzstan</p>
                        <p>exclusive@gmail.com</p>
                        <p>+996 500 000 000</p>
                    </div>

                    <div className={styles.footer_links}>
                        <h3>Account</h3>

                        <p>My Account</p>
                        <p>Login / Register</p>
                        <p>Cart</p>
                        <p>Wishlist</p>
                    </div>

                    <div className={styles.footer_links}>
                        <h3>Quick Link</h3>

                        <p>Privacy Policy</p>
                        <p>Terms Of Use</p>
                        <p>FAQ</p>
                        <p>Contact</p>
                    </div>
                </div>

                <div className={styles.footer_bottom}>
                    <p>© Copyright Exclusive 2026. All rights reserved</p>

                    <div className={styles.socials}>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>
                                <FaFacebookF/>
                            </button>
                        </a>

                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>
                                <FaInstagram/>
                            </button>
                        </a>

                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>
                                <FaTwitter/>
                            </button>
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>
                                <FaLinkedinIn/>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;