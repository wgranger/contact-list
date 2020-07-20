import React from 'react';
import Table from './components/Table'
import ErrorBanner from './components/ErrorBanner'

function App() {
  return (
    <div className="App">
      <ErrorBanner />
      <Table />
    </div>
  );
}

export default App;
