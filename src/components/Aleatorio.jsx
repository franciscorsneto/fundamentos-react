import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const { min, max } = props; //{ } se tiver do lado direito da expresão é um objeto, do lado esquerdo é um operador destructor

    const aleatorio = parseInt(Math.random() * (max - min)) + props.min
    return (
        <div>
            <h2>Valor aleatório</h2>
            <p>
                <strong> Valor Mínimo:</strong> {min}
            </p>
            <p>
                <strong> Valor Máximo:</strong> {max}
            </p>
            <p>
                <strong> Valor Escolhido:</strong> {aleatorio}
            </p>
        </div>
    )
}
