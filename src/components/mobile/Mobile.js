import React, { useState } from 'react';

const Mobile = () => {
    const [power, setPower] = useState(100)
    const loosePower = () => {
        if (power > 0) {
            const newPower = power - 10;
            setPower(newPower); 
        }
    }
    return (
        <div style={{border: '2px solid aqua', margin:'20px', padding:'20px'}}>
            <h1>Power: {power}</h1>
            <button onClick={loosePower}>Battery Down</button>
        </div>
    );
};

export default Mobile;