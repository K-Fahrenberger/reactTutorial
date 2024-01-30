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

  return (
    <main>
      <p>Hello {handleNameChange()}</p>
      <button onClick={handleClick}>Press Me</button>
    </main>
  );
};

export default Content;
