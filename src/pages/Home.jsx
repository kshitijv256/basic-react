import React from "react";
import logo from "../logo.svg";
import Card from "../components/Card";

function Home() {
  const [index, setIndex] = React.useState(0);
  return (
    <div>
      <h2>Home</h2>
      <p>My Home page</p>
      <span>selected index: {index}</span>
      <Card
        id="1"
        description="This is card 1"
        img={logo}
        selectCB={setIndex}
      />
      <Card
        id="2"
        description="This is card 2"
        img={logo}
        selectCB={setIndex}
      />
      <Card
        id="3"
        description="This is card 3"
        img={logo}
        selectCB={setIndex}
      />
    </div>
  );
}

export default Home;
