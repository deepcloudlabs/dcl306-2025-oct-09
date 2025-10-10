export default function Button({label, click, color}) {
    return (
      <button className={"btn ".concat(color)}
              onClick={click}>{label}</button>
    );
}