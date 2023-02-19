// import logo from './logo.svg'; 
import './App.css';
import { useState } from 'react';
import Feedbackform from './components/Feedbackform';

function App() {

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log("Form Submitted successfully", name)
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className='Field'>
              <label htmlFor='name'>Name : </label>
              <input id="name" type="text" placeholder='Name' name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <button disabled={!name} type="submit">Submit</button>
          </fieldset>
        </form>
      </header>
    <Feedbackform />
    </div>
  );
}

export default App;
