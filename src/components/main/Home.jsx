import React from "react";

function Home() {
  return (
    <section id="home">
      <article className="dates">
        <h1 className="name">
          antonella <br></br> del vecchio
        </h1>
        <article className="line-between"></article>
        <div className="other-dates">
          <span>Web developer in progress</span>
          <span>27 years old</span>
          <span>Mendoza, Argentina</span>
        </div>
      </article>
      <img
        className="img-home"
        src="https://placekitten.com/640/360"
        alt="cat"
      />
    </section>
  );
}

export default Home;
