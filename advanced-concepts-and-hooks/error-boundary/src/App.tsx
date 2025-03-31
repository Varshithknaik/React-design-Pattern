import Child from "./component/Child";
import { ErrorBoundary } from "./component/error-boundary";

function App() {
  return (
    <>
      <h1> Parent Component </h1>
      <ErrorBoundary
        fallback={<div>Something went wrong! At Parent Level</div>}
      >
        <Child />
      </ErrorBoundary>
    </>
  );
}

export default App;
