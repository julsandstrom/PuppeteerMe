import usePuppeteerStore from "/src/store/puppeteerStore";
import puppetmaster from "/src/assets/puppetmaster-category.svg";
import stringpuller from "/src/assets/stringpuller-category.svg";
import wildcard from "/src/assets/wildcard-category.svg";
import summaryStage from "/src/assets/summary-stage.svg";
import { motion } from "framer-motion";
import { traits } from "/src/data/traits.js";
import { questionsByCategory } from "/src/data/index.js";
import styles from "./Summary.module.css";
import { useEffect } from "react";

const SummaryPage = () => {
  const { name, category, answers, resetQuiz } = usePuppeteerStore();
  const capitalizeFirst = (text) =>
    text.charAt(0).toUpperCase() + text.slice(1);

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

  const summaryText = `${name || "They"}\n${summaryFragments
    .map((fragment) => capitalizeFirst(fragment) + ".")
    .join("\n")}`;

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
      <div className={styles.summaryText}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
          style={{ fontWeight: "bold" }}
        >
          {name || "They"}
        </motion.p>
        {summaryFragments.map((fragment, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (i + 1) * 1.4 }}
          >
            {fragment.charAt(0).toUpperCase() + fragment.slice(1)}.
          </motion.p>
        ))}
      </div>
      <img className={styles.summaryStage} src={summaryStage} alt="spotlight" />
      {/* <h3 className={styles.dailyInfo}>
        Come back tomorrow to see what new questions are up.
      </h3> */}
      <button onClick={resetQuiz} className={styles.startOverBtn}>
        Exit Stage
      </button>
    </div>
  );
};

export default SummaryPage;
