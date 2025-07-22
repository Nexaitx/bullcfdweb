import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './MainApp';
import ThankYouPage from './ThankYouPage';
 
function App() {
  const location = useLocation();
 
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page_path: location.pathname,
      page_title: document.title || 'BullCFD', // Fallback title
    });
  }, [location.pathname]); // Trigger on route change
 
  return (
<Routes>
<Route path="/" element={<Home />} />
<Route path="/thank-you" element={<ThankYouPage />} />
</Routes>
  );
}
 
export default App;