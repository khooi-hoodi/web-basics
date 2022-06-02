import "./App.css";
import Button from "../Button";
import TabItem from "../TabItem";

function App() {
  return (
    <div className="App">
      <h1>Thank You Sir An</h1>
      <Button backgroundColor="white" textColor="cyan" text="Click Me" />
      <TabItem text="Posts" />
      <TabItem text="Likes" />
    </div>
  );
}

export default App;
