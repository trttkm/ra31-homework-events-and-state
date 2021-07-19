import './LikeButton.css';
import { useState } from 'react';

export function LikeButton() {
  const [buttonState, setButtonState] = useState({ like: false, counter: 0 });
  
  const likeIcon = buttonState.like ? '💔' : '❤️';
  
  const onLikeToggle = () => {
    setButtonState(prev => ({ ...prev, like: !prev.like, counter: prev.counter + 1 }));
  };
  
  const enough = buttonState.counter === 9;
  
  return (
    <button className="LikeButton" onClick={enough ? undefined : onLikeToggle}>
      {likeIcon} {enough && 'хватит'}
    </button>
  );
}