import React, { useState } from "react";
import { Game } from "./components/game";
import { Result } from "./components/result";
import "./scss/index.scss";

const questions = [
  {
    title: "Первым программистом в истории человечества считается…",
    variants: [
      "Ада Августа Лавлейс",
      "Блез Паскаль",
      "Алан Тьюринг",
      "Чарльз Беббидж",
    ],
    correct: 0,
  },
  {
    title: "Какой тег используется для создания гиперссылок?",
    variants: ["<a>", "<href>", "<b>", "<i>"],
    correct: 0,
  },
  {
    title: "Java относится к JavaScript так же, как",
    variants: [
      "Ява к Индонезии",
      "Кофе к Бразилии",
      "Сом к Сомали",
      "Силенд к Англии",
    ],
    correct: 2,
  },
  {
    title: "Что такое номофобия?",
    variants: [
      "Страх перед HTML",
      "Страх услышать «нет»",
      "Страх отсутствия мобильного телефона",
      "Страх перед людьми, которые все еще используют фразу «ном-ном»",
    ],
    correct: 2,
  },
];

export const App = () => {
  const [step, setStape] = useState(0);
  const question = questions[step];
  const [correct, setCorrect] = useState(0);
  const onClickVariant = (index: number) => {
    setStape(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };
  const counterQuations = questions.length;

  return (
    <div className="app">
      {step !== questions.length ? (
        <Game
          step={step}
          setStape={setStape}
          setCorrect={setCorrect}
          counterQuations={counterQuations}
          question={question}
          onClickVariant={onClickVariant}
          questions={questions}
        />
      ) : (
        <Result
          setStape={setStape}
          setCorrect={setCorrect}
          correct={correct}
          counterQuations={counterQuations}
          questions={questions}
        />
      )}
    </div>
  );
};
