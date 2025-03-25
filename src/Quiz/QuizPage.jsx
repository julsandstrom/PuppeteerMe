import puppetmaster from "/src/assets/puppetmaster-category.svg";
import stringpuller from "/src/assets/stringpuller-category.svg";
import wildcard from "/src/assets/wildcard-category.svg";
import styles from "./Quiz.module.css";
import QuestionSlider from "./QuestionSlider";
import QuestionThreeButton from "./QuestionThreeButton";
import QuestionTwoButton from "./QuestionTwoButton";
import usePuppeteerStore from "/src/store/puppeteerStore.js";

import { useEffect } from "react";
const PuppetMasterQuiz = () => {
  const { setStage, quizQuestions, generateQuiz, category, name, resetQuiz } =
    usePuppeteerStore();

  useEffect(() => {
    if (category) {
      generateQuiz(category);
      console.log(category);
    }
  }, [category]);

  const questionComponent = {
    slider: QuestionSlider,
    twoButton: QuestionTwoButton,
    threeButton: QuestionThreeButton,
  };
  const categoryLogos = {
    puppetmaster: puppetmaster,
    stringpuller: stringpuller,
    wildcard: wildcard,
  };

  const insertName = (text, name) => {
    return text.replace(/{{name}}/gi, name || "they");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className={styles.categoryTitle}>
        <img
          className={styles.categoryCard}
          src={categoryLogos[category] || puppetmaster}
          alt={`${category} button`}
        />{" "}
        <button className={styles.exitStage} onClick={resetQuiz}>
          Exit Stage
        </button>
      </div>
      <div className={styles.quizLayout}>
        {quizQuestions.map((q) => {
          const Component = questionComponent[q.type];
          if (!Component) return null;
          return (
            <Component
              key={q.id}
              questionId={q.id}
              question={insertName(q.question, name)}
              leftText={q.leftText}
              middleText={q.middleText}
              rightText={q.rightText}
            />
          );
        })}
      </div>
      <div className={styles.summaryWrap}>
        <button
          className={styles.summaryBtn}
          onClick={() => setStage("summary")}
        >
          Summary
        </button>
      </div>
    </div>
  );
};

export default PuppetMasterQuiz;
