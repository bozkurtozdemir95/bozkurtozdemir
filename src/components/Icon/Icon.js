import React from 'react';

import sprite from '../../assets/icons/sprite.svg';

const Icon = ({className = '', name, size = 24, color, ...props}) => {
    const spriteUrl = sprite;

    return (
        <svg className={`${className}`} width={size} fill={color} height={size}>
            <use xlinkHref={`${spriteUrl}#${name}`}/>
        </svg>
    );
};
export default Icon;
