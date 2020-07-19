import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function RowControls() {
  const [isOpen, setOpen] = React.useState<boolean>(false)
  const toggleOpen = () => setOpen(!isOpen)

  return (
    <div className='row-controls'>
      <button className='row-controls__label' onClick={toggleOpen}>
        <div>
          <span>Email</span>
        </div>
        <FontAwesomeIcon icon={faCaretDown} />
      </button>
      {isOpen && (
        <div className='row-controls__dropdown'>
          <div>
            <button>Edit</button>
            <button>Email</button>
            <button>Call</button>
          </div>
        </div>
      )}
    </div>
  )
}
