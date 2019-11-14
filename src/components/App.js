import React from 'react';
import Footer from './Footer';
import MainSection from './MainSection';

class App extends React.Component {
  render() {
    return (
        <React.Fragment>
          <div className='container'>    
              <MainSection />
              <Footer />
          </div>
        </React.Fragment>
    );
  }
}

export default App;
