import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const mainTitle = "Give Feedback";
  const statsTitle = "Statistics";
  // const btnInfo = {

  // };
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const giveGood = () => setGood(good + 1);
  const giveNeutral = () => setNeutral(neutral + 1);
  const giveBad = () => setBad(bad + 1);
  const getAverage = () => (good - bad) / (good + neutral + bad);
  const getPositive = () => (good * 100) / (good + neutral + bad);

  return (
    <body>
      <Title text={mainTitle} />
      <Button onClick={giveGood} text="good" />
      <Button onClick={giveNeutral} text="neutral" />
      <Button onClick={giveBad} text="bad" />
      <Title text={statsTitle} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        average={getAverage()}
        positive={getPositive()}
      />
    </body>
  );
};

const Title = ({ text }) => <h1>{text}</h1>;
const Button = ({ onClick, text }) => (
  <button class="fill" onClick={onClick}>
    {text}
  </button>
);
const StatisticLine = ({ stats, text, percent, isInt }) => {
  if (!percent && !isInt) {
    return (
      <tr>
        <td>{text}</td>
        <td>{stats.toFixed(1)}</td>
      </tr>
    );
  } else if (percent && !isInt) {
    return (
      <tr>
        <td>{text}</td>
        <td>{stats.toFixed(1)} %</td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{text}</td>
        <td>{stats}</td>
      </tr>
    );
  }
};
const Statistics = ({ good, neutral, bad, average, positive }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  } else {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="Good" stats={good} isInt={true} />
            <StatisticLine text="Neutral" stats={neutral} isInt={true} />
            <StatisticLine text="Bad" stats={bad} isInt={true} />
            <StatisticLine text="Average" stats={average} />
            <StatisticLine text="Positive" stats={positive} percent={true} />
          </tbody>
        </table>
      </div>
    );
  }
};

export default App;
