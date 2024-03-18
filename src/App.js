import logo from './logo.svg';
import './App.css';
import Navigacija from './components/Navigacija';
// index.js or App.js



function App() {
  return (
    <div className="App">
      <div className="container-fluid">
          <header className="App-header row text-primary-emphasis" >
            <div className="col-2">
              <img src={logo} className="App-logo" alt="logo" />
            </div>

            <div className="col-10">
               <Navigacija />
            </div>
          </header>

      </div>
    </div>
  );
}

export default App;
