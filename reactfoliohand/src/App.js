import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/pages/Contact';
// import  Resumepdf from './components/pages/Resumepdf';
// import { pdfjs } from 'react-pdf';

function App() {
  // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Contact' component={Contact} />
          {/* <Route path='/Resume' component={Resumepdf} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
