import styles from "./Slider.module.css";
import usePuppeteerStore from "/src/store/puppeteerStore.js";

const SliderAnswer = ({ questionId }) => {
  const { answers, setAnswer } = usePuppeteerStore();
  const currentValue = answers[questionId] ?? null;

  return (
    <>
      {["barOne", "barTwo", "barThree", "barFour"].map((barKey, index) => (
        <div
          key={index}
          className={`${styles[barKey]} ${
            currentValue === index ? styles.active : ""
          }`}
          onClick={() => setAnswer(questionId, index)}
        />
      ))}
    </>
  );
};

export default SliderAnswer;
//   <div className={styles.sliderWrapper}>
