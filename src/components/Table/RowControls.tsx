import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function RowControls() {
  const [isOpen, setOpen] = React.useState<boolean>(false)
  const [activeControl, setActiveControl] = React.useState<string>('Email')
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const toggleOpen = () => setOpen(!isOpen)
  const toggleControl = (control: string) => {
    setOpen(false)
    setActiveControl(control)
  }

  function pressedEscape(e: KeyboardEvent) {
    const ESC_KEY_CODE = 27
    if (e.keyCode === ESC_KEY_CODE) setOpen(false)
  }

  function clickedOnControl(e: Event) {
    const target = e.target as HTMLElement;
    const ref = buttonRef && buttonRef.current
    if (ref && !ref.contains(target)) setOpen(false)
  }

  React.useEffect(() => {
    window.addEventListener('keyup', pressedEscape)
    window.addEventListener('click', clickedOnControl)

    return () => {
      window.removeEventListener('keyup', pressedEscape)
      window.removeEventListener('click', clickedOnControl)
    }
  }, [])

  return (
    <div className='row-controls'>
      <button
        className='row-controls__label'
        onClick={toggleOpen}
        ref={buttonRef}
      >
        <div>
          <span>{activeControl}</span>
        </div>
        <FontAwesomeIcon icon={faCaretDown} />
      </button>
      {isOpen && (
        <div className='row-controls__dropdown'>
          <div>
            <button onClick={() => toggleControl('Edit')}>Edit</button>
            <button onClick={() => toggleControl('Email')}>Email</button>
            <button onClick={() => toggleControl('Call')} onBlur={() => setOpen(false)}>Call</button>
          </div>
        </div>
      )}
    </div>
  )
}
