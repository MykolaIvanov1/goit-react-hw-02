import { useState, useEffect } from "react";

import "./App.css";
import { Description } from "./components/Description/Description";
import { Options } from "./components/Options/Options";
import { Feedback } from "./components/Feadback/Feedback";

const getInitialValues = () => {
  const savedValues = window.localStorage.getItem("value-feedback-saved");
  console.log(savedValues !== null);
  if (savedValues !== null) {
    return JSON.parse(savedValues);
  }

  return {
    good: 0,
    neutral: 0,
    bad: 0,
  };
};

export const App = () => {
  const [feedback, setFeedback] = useState(getInitialValues);

  const handleClickGood = (option) => {
    setFeedback({
      ...feedback,
      [option]: feedback[option] + 1,
    });
  };

  const handleClickReset = () => {
    setFeedback({
      ...feedback,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem(
      "value-feedback-saved",
      JSON.stringify(feedback)
    );
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options
        onClickGood={handleClickGood}
        onClickReset={handleClickReset}
        totalFeedback={totalFeedback}
      />
      <Feedback
        value={feedback}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
      />
    </>
  );
};
