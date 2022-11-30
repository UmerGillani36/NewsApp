import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import NewsContext from './components/NewsContext';


function App() {
  return (
    <>

      <NavBar />
      <div className='App'>
        <NewsContext>
          <News />
        </NewsContext>
      </div>
    </>

  );
}

export default App;
