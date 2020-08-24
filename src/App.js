import React from "react";
import "./App.css";
import Game from "./components/game/Game";
import Cheeta from "./components/img/Cheetas.png";
import Cat from "./components/img/Tom.png";
import Fox from "./components/img/Fox.jpg";
import Lion from "./components/img/Lions.png";

function App(props) {
  const Cheetas = {
    name: "Fast Cheetas",
    logoSrc: Cheeta,
  };

  const tom = {
    name: "Sleepy Tom",
    logoSrc: Cat,
  };

  const fox = {
    name: "Clever Fox",
    logoSrc: Fox,
  };

  const lions = {
    name: "The Lions",
    logoSrc: Lion,
  };

  return (
    <div className="App">
      <Game venue="Cold Fires" homeTeam={tom} visitingTeam={Cheetas} />
      <Game venue="Siberian Tigers" homeTeam={fox} visitingTeam={lions} />
    </div>
  );
}

export default App;
