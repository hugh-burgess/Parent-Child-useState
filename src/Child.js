export default function Child({ handleButtonClicked, handleButtonReset }) {
  return (
    <div className="child">
      <h1 className="h1Child">Child</h1>
      <button onClick={handleButtonClicked} className="clickMeButton">
        Click Me
      </button>
      <button onClick={handleButtonReset} className="resetButton">
        Reset
      </button>
    </div>
  );
}
