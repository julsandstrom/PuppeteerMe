import { questionsByCategory } from "../data";
const desiredOrder = ["slider", "threeButton", "slider", "twoButton", "slider"];

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

export const getQuizQuestions = (category) => {
  console.log("Generating quiz for category:", category);
  const allQuestions = questionsByCategory[category] || [];
  console.log("All questions:", allQuestions);
  const usedIds = new Set();
  const questionsByType = {};

  allQuestions.forEach((q) => {
    if (!questionsByType[q.type]) {
      questionsByType[q.type] = [];
    }
    questionsByType[q.type].push(q);
  });

  const finalQuiz = desiredOrder.map((type) => {
    const pool = shuffle(questionsByType[type] || []).filter(
      (q) => !usedIds.has(q.id)
    );

    const selected = pool[0];
    if (selected) usedIds.add(selected.id);

    return selected;
  });

  return finalQuiz.filter(Boolean);
};
