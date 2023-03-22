import "./Card.css"
import React from 'react'


// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    return (
        <div className="Card">
            <div>Conteúdo</div>
            <div>{props.titulo}</div>
        </div>
    );
};