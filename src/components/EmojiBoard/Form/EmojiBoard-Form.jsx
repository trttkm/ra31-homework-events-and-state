import { useState } from 'react';
import Picker from 'emoji-picker-react';

export function EmojiBoardForm({ onStatusAdd }) {
  const [status, setStatus] = useState('');
  const [chosenEmoji, setChosenEmoji] = useState(null);
  
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  
  const onInputChange = (e) => {
    const value = e.target.value;
    setStatus(value);
  };
  
  const onAdd = () => {
    if (chosenEmoji && status) {
      onStatusAdd({
        emoji: chosenEmoji.emoji,
        status,
      });
      setChosenEmoji(null);
      setStatus('');
    } else {
      // выставить ошибку
    }
  };
  
  return (
    <div className="EmojiBoar-Form">
      <input
        className="EmojiBoard-StatusInput"
        onChange={onInputChange}
        value={status}
      />
      <div>
        {chosenEmoji ? (
          <span>Вы выбрали: {chosenEmoji.emoji}</span>
        ) : (
          <span>Ничего не выбрано</span>
        )}
        <Picker onEmojiClick={onEmojiClick} />
      </div>
      <button
        className="EmojiBoard-AddButton"
        onClick={onAdd}
      >
        Добавить
      </button>
    </div>
  );
}