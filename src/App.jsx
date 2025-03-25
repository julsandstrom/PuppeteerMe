import "./App.css";

import Intro from "./Homepage/Intro.jsx";
import MobileOnly from "./MobileOnly.jsx";
import QuizPage from "./Quiz/QuizPage.jsx";

import usePuppeteerStore from "./store/puppeteerStore";
import SummaryPage from "./Summary/SummaryPage.jsx";

function App() {
  const stage = usePuppeteerStore((state) => state.currentStage);
  return (
    <MobileOnly>
      {stage === "intro" && <Intro />}
      {stage === "quiz" && <QuizPage />}
      {stage === "summary" && <SummaryPage />}
    </MobileOnly>
  );
}

export default App;
