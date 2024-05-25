import React, { useEffect, useState, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingBar from 'react-top-loading-bar';

function App() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      setProgress(0);
      setProgress(10);
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Stop the previous interval if exists
      }

      intervalRef.current = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 10;
          if (newProgress >= 100) {
            clearInterval(intervalRef.current); // Stop the interval when progress reaches 100
            setTimeout(() => {
              setProgress(0); // Reset progress to 0 after a delay
            }, 200);
          }
          return newProgress;
        });
      }, 200);

      return () => {
        clearInterval(intervalRef.current);
      };
    };

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;