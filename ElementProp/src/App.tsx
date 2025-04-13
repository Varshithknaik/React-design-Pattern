import Button from "./components/button";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <Button size="s">Small</Button>
      <Button size="m">Medium</Button>
      <Button size="l">Large</Button>
      <Button size="xl">xLarge</Button>
      <Button As="a" href="/">
        Link
      </Button>
    </div>
  );
}

export default App;
