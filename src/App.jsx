import React, { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(props) {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2a3962';
      showAlert("Dark mode activated", "success");
      document.title = "Textify - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode activated", "success");
      document.title = "Textify - Light Mode";
    }
  };

  return (
    <>
      <Navbar home="Home" about="About" mode={mode} toggleMode={toggleMode} title='Textify' />
      <Alert alert={alert} />
      <div className='container my-3'>
      <TextForm mode={mode} showAlert={showAlert} />
        {/* <Router>
          <Routes>
            <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
            <Route path="/textform" element={<TextForm mode={mode} showAlert={showAlert} />} />
          </Routes>
        </Router> */}
      </div>
    </>
  );
}

export default App;
