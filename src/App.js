import './App.css';
import GoalList from './components/goals/GoalList';

function App() {  
  return (
    <div className="App">
      <header className="App-header">
        <h3> Daily goals tracker</h3>
        <GoalList />
      </header>
    </div>
  );
}

export default App;
