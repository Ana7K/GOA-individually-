export default function App() {
  const items = [
    { row: 0, text: "lomi" },
    { row: 1, text: "vefxvi" },
    { row: 2, text: "mgeli" },
    { row: 3, text: "xbo" },
  ];
  return (
    <div className="flex gap-4 m-2 ">
      {items.map((item, index) => (
        <div
          key={item.row}
          data-lomi={index == 2 ? "true" : "false"}
          className="p-4 data-[lomi=true]:bg-green-500 data-[lomi=false]:bg-red-500"
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}
