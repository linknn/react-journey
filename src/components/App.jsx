import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Summer from "./Summer";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Summer selectedSummer="" />
    </div>
  );
}

export default App;
