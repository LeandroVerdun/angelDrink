import React from 'react';
import { useCounter } from './hook/useCounter';
import { ChangeImg } from './hook/ChangeImg';
import { EditableHeader } from './EditableHeader';

export const PlayerCard = ({ showVs }) => {
    const { contador, incrementar, decrementar, resetear } = useCounter();

    return (
        <div className="player-card-container" style={{ display: 'flex', flexDirection: 'row' }}>
            {showVs && <h4 className='h4'>VS</h4>}
            <div className="card">
                <ChangeImg />
                <div className="card-body">
                    <EditableHeader></EditableHeader>
                    <p className='count'>Count: {contador}</p>
                    <div className='beer-container'>
                        <div>
                            <button className="btn btn-danger menos" onClick={() => decrementar()}>-</button>
                            <p className='beer'>🍺</p>
                            <button className="btn btn-success mas" onClick={() => incrementar()}>+</button>
                        </div>
                        <button className="btn btn-primary btn-reset" onClick={() => resetear()}>Reset</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};
