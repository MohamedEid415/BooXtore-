import "./Input.css";
type propsSettings = {
  idName: string;
  type: string;
  inputName: string;
  value: number | string;
  handleFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function Input({
  idName,
  type,
  inputName,
  value,
  handleFunction,
}: propsSettings) {
  return (
    <label id="inputStyle" htmlFor={idName}>
      <span className="">{inputName}</span>
      <input
        type={type}
        name=""
        id={idName}
        placeholder={`Enter Your ${inputName}`}
        value={value}
        onChange={(e) => {
          handleFunction(e);
        }}
      />
    </label>
  );
}
