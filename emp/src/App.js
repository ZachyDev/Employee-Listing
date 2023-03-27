import './App.css';
import Employee from './components/Employee';
import AppHeader from './components/AppHeader';

function App() {
  const course = 'React Js'
  return (
    <div className="App">
      <AppHeader title="Developers Africa" course={course}/>
      <Employee />
    </div>
  );
}

export default App;
