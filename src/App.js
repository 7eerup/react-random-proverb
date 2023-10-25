import logo from './logo.svg';
import './App.css';

function App() {
  const proverbs = ["Stay Hungry, Stay Foolish","Quality is more important than quantity","The only way to do great work is love what you do","Your time is limited So don't waste it living someone else's life"]

  const getRandomIndex = (length) => {
    return parseInt(Math.random() * length);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {proverbs[getRandomIndex(proverbs.length)]}
      </header>
    </div>
  );
}

export default App;
