import React from 'react';
import Card from './Card';

function Cards() {
  return (
    <div>
      <center>
        <h1 className="cardHeading">Blogs</h1>
      </center>
      <div className="cardStyle container-fluid">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Cards;
