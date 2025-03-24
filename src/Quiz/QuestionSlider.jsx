import styles from "./Quiz.module.css";
import SliderAnswer from "./SliderAnswer";

const QuestionSlider = ({ question, leftText, rightText, questionId }) => {
  return (
    <>
      <h2 className={styles.question}>{question}</h2>
      <div className={styles.sliderWrap}>
        <SliderAnswer questionId={questionId} />
      </div>
      <div className={styles.sliderTextWrap}>
        <h3 className={styles.sliderText}> {leftText}</h3>
        <h3 className={styles.sliderTextTwo}> {rightText}</h3>
      </div>
    </>
  );
};

export default QuestionSlider;
