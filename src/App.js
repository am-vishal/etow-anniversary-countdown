import React, { useEffect, useState } from "react";
import "./App.css";
import 'tachyons';

// var fireworksReact = require("fireworks-react")
function App() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = new Date(`${2021}-8-12`) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });



  return (
    <div className="tc center mv0 mw0 dib ph4 f2 p2 pa4-ns br3">
      <h2 style={{ textShadow: "1px 1px 2px black", textDecoration: "underline", fontSize: "1.2em" }}>ETOW {year} </h2>
      <h4 style={{ fontFamily: "'Great Vibes', cursive;" }}>With pride & joy we would like to invite you on 12th August to celebrate our ETOW 4th anniversary.
      We are so grateful that you have given us some of our most precious memories in our lives by your love and support. It would be great pleasure to have you with us on this special day.</h4>
      {timerComponents.length ? timerComponents : < span id="firework"></span>}
      <br />
      <br />
      <p className="tc center ba pa3 br3 bw1 mv0 shadow-5 dib grow" style={{
        background: "transparent", boxShadow: "1px 1px 1px 1px black"
      }}>
        <a style={{
          textDecoration: 'none', color: 'black'
        }} href="https://eithertalkorwalk.com/"><strong style={{ textShadow: "1px 1px 1px black" }} >Visit Now!</strong></a></p>
      <br />
      <p id="ww" style={{ textShadow: "1px 1px black" }}><strong>Warm Wishes</strong><br />ETOW Group</p>

    </div >
  );
}


export default App;