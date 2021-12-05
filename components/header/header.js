import Link from "next/link";
import styles from "./header.module.scss";
import Container from "../container/container";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.header__container}>
                <Link href="/">
                    <a className={styles.header__logo}>Logo</a>
                </Link>

                <nav>
                    <ul className={styles.header__list}>
                        <li className={styles.header__item}>
                            <a className={styles.header__link} href="/users">Users</a>
                        </li>

                        <li className={styles.header__item}>
                            <a className={styles.header__link} href="/posts">Posts</a>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    );
};

export default Header;