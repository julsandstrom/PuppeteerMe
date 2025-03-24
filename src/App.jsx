import "./App.css";

import Intro from "./Homepage/Intro.jsx";
import QuizPage from "./Quiz/QuizPage.jsx";

import usePuppeteerStore from "./store/puppeteerStore";
import SummaryPage from "./Summary/SummaryPage.jsx";

function App() {
  const stage = usePuppeteerStore((state) => state.currentStage);
  return (
    <div>
      {stage === "intro" && <Intro />}
      {stage === "quiz" && <QuizPage />}
      {stage === "summary" && <SummaryPage />}
    </div>
  );
}

export default App;
