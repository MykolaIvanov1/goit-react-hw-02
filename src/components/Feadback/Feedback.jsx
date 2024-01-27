import { Notification } from "./Notification/Notification";

export const Feedback = ({
  positiveFeedback,
  totalFeedback,
  value: { good, neutral, bad },
}) => {
  return totalFeedback > 0 ? (
    <ul>
      <li>
        <p>Good: {good}</p>
      </li>
      <li>
        <p>Neutral: {neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
      </li>
      <li>
        <p>Total: {totalFeedback}</p>
      </li>
      <li>
        <p>Positive: {positiveFeedback}%</p>
      </li>
    </ul>
  ) : (
    <Notification text={"No feedback yet"} />
  );
};
