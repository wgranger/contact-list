import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

interface ErrorBannerProps {
  message?: string
}

export default function ErrorBanner({ message }: ErrorBannerProps) {
  return (
    <div className='error-banner'>
      <div>
        <FontAwesomeIcon icon={faExclamationCircle} />
        <span></span>
      </div>
      <div>
        <button>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  )
}
