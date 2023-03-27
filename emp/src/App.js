import './App.css';
import AppHeader from './components/AppHeader';
import BlogData from './components/BlogData';

function App() {
  const course = 'React Js'
  return (
    <div className="App">
      <AppHeader title="Developers Africa" />
      <BlogData />
    </div>
  );
}

export default App;
