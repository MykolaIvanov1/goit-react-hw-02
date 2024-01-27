export const Options = ({ onClickReset, onClickGood, totalFeedback }) => {
  return (
    <ul>
      <li>
        <button onClick={() => onClickGood("good")}>Good</button>
      </li>
      <li>
        <button onClick={() => onClickGood("neutral")}>Neutral</button>
      </li>
      <li>
        <button onClick={() => onClickGood("bad")}>Bad</button>
      </li>
      {totalFeedback > 0 && (
        <li>
          <button onClick={onClickReset}>Reset</button>
        </li>
      )}
    </ul>
  );
};
