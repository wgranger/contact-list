import React from 'react';
import Table from './components/Table'
import ErrorBanner from './components/ErrorBanner'

function App() {
  const [fetchError, setFetchError] = React.useState<boolean>(true)

  return (
    <div className="App">
      {fetchError && <ErrorBanner toggleBanner={setFetchError} />}
      <Table />
    </div>
  );
}

export default App;
