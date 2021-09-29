import Interview from "./components/Interview";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello and good luck :)</h1>
      <h2>Your task for today is:</h2>
      <ul>
        <li>Fetch data from https://restcountries.eu/rest/v2/all</li>
        <li>
          Find UK record. Each object in array has property alpha2Code. UK has
          alpha2code 'GB'.
        </li>
        <li>
          Add text input field and allow to search countries by name ('name'
          property)
        </li>
        <li>Display results underneath text field and limit them to 10</li>
      </ul>

      <div className="playground">
        <Interview />
      </div>
    </div>
  );
}
