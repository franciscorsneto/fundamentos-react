import React from "react";

import Card from "./components/layout/Card";
import Aleatorio from "./components/Aleatorio";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'


// eslint-disable-next-line import/no-anonymous-default-export
export default _ =>
    <div id="app">
        <h1>Fundamentos React</h1>

        <Card> titulo="Exemplo de card"</Card>
        <Aleatorio min={10} max={60} />
        <Fragmento />
        <ComParametro
            titulo="Situação do aluno"
            aluno="Pedro"
            nota={9.7}
        />
        <Primeiro></Primeiro>
    </div>
