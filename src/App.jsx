import './App.css';
import React from "react";

import Card from "./components/layout/Card";
import Aleatorio from "./components/Aleatorio";
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';


// eslint-disable-next-line import/no-anonymous-default-export
export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#04 Desafio Aleatório" color="#080">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 Fragmento">
                <Fragmento />
            </Card>

            <Card titulo="#02 Com Parâmetro">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Pedro"
                    nota={9.7}
                />
            </Card>

            <Card titulo="#01 Primeiro Componente">
                <Primeiro> </Primeiro>
            </Card>

        </div>

    </div>
