import Child from "./Child";

export default function Parent({
  updateName,
  name,
  handleButtonClicked,
  handleButtonReset,
}) {
  return (
    <div className="parent">
      <h1 updateName={updateName} className="h1Parent">
        {name}
      </h1>
      <Child
        handleButtonClicked={handleButtonClicked}
        handleButtonReset={handleButtonReset}
      />
    </div>
  );
}
