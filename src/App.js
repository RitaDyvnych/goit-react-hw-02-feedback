import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () => {
    this.setState((prevState) => {
      return { good: prevState.good + 1 };
    });
  };
  handleClickNeutral = () => {
    this.setState((prevState) => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  handleClickBad = () => {
    this.setState((prevState) => {
      return { bad: prevState.bad + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = Math.round(
      (good / countTotalFeedback) * 100
    );
    return (
      <div className="App">
        <h2>Please leave feedback</h2>
        <button onClick={this.handleClickGood}>Good</button>
        <button onClick={this.handleClickNeutral}>Neutral</button>
        <button onClick={this.handleClickBad}>Bad</button>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {countTotalFeedback}</p>
        <p>Positive feedback: {countPositiveFeedbackPercentage}</p>
      </div>
    );
  }
}

export default App;
