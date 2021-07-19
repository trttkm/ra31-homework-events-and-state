import { useState } from 'react';

import { EmojiBoardList } from './Board/EmojiBoard-List';
import { EmojiBoardForm } from './Form/EmojiBoard-Form';

export function EmojiBoard() {
  const [emojiList, setEmojiList] = useState([]);
  
  const onStatusAdd = (data) => {
    setEmojiList(prev => ([
      ...prev, {
        id: performance.now(),
        emoji: data.emoji,
        status: data.status,
      },
    ]));
  };
  
  return (
    <div className="EmojiBoard">
      <EmojiBoardList list={emojiList} />
      <EmojiBoardForm onStatusAdd={onStatusAdd} />
    </div>
  );
}