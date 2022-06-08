import logo from './logo.svg';
import './App.css';
import Body from '../Body/Body';

const App=()=> {


  const testFunc = () => {
    alert( 'in here!' );
  }

  return (
    <div className="App">
      <header className="App-header">
        <p onClick={ testFunc }>
          Dorianventory
        </p>
      </header>
      <Body />
    </div>
  );
}

export default App;
