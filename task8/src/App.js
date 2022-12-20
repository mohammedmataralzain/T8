
import Counter from './counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter increase={15}/>
      <Counter increase={10}/>
    </div>
  );
}

export default App;
