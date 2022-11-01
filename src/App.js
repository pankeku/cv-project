import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import General from './components/General';
function App() {
  return (
    <div className="App">
      <h2>CV MAKER</h2>
      <General />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
