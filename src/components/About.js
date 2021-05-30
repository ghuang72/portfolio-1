import { React, useState } from "react";
import "./About.css";
import currentpic from "../images/currentpic.JPG";
import babypic from "../images/babypic.jpg";
import baking from "../images/baking.jpg";
import brain from "../images/brain.jpg";
import research from "../images/research.jpg";
import techinnovation from "../images/techinnovation.jpg";
import western from "../images/western.jpg";
import wfn from "../images/wfn_LI.jpg";

console.log(currentpic);
console.log(babypic);
console.log(baking);
console.log(brain);
console.log(research);
console.log(techinnovation);
console.log(western);
console.log(wfn);

function About() {
  //   const currentpic = require("../images/currentpic.JPG");
  const [click, setClick] = useState(false);
  const [clickPic, setPic] = useState(currentpic);
  const [currentFFIndex, setFF] = useState(-1);
  //   const funFact = [
  //     "I just finished my second year of university at Western.",
  //     "I'm pursuing a specialization in neuroscience.",
  //     "I'm currently working as a Research Assistant at Sunnybrook!",
  //     "I'm also part of Western Founders Network, a super cool club.",
  //     "I'm interested in science, technology, and the intersection between the two!",
  //     "In my free time I like to bake - send me your favourite recipe, I'd love to try it out!",
  //   ];

  const funFact = [
    {
      text: "I just finished my second year of university at Western.",
      img: western,
    },
    { text: "I'm pursuing a specialization in neuroscience.", img: brain, },
    {
      text: "I'm currently working as a Research Assistant at Sunnybrook!",
      img: research,
    },
    {
      text: "I'm also part of Western Founders Network, a super cool club.",
      img: wfn,
    },
    {
      text: "I'm interested in science, technology, and the intersection between the two!",
      img: techinnovation,
    },
    {
      text: "In my free time I like to bake - send me your favourite recipe, I'd love to try it out!",
      img: baking,
    },
    {
      text: <a className='about-linkedin' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Check out my LinkedIn if you want to see more!</a>,
      img: currentpic,
    },
  ];
  const handleClick = () => {
    setClick(true);
    if (currentFFIndex === funFact.length - 1) {
      setFF(0);
      setPic(funFact[0].img)
    } else {
      const newFFIndex = currentFFIndex + 1;
      setFF(newFFIndex);
      setPic(funFact[currentFFIndex+1].img)
    }
  };

  const handlePic = () => {
    clickPic === currentpic ? setPic(babypic) : setPic(currentpic);
    console.log("PICTURE CLICKED");
  };

  return (
    <div className="about-main">
      <h1 className="about-heading">
        Hey, nice to meet you!<br></br>My name is Grace.
      </h1>
      <div className="about-column">
        <div className="about-left">
          <button onClick={handleClick} className="generate-fact">
            <b>Generate Fun Fact!</b>
          </button>
          {click && (
            <div className="speech-bubble">
              {click && (
                <h1 className="about-funfact">
                  {funFact[currentFFIndex].text}
                </h1>
              )}
            </div>
          )}
        </div>
        <div className="about-right">
          <img
            className="about-picture"
            src={clickPic}
            onClick={handlePic}
            alt="Grace"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
