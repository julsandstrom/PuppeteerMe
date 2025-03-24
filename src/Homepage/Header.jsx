import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <p className={styles.headerFirstP}>
        Answer <span className={styles.redPop}>5 questions</span> about someone
        you know
      </p>
      <p className={styles.headerSecondP}>
        will your version of them match reality?
      </p>
    </header>
  );
};

export default Header;
