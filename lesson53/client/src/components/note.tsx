interface Note {
  id: number;
  text: string;
  done: boolean;
}
interface NoteProps {
  items: Note[];
}

export default function Note({ items }: NoteProps) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <div key={item.id} className="p-2 border rounded-md">
          <span>{item.text}</span>
          &nbsp;
          <span>{item.done}</span>
        </div>
      ))}
    </div>
  );
}
