import React from 'react';

import src from './allen_walker.jpg';

function Home() {
  return (
    <section className="Home">
      <h1 className="Home-title">You are in Home</h1>
      <div className="Home-photo">
        <img className="Home-image" src={src} alt="allen4dev avatar" />
      </div>
    </section>
  );
}

export default Home;
