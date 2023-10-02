import "./App.css";
import Weather from "./Weather";
import { Audio } from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather city="Mexico" />

        <Audio
          height="80"
          width="80"
          radius="9"
          color="plum"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </header>
    </div>
  );
}

export default App;
