import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
  },[loading]);

  return !loading ? (
    <>  
      <Header />
        <div className='w-full min-h-screen border'>
          <Outlet />
        </div>
      <Footer />
    </>
  ) : <div className='w-full flex justify-center items-center space-x-10 space-y-10'>
      <h1 className='bg-black text-white'>Loading...</h1>
    </div>
}

export default App;
