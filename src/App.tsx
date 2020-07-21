import React from 'react';
import Table from './components/Table'
import ErrorBanner from './components/ErrorBanner'
import fetchResources from 'helpers/client'

function App() {
  const [fetchError, setFetchError] = React.useState<boolean>(false)
  fetchResources()

  return (
    <div className="App">
      {fetchError && <ErrorBanner toggleBanner={setFetchError} />}
      <Table />
    </div>
  );
}

export default App;
