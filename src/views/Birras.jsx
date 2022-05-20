import { getBeers } from "../services";
import { useEffect, useState } from "react";

const Birras = () => {
  const [text, setText] = useState("");
  const [birras, setBirras] = useState();

  const cargarBirras = () => {
    getBeers(setBirras);
  };

  useEffect(cargarBirras, []);

  return (
    <>
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
    </>
  );
};

export default Birras;
