import React from 'react';
import Table from './components/Table'
import ErrorBanner from './components/ErrorBanner'
import fetchResources from 'helpers/client'
import { parseData } from 'helpers/parseData'
import { Row } from 'types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

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
      <div className='loading-spinner'>
        <FontAwesomeIcon icon={faSpinner} spin />
      </div>
    </div>
  );
}

export default App;
