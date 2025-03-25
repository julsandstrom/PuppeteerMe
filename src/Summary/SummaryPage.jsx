import usePuppeteerStore from "/src/store/puppeteerStore";
import { traits } from "/src/data/traits.js";
import { questionsByCategory } from "/src/data/index.js";
import styles from "./Summary.module.css";
import { useEffect } from "react";

const SummaryPage = () => {
  const { name, category, answers, resetQuiz } = usePuppeteerStore();

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
      <p className={styles.summaryText}>{summaryText}</p>
      <button onClick={resetQuiz} className={styles.startOverBtn}>
        Exit Stage
      </button>
    </div>
  );
};

export default SummaryPage;
