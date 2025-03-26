import styles from "./Quiz.module.css";
import usePuppeteerStore from "/src/store/puppeteerStore";

const QuestionTwoButton = ({ questionId, question, leftText, rightText }) => {
  const { answers, setAnswer } = usePuppeteerStore();
  const selected = answers[questionId];
  return (
    <div className={styles.questionContainer}>
      <h2 className={styles.question}>{question}</h2>
      <div className={styles.btnWrap}>
        {" "}
        <button
          className={`${styles.buttonMiddle} ${
            selected === 0 ? styles.active : ""
          }`}
          onClick={() => setAnswer(questionId, 0)}
        >
          <span className={styles.buttonText}>{leftText}</span>
        </button>
        <button
          className={`${styles.buttonRight} ${
            selected === 1 ? styles.active : ""
          }`}
          onClick={() => setAnswer(questionId, 1)}
        >
          <span className={styles.buttonText}>{rightText}</span>
        </button>
      </div>
    </div>
  );
};

export default QuestionTwoButton;
