import React, { useState } from 'react';
import './App.css';
import Main from './view/Main';
import Sub from './view/Sub';

function App() {

  const [page, setPage] = useState<'main' | 'sub'>('main');

  return (
    <>
      {page === 'main' ? (<Main setPage={setPage} />) : (<Sub />)}
    </>
  );
}
export default App;
