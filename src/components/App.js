import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import MainSection from './MainSection';

class App extends React.Component {
  render() {
    return (
        <div>
          <div className='container'>
                <Header/>
                <MainSection />
                <Navbar />
                <Footer />
          </div>
      </div>
    );
  }
}

export default App;
