import React from 'react';
import Table from './components/Table'
import ErrorBanner from './components/ErrorBanner'
import fetchResources from 'helpers/client'
import { parseData } from 'helpers/parseData'
import { Row } from 'types'

function App() {
  const [fetchError, setFetchError] = React.useState<boolean>(false)
  const [contacts, setContacts] = React.useState<Row[]>([])

  React.useEffect(() => {
    const setResources = async () => {
      const response = await fetchResources()

      const validData = response?.data
      if (validData) {
        const parsedData = parseData(validData)
        setContacts(parsedData)
      } else {
        setFetchError(true)
      }
    }
    setResources()
  }, [])

  return (
    <div className="App">
      {fetchError && <ErrorBanner toggleBanner={setFetchError} />}
      <Table contacts={contacts} />
    </div>
  );
}

export default App;
