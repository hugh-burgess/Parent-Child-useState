export default function Child({
  handleButtonClicked,
  handleButtonReset,
  nameForClickMe,
  nameForReset,
}) {
  return (
    <div className="child">
      <h1 className="h1Child">Child</h1>
      <button
        onClick={() => handleButtonClicked(nameForClickMe)}
        className="clickMeButton"
      >
        Click Me
      </button>
      <button
        onClick={() => handleButtonReset(nameForReset)}
        className="resetButton"
      >
        Reset
      </button>
    </div>
  );
}
