import usePuppeteerStore from "/src/store/puppeteerStore";
import { traits } from "/src/data/traits.js";
import { questionsByCategory } from "/src/data/index.js";

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

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Summary</h2>
      <p style={{ fontSize: "1.2rem", lineHeight: "1.5" }}>{summaryText}</p>
      <button onClick={resetQuiz} style={{ marginTop: "2rem" }}>
        Start Over
      </button>
    </div>
  );
};

export default SummaryPage;
