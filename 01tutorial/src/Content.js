const Content = () => {
  const randomName = () => {
    const names = ["Dave", "Atanu", "Bob", "Kevin"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  const nameClick = () => {
    console.log("You clicked it");
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
        Hello {randomName()}!
      </p>
      <button onClick={nameClick}>
        Click It
      </button>
      <button onClick={() => nameClick2("Atanu Majumder")}>
        Click It
      </button>
      <button onClick={(e) => nameClick3(e)}>
        Click It
      </button>
    </main>
  );
};

export default Content;
