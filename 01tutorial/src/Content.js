const Content = () => {
  const randomName = () => {
    const names = ["Dave", "Atanu", "Bob", "Kevin"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  return (
    <main>
      <p>Hello {randomName()}</p>
    </main>
  );
};

export default Content;
