import "./App.css";
import TasksBoard from "./components/tasks-board";

function App() {
  // const [person, setPerson] = useState({ name: "Superman", age: 0 });

  // const onChange = () => {
  //   // This wont work
  //   person.age = 24;

  //   // This will work
  //   setPerson((person) => ({ ...person, age: 24 }));
  //   console.log(person);
  // };
  return (
    <>
      <TasksBoard />
    </>
  );
}

export default App;
