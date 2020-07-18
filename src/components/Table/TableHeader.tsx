import React from 'react'
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
      input.checked = true
      input.indeterminate = false
    } else if (activeRows.length === 0) {
      input.checked = false
      input.indeterminate = false
    } else {
      input.checked = false
      input.indeterminate = true
    }
  }

  return (
    <thead>
      <tr>
        <th>
          <input
            onChange={toggleRows}
            ref={inputRef}
            type='checkbox'
          />
          contact
        </th>
        <th>total value</th>
        <th>location</th>
        <th>deals</th>
        <th>tags</th>
      </tr>
    </thead>
  )
}
