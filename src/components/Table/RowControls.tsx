import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function RowControls() {
  const [selectedAction, selectAction] = React.useState<string>('')

  return (
    <div className='row-controls'>
      <div className='row-controls__label'>
        <span>Email</span>
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
    </div>
  )
}
