import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';
import BlogList from './Components/BlogList';
import BlogItemDetails from './Components/BlogItemDetails';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<BlogList />} /> {/* Use "element" to render components */}
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/blogs/:id" element={<BlogItemDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
