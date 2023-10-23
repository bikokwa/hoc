import logo from "./logo.svg";
import "./App.css";

function WithTextDecoration(Component) {
  return (props) => {
    return <Component {...props} style={{ textDecoration: "underline" }} />;
  };
}

const Para = () => {
  return <p>I am a paragraph</p>;
};

const Text = (props) => {
  return <h1 {...props}>I am text</h1>;
};

const TextDecoration = WithTextDecoration(Text);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Para />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TextDecoration />
      </header>
    </div>
  );
}

export default App;
