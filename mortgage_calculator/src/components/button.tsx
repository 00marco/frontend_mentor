export default function CustomButton(props) {
  return (
    <div className="bg-amber-500 grid grid-cols-2 auto-rows-min">
      <img
        src={`https://picsum.photos/id/${
          Math.floor(Math.random() * 100)
        }/200/300`}
        alt="random image"
      />
      <button>Calculate Repayments</button>
    </div>
  );
}
