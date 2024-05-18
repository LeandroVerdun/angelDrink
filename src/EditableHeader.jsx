import React, { useState } from 'react';

export const EditableHeader = () => {
  const [text, setText] = useState('');
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
      if (text.trim() === '') {
        setText('Player');
      }
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Player name"
          className='name-input'
        />
      ) : (
        <div>
          <h5 className="card-title player-name" onClick={handleEditClick}>
            {text.trim() === '' ? 'Player' : text}
          </h5>
        </div>
      )}
    </div>
  );
};
