import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CardContainer from './components/CardContainer/CardContainer';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <CardContainer />
      </main>

      <Footer />

    </div>
  );
}

export default App;
