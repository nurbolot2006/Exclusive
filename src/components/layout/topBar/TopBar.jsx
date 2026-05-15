import styles from "./TopBar.module.css";

const TopBar = () => {
    return (
        <div className={styles.topbar}>
            <div className={styles.topbar_container}>
                <div className={styles.topbar_text}>
                    <h3 className={styles.topbar_h3}>
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        <span className={styles.shop_now}>ShopNow</span>
                    </h3>
                </div>

                <div className={styles.language_wrapper}>
                    <select className={styles.languageSelect} defaultValue={"English"}>
                        <option value="English">English</option>
                        <option value="Русский">Русский</option>
                        <option value="Кыргызча">Кыргызча</option>
                    </select>
                </div>
            </div>
        </div>);
};

export default TopBar;