import React, { useState } from 'react';
import { PlayerCard } from './PlayerCard';

export const NewPlayer = () => {
  const [playerCards, setPlayerCards] = useState([]);
  const [showVs, setShowVs] = useState(false);

  const handleNewPlayerClick = () => {
    setPlayerCards([...playerCards, <PlayerCard key={playerCards.length} showVs={playerCards.length > 0 ? true : false} />]);
    setShowVs(true); // Cambiar a true después de agregar la primera carta
  };

  return (
    <div className="player">
      <h1 className='player-h1'>Angel Drink</h1>
      <button type="button" className="btn btn-success button" onClick={handleNewPlayerClick}>New Player</button>
      <div className="div-container" style={{ display: 'flex', flexDirection: 'row'}}>
        {playerCards.map((card, index) => (
          <div style={{ marginRight: '25px' }} key={index}>{card}</div>
        ))}
      </div>
    </div>
  );
};
