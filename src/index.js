import React from "react";
import ReactDOM from "react-dom";

const name = ["Beyonce", "Jack Bauer", "Chuck Norris"];
const img = [
  "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
  "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
  "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
];
const tel = ["+123 456 789", "+987 654 321", "+918 372 574"];

const email = ["b@beyonce.com", "jack@nowhere.com", "gmail@chucknorris.com"];

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card name={name[0]} img={img[0]} tel={tel[0]} email={email[0]} />
    <Card name={name[1]} img={img[1]} tel={tel[1]} email={email[1]} />
    <Card name={name[2]} img={img[2]} tel={tel[2]} email={email[2]} />
  </div>,
  document.getElementById("root")
);
