import React from 'react';
import Navbar from './components/Navbar';
import './index.css';
import Section1 from './components/Section1';
import Section2 from './components/Section2';

const App = () => {
  return (
    <div>
      <div className='bimg'>
        {/* Split Background */}
        <div className="split-background">
          <Navbar />
          <Section1 />
        </div>
      </div>

      <Section2 />
    </div>
  );
};

export default App;
