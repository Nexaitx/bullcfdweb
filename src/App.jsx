import { Routes, Route } from 'react-router-dom';
import Home from './MainApp';
import ThankYouPage from './ThankYouPage'; // <-- Correct import


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thank-you" element={<ThankYouPage />} /> 
    </Routes>
  );
}

export default App;
