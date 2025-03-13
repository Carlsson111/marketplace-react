import React from 'react';
import NavbarComponent from './components/navbar';
import Heading from './components/Heading';
import Body from './components/body';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <div className="container-fluid">
        <NavbarComponent />
        <Heading />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;