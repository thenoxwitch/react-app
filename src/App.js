import "./App.css";
import "./styles.css";
import Search from "./Search";
import "./Search.css";

export default function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-dark navbar">
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
          src="https://media.giphy.com/media/SzBJFywvZ1UbSc0mNI/giphy.gif"
          width="150px"
          alt="cute"
        />
        <br />
        <div class="container-fluid">
          <Search />
        </div>

        <br />
        <div>
          {" "}
          <h2>Tuesday 16:00</h2>
          <h1>London</h1>
          <div class="row">
            <div class="col">
              <div class="conditions">
                <strong> Humidity </strong>
                <br />
                <em> 24% </em>
                <br />
                <strong> Wind</strong>
                <br />
                <em> 23km/hr </em>
              </div>
            </div>
            <div class="col">
              <div class="description">
                <strong>Mostly Cloudy</strong>
              </div>
            </div>
          </div>
          <br />
        </div>

        <img
          class="main-icon"
          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          alt="clear"
          id="icon"
        />
        <h3 id="temperature">16</h3>
        <p class="units">C</p>
      </div>
      <br />
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
