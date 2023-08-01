import { useState } from "react";

const Content = () => {
  const [name, setName] = useState('Rahul');
  const [count, setCount] = useState(0);

  const randomName = () => {
    const names = ["Dave", "Atanu", "Bob", "Kevin"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const nameClick = () => {
    setCount(count + 1)
    console.log(count);
  };

  const nameClick2 = (name) => {
    console.log(`${name} was clicked `);
  };

  const nameClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={nameClick}>
        Hello {name}!
      </p>

      <button onClick={randomName}>
        Change name
      </button>

      <button onClick={nameClick}>
        Click It
      </button>

      <button onClick={(e) => nameClick3(e)}>
        Click It
      </button>

    </main>
  );
};

export default Content;
