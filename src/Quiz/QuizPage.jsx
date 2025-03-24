const QuizBackground = "/images/backgroundquiz.png";
import puppetmaster from "/src/assets/puppetmaster-btn.svg";
import styles from "./Quiz.module.css";
import QuestionSlider from "./QuestionSlider";
import QuestionThreeButton from "./QuestionThreeButton";
import QuestionTwoButton from "./QuestionTwoButton";
import usePuppeteerStore from "/src/store/puppeteerStore.js";

import { useEffect } from "react";
const PuppetMasterQuiz = () => {
  const { setStage, quizQuestions, generateQuiz, category } =
    usePuppeteerStore();

  useEffect(() => {
    if (category) {
      generateQuiz(category);
    }
  }, [category]);

  const questionComponent = {
    slider: QuestionSlider,
    twoButton: QuestionTwoButton,
    threeButton: QuestionThreeButton,
  };

  return (
    <div className={styles.backgroundQuiz}>
      <img src={QuizBackground} className="hidden-image" alt="hidden" />
      <div className={styles.categoryTitle}>
        <img
          className={styles.categoryCard}
          src={puppetmaster}
          alt="puppet master button"
        />{" "}
      </div>
      <div className={styles.quizLayout}>
        {quizQuestions.map((q) => {
          const Component = questionComponent[q.type];
          if (!Component) return null;
          return (
            <Component
              key={q.id}
              questionId={q.id}
              question={q.question}
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
