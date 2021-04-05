import Child from "./Child";

export default function Parent({
  name,
  handleButtonClicked,
  handleButtonReset,
}) {
  return (
    <div className="parent">
      <h1 className="h1Parent">{name}</h1>
      <Child
        nameForClickMe="Mike"
        nameForReset="Pete"
        handleButtonClicked={handleButtonClicked}
        handleButtonReset={handleButtonReset}
      />
    </div>
  );
}
