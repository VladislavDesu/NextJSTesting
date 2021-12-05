import Link from "next/link";
import styles from "./list.module.scss";

export default function List({list, name}) {
    return (
        <section className={styles.list}>
            <h1>List of {name}s</h1>

            <ul className={styles.list__nav}>
                {
                    list.map(item => (
                        <li className={styles.list__item} key={item.id}>
                            <Link href={`/${name}/${item.id}`}>
                                {
                                    item.username ?
                                        <a className={styles.list__link}>{item.username}</a>:
                                        <a className={styles.list__link}>{item.title}</a>
                                }
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
};