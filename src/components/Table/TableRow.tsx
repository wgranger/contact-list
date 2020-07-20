import React from 'react'
import Avatar from '../Avatar'
import RowControls from './RowControls'
import { Row } from 'types'

export interface TableRowProps {
  activeRows: Row[];
  setActiveRows: (value: Row[]) => void;
  row: Row;
}

export default function TableRow({ activeRows, setActiveRows, row }: TableRowProps) {
  const activeRow = activeRows.includes(row)
  const toggleRow = () => {
    const activeRowsCopy = activeRows.slice()
    if (activeRow) {
      const rowIndex = activeRowsCopy.indexOf(row)
      activeRowsCopy.splice(rowIndex, 1)
    } else {
      activeRowsCopy.push(row)
    }
    setActiveRows(activeRowsCopy)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') toggleRow()
  }

  return (
    <tr>
      <td>
        <div className='contacts-table__contact'>
          <input
            type='checkbox'
            checked={activeRow}
            name={row.contact}
            onChange={toggleRow}
            onKeyDown={handleKeyDown}
          />
          <label htmlFor={row.contact}>
            <Avatar name={row.contact} />
          </label>
          <span>{row.contact}</span>
        </div>
      </td>
      <td>{`$${row.value.toLocaleString()}`}</td>
      <td>{row.location}</td>
      <td>{row.deals}</td>
      <td>{row.tags && row.tags.join(', ').toString()}</td>
      <td>
        <RowControls visible={activeRow} />
      </td>
    </tr>
  )
}
