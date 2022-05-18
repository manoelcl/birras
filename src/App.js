import "./App.css";
import { useState } from "react";
function App() {
  const [birras, setBirras] = useState();
  const [text, setText] = useState("");
  const cargarBirras = () => {
    fetch("https://api.punkapi.com/v2/beers/")
      .then((response) => response.json())
      .then((response) => setBirras(response));
  };

  return (
    <div className="App">
      <button onClick={cargarBirras}>Cargar cervezas</button>
      <input
        type="text"
        onChange={(e) => setText(e.target.value.toUpperCase())}
      />
      <div className="cervezas">
        {birras
          ? birras
              .filter(
                (birra) =>
                  birra.description.toUpperCase().search(text) !== -1 ||
                  birra.name.toUpperCase().search(text) !== -1
              )
              .map((birra) => (
                <article key={birra.id} className="card">
                  <h2>{birra.name}</h2>
                  <p>{birra.description}</p>
                  <img src={birra.image_url} alt={birra.name} />
                </article>
              ))
          : null}
      </div>
    </div>
  );
}

export default App;
