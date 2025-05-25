import "./App.css";
import DisplayMousePosition from "./components/render-props/display-mouse";
import { RenderMousePosition } from "./components/render-props/render-mouse";

function App() {
  return (
    <div className="container">
      <RenderMousePosition>
        {({ x, y }) => <DisplayMousePosition x={x} y={y} />}
      </RenderMousePosition>
    </div>
  );
}

export default App;
