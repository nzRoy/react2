import "./App.css";
import Latte from "./Latte";

const Coffee = (props) => {
  console.log(props);

  return <h2>커피도 맛있다2</h2>;
};

const App = () => {
  return (
    <div className="App">
      <Latte></Latte>
      <Coffee fav="Latte" hate="Esproesso" soso="GreenTee"></Coffee>
    </div>
  );
};

export default App;
