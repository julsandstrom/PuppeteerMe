import puppetmaster from "/src/assets/puppetmaster-btn.svg";
import stringpuller from "/src/assets/stringpuller-btn.svg";
import wildcard from "/src/assets/thewildcard-btn.svg";
import styles from "./Category.module.css";
import usePuppeteerStore from "../store/puppeteerStore";
const Category = () => {
  const { setCategory, setStage } = usePuppeteerStore();
  const handleClick = (category) => {
    setCategory(category);
    setStage("quiz");
  };

  return (
    <section className={styles.categoryContainer}>
      <h2 className={styles.categoryTitle}>CATEGORY</h2>

      <button
        className={styles.puppetmasterBtn}
        onClick={() => handleClick("puppetmaster")}
      >
        <img src={puppetmaster} alt="puppetmaster button" />
      </button>
      <p className={styles.categoryInfoMaster}>
        How well do you <span className={styles.redPop}>truly</span> understand
        them?
      </p>

      <button
        className={styles.stringpullerBtn}
        onClick={() => handleClick("stringpuller")}
      >
        <img src={stringpuller} alt="stringpuller button" />
      </button>
      <p className={styles.categoryInfoPuller}>
        What <span className={styles.redPop}>role</span> do they play in social
        settings?
      </p>

      <button
        className={styles.wildcardBtn}
        onClick={() => handleClick("wildcard")}
      >
        <img src={wildcard} alt="wildcard button" />
      </button>
      <p className={styles.categoryInfoWild}>
        What <span className={styles.redPop}>surprises</span> lie beneath?
      </p>
    </section>
  );
};

export default Category;
