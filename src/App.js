import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import SettingsPage from './components/SettingsPage';
import BlogsPage from './components/BlogPage';
// eslint-disable-next-line 
import BlogCard from './components/BlogCard';
import BlogInfo from './components/BlogInfo';
import Bloglist from './components/Bloglist';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App-header">
      My Blog Page
        <Navbar />
{/* Definies routes my application can take */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/settings' element={<SettingsPage />} />
          <Route path='/blog/:id' element={<BlogsPage />} />
          <Route path='/blogs' element={<BlogsPage />} />
          <Route path='/blog/:id' element={<BlogInfo />} />
          <Route path='/bloglist' element={<Bloglist />} />
          <Route path='/search' element={<SearchBar />} />
        </Routes>
    </div>
  );
}

export default App;
