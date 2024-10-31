export default function RadioButtonOptions(props) {
  return (
    <div>
      <text>{props.info_text}</text>
      <div className="grid auto-rows-min gap-3 mt-3">
        {props.children}
      </div>
    </div>
  );
}
