import React from 'react'
import Avatar from '../Avatar'
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

  return (
    <tr>
      <td>
        <div className='contacts-table__contact'>
          <input type='checkbox' checked={activeRow} onChange={toggleRow} />
          <Avatar name={row.contact} />
          <span>{row.contact}</span>
        </div>
      </td>
      <td>{row.value}</td>
      <td>{row.location}</td>
      <td>{row.deals}</td>
      <td>{row.tags && row.tags.join(', ').toString()}</td>
    </tr>
  )
}
