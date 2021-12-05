import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./layout.module.scss";

const Layout = ({children, center}) => {
    return (
        <>
            <Header/>
            <main className={`${styles.layout} ${center ? styles.layout_center: ""}`}>
                {children}
            </main>
            <Footer/>
        </>
    );
};

export default Layout;