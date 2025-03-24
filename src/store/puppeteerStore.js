import { create } from "zustand";
import { getQuizQuestions } from "../utils/getQuizQuestions";

const usePuppeteerStore = create((set) => ({
  name: "",
  category: "",
  currentStage: "intro",
  answers: {},
  quizQuestions: [],

  setName: (name) => set({ name }),
  setCategory: (category) => set({ category }),
  setStage: (stage) => set({ currentStage: stage }),

  setAnswer: (id, value) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [id]: value,
      },
    })),

  generateQuiz: (category) =>
    set({ quizQuestions: getQuizQuestions(category) }),

  resetQuiz: () =>
    set(() => ({
      name: "",
      category: "",
      currentStage: "intro",
      answers: {},
    })),
}));

export default usePuppeteerStore;
