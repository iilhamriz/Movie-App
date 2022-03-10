import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainNav from './components/MainNav';
import { Container } from "@material-ui/core";
import Trending from './pages/Trending'
import Search from './pages/Search'
import Series from './pages/Series'
import Movies from './pages/Movies'

function App() {
  return (
    <Router>
     <Header />
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Container>
    </div>
    <MainNav />
    </Router>
  );
}

export default App;
