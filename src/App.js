import "./App.css";
import "./styles.css";
import Search from "./Search";
import "./Search.css";

export default function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-light navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">
            {" "}
            WeatherPixel
          </a>
          <img
            src="https://cdn-icons-png.flaticon.com/128/365/365865.png"
            width="25px"
            alt="cute-icon"
          />
        </div>
      </nav>

      <div class="container-sm">
        <br />
        <img
          class="rainbow-gif"
          src="https://media.giphy.com/media/huyIAhSLfOeCk/giphy.gif"
          width="50px"
          alt="cute"
        />
        <br />

        <Search />

        <br />
        <div class="weather-forecast" id="forecast"></div>
      </div>
      <br />
      <p class="bottom-link">
        💜
        <a
          href="https://github.com/thenoxwitch/react-app"
          target="_blank"
          rel="noreferrer"
        >
          Open Source Code
        </a>
        by{" "}
        <a href="https://athanox-frontend.com" target="_blank" rel="noreferrer">
          Atenas G I.
        </a>
        💜
      </p>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}
