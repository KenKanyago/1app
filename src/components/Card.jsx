
export default function Card({titleColor,title, text, texxtColor}) {
  return (
    <div className={`border p-4 rounded-lg shadow-md`}>
            <h2 className={`text-${titleColor} font-bold`}>{title}</h2>
            <p>{text}{texxtColor}</p>
        </div>
  );
}
