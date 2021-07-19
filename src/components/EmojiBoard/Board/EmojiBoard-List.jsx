export function EmojiBoardList({ list }) {
  return (
    <div className="EmojiBoard-List">
      {list.map(emoji => (
        <div className="EmojiBoard-Status" key={emoji.id}>
          {emoji.emoji}
          {emoji.status}
        </div>
      ))}
    </div>
  );
}