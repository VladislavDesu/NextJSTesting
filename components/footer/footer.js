import Link from "next/link";
import styles from "./footer.module.scss";
import Container from "../container/container";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <Link href="/">
                    <a className={styles.footer__logo}>Logo</a>
                </Link>

                <div className={styles.footer__wrapper}>
                    <p>Copyright © 2021 VGryadko. All rights reserved.</p>
                    <p>
                        <span>Site by </span>
                        <a target="_blank" className={styles.footer__dev} href="https://t.me/VladislavDesu">VGryadko</a>
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;