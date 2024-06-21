
export default function Card({title, text, color}) {
  return (
    <div className={`border p-4 rounded-lg shadow-md`}>
            <h2 className={`text-${color} font-bold`}>{title}</h2>
            <p>{text}{color}</p>
        </div>
  );
}
