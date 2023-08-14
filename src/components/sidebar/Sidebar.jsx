import AppNav from "../appnav/AppNav";
import Logo from "../logo/Logo";
import styles from "./Sidebar.module.css";
import Footer from "../footer/Footer";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of cities</p>

      <Footer />
    </div>
  );
}

export default Sidebar;
