import "./App.css";
import "./styles.css";
import Weather from "./Weather";
import "./Weather.css"



export default function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-dark navbar navbar-static-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">
            {" "}
            weather.cat
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

        <div class="bubble left">
          <p class="intro">
            Hi! <br /> I am weather cat...
          </p>
        </div>
        <img
          class="rainbow-gif"
          src="https://media.giphy.com/media/SzBJFywvZ1UbSc0mNI/giphy.gif"
          width="150px"
          alt="cute"
        />
        <br />
        <div class="container-fluid">
          <Weather />
        </div>

        <br />
        

      </div>

      <p class="container-fluid bottom-link">
        💜
        <a
          href="https://github.com/thenoxwitch/react-app"
          target="_blank"
          rel="noreferrer"
        >
          Open Source Code
        </a>{" "}
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
