import usePuppeteerStore from "../store/puppeteerStore";

function NameModal() {
  const setName = usePuppeteerStore((state) => state.setName);
  const setStage = usePuppeteerStore((state) => state.setStage);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputName = e.target.elements.name.value;
    setName(inputName);
    setStage("quiz");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Enter name" />
      <button type="submit">Start</button>
    </form>
  );
}
