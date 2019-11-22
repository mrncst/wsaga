import React from 'react';
import Footer from './Footer';
import MainSection from './MainSection';
import Favicon from 'react-favicon';
import TagManager from 'react-gtm-module'

class App extends React.Component {
  render() {

    const tagManagerArgs = {
      gtmId: 'GTM-P4Z3BLR'
    };
   
    TagManager.initialize(tagManagerArgs);

    return (
        <React.Fragment>
        <Favicon url="../images/favicon-wsaga.ico"/>
          <div className='container'>    
              <MainSection />
              <Footer />
          </div>
        </React.Fragment>
    );
  }
}

export default App;
