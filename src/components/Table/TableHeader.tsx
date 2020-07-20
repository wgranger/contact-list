import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { Row } from 'types'

export interface TableHeaderProps {
  activeRows: Array<Row>;
  setActiveRows: (value: Row[]) => void;
  rows: Array<Row>;
}

export default function TableHeader({ activeRows, setActiveRows, rows }: TableHeaderProps) {
  const allSelected = activeRows.length === rows.length

  const toggleRows = () => {
    const nextState = allSelected ? [] : rows
    setActiveRows(nextState)
  }

  const inputRef = React.useRef<HTMLInputElement>(null)


  if (inputRef && inputRef.current) {
    const input = inputRef.current
    if (allSelected) {
      input.indeterminate = false
    } else if (activeRows.length === 0) {
      input.indeterminate = false
    } else {
      input.indeterminate = true
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') toggleRows()
  }

  return (
    <thead>
      <tr>
        <th>
          <input
            checked={allSelected}
            id='checkAll'
            name='checkAll'
            onChange={toggleRows}
            onKeyDown={handleKeyDown}
            ref={inputRef}
            type='checkbox'
          />
          <label htmlFor="checkAll">contact</label>
        </th>
        <th>total value</th>
        <th>location</th>
        <th>deals</th>
        <th>tags</th>
        <th>
          <FontAwesomeIcon icon={faEllipsisH} />
        </th>
      </tr>
    </thead>
  )
}
