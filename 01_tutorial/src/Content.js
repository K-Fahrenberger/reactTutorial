import React from "react";

const Content = () => {
  const handleNameChange = () => {
    const names = ["Nick", "Lisa", "Ali"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  const handleClick = () => {
    console.log("You clicked it");
  };
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };
  const handleClick3 = (e) => {
    console.log(e.target);
  };
  return (
    <main>
      <p>Hello {handleNameChange()}</p>
      <button onClick={handleClick}>Press Me</button>
      <button onClick={() => handleClick2('Kev')}>Press Me</button>
      <button onClick={(e) => handleClick3(e)}>Press Me</button>
    </main>
  );
};

export default Content;
