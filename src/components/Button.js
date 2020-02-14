import React from 'react';

const Button = ({diplayButtonName, clickHandler}) => (
    <button onClick={clickHandler}>{diplayButtonName}</button>
);

export default Button;