import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <form>
          <fieldset>
            <div className='Field'>
              <label>Name : </label>
              <input type="text" placeholder='Name' name="name" />
            </div>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </header>
    </div>
  );
}

export default App;
