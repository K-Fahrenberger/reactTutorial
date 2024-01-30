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
  return (
    <main>
      <p>Hello {handleNameChange()}</p>
      <button onClick={handleClick}>Press Me</button>
      <button onClick={() => handleClick2('Kev')}>Press Me</button>
    </main>
  );
};

export default Content;
