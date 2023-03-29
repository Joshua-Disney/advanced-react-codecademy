import ReactDOM from "react-dom";
import React, { useState } from "react";
import { logError } from "./error-logging-service";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.reset = this.reset.bind(this);
  }

  // Create the reset() function here

  reset() {
    this.setState({ error: null });
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    logError(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h2>Ooofda!</h2>
          <button onClick={this.reset}>Start over</button>
        </div>
      );
    }
    return this.props.children;
  }
}

function LightSwitch({ switchNumber = 1 }) {
  const [isOn, setIsOn] = useState(false);
  const [badSwitchPressed, setBadSwitchPressed] = useState(false);

  if (badSwitchPressed) {
    throw new Error("Why do we even have this switch?");
  }

  const bgColor = isOn ? "white" : "black";
  const textColor = isOn ? "black" : "white";

  const handleLightSwitchClick = () => {
    setIsOn((isOn) => !isOn);
  };
  const handleBadSwitchClick = () => {
    setBadSwitchPressed(true);
  };

  return (
    <div
      className="lightSwitch"
      style={{ background: bgColor, color: textColor }}
    >
      <button onClick={handleLightSwitchClick}>
        {switchNumber} — {isOn ? "On" : "Off"}
      </button>
      <button onClick={handleBadSwitchClick}>Bad Switch</button>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <ErrorBoundary>
        <LightSwitch switchNumber={1} />
        <LightSwitch switchNumber={2} />
      </ErrorBoundary>
      <ErrorBoundary>
        <LightSwitch switchNumber={3} />
      </ErrorBoundary>
      <LightSwitch switchNumber={4} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
