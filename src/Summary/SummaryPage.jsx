import usePuppeteerStore from "/src/store/puppeteerStore";
import puppetmaster from "/src/assets/puppetmaster-category.svg";
import stringpuller from "/src/assets/stringpuller-category.svg";
import wildcard from "/src/assets/wildcard-category.svg";
import summaryStage from "/src/assets/summary-stage.svg";

import { traits } from "/src/data/traits.js";
import { questionsByCategory } from "/src/data/index.js";
import styles from "./Summary.module.css";
import { useEffect } from "react";

const SummaryPage = () => {
  const { name, category, answers, resetQuiz } = usePuppeteerStore();

  const categoryLogos = {
    puppetmaster: puppetmaster,
    stringpuller: stringpuller,
    wildcard: wildcard,
  };

  const selectedQuestions = questionsByCategory[category];

  const summaryFragments = selectedQuestions
    .map(({ id }) => {
      const value = answers[id];
      return traits[id]?.[value];
    })
    .filter(Boolean);

  const summaryText = `${name || "They"} ${summaryFragments.join(", ")}.`;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className={styles.summaryContainer}>
      <div className={styles.categoryTitle}>
        <img
          className={styles.categoryCard}
          src={categoryLogos[category] || puppetmaster}
          alt={`${category} button`}
        />{" "}
      </div>
      <p className={styles.summaryText}>{summaryText}</p>
      <img className={styles.summaryStage} src={summaryStage} alt="spotlight" />
      <button onClick={resetQuiz} className={styles.startOverBtn}>
        Exit Stage
      </button>
    </div>
  );
};

export default SummaryPage;
