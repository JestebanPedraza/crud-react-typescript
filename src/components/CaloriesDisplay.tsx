type CaloriesDisplayProps = {
  calories: number;
  text: string;
  color: string;
};
export default function CaloriesDisplay({
  calories,
  text,
  color,
}: CaloriesDisplayProps) {
  return (
    <p className="font-bold text-white rounded-full grid grid-cols-1 gap-3 text-center">
      <span className={`font-black text-6xl text-${color}-400`}>
        {calories}
      </span>
      {text}
    </p>
  );
}
