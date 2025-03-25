import puppetmaster from "/src/assets/puppetmaster-btn.svg";
import stringpuller from "/src/assets/stringpuller-btn.svg";
import wildcard from "/src/assets/wildcard-btn.svg";
import styles from "./Category.module.css";
import usePuppeteerStore from "../store/puppeteerStore";
import { useState } from "react";
const Category = () => {
  const [showModal, setShowModal] = useState(false);

  const [tempCategory, setTempCategory] = useState(null);
  const [nameInput, setNameInput] = useState("");
  const { setCategory, setStage, setName, resetQuiz } = usePuppeteerStore();

  const handleClick = (category) => {
    setTempCategory(category);
    setShowModal(true);
  };

  const handleSaveName = (e) => {
    e.preventDefault();
    if (!nameInput) return;

    setName(nameInput);
    setCategory(tempCategory);
    setStage("quiz");
    setShowModal(false);
    setNameInput("");
  };

  return (
    <section className={styles.categoryContainer}>
      <h2 className={styles.categoryTitle}>CATEGORY</h2>
      {showModal && (
        <form className={styles.nameForm}>
          <input
            type="text"
            placeholder="Enter their name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            className={styles.nameInput}
          />
          <div className={styles.formBtnWrap}>
            {" "}
            <button
              type="button"
              className={styles.backBtn}
              onClick={() => {
                resetQuiz();
                setShowModal(false);
                setTempCategory(null);
                setNameInput("");
              }}
            >
              Back
            </button>
            <button
              type="submit"
              className={styles.enterStageBtn}
              onClick={handleSaveName}
            >
              Enter Stage
            </button>
          </div>
        </form>
      )}
      <button
        className={styles.puppetmasterBtn}
        onClick={() => handleClick("puppetmaster")}
      >
        <img
          className={styles.puppetmasterLogo}
          src={puppetmaster}
          alt="puppetmaster button"
        />
      </button>
      <p className={styles.categoryInfoMaster}>
        How well do you <span className={styles.redPop}>truly</span> understand
        them?
      </p>

      <button
        className={styles.stringpullerBtn}
        onClick={() => handleClick("stringpuller")}
      >
        <img
          className={styles.stringpullerLogo}
          src={stringpuller}
          alt="stringpuller button"
        />
      </button>
      <p className={styles.categoryInfoPuller}>
        What <span className={styles.redPop}>role</span> do they play in social
        settings?
      </p>

      <button
        className={styles.wildcardBtn}
        onClick={() => handleClick("wildcard")}
      >
        <img
          className={styles.wildcardLogo}
          src={wildcard}
          alt="wildcard button"
        />
      </button>
      <p className={styles.categoryInfoWild}>
        What <span className={styles.redPop}>surprises</span> lie beneath?
      </p>
    </section>
  );
};

export default Category;
