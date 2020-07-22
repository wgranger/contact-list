import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

interface ErrorBannerProps {
  message?: string;
  toggleBanner: (value: boolean) => void;
}

const DEFAULT_MESSAGE = 'Unable to process request, please refresh the page'

export default function ErrorBanner({ message = DEFAULT_MESSAGE, toggleBanner }: ErrorBannerProps) {
  return (
    <div className='error-banner'>
      <div>
        <FontAwesomeIcon icon={faExclamationCircle} />
        <span>{message}</span>
      </div>
      <div>
        <button onClick={() => toggleBanner(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  )
}
