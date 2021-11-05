import "./App.css";
import Greet from "./components/Greet";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="App">
      <Greet name={"Doe, Jane"} rName={"Jane, Doe"} age={45} hcolor={"Black"} />
      <Greet
        name={"Smith, John"}
        rName={"John Smith"}
        age={88}
        hcolor={"Brown"}
      />
      <UserForm />
    </div>
  );
}
export default App;
