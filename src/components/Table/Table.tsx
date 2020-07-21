import React from 'react'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import { Row } from 'types'

interface TableProps {
  contacts: Row[]
}

function renderRows(activeRows: Row[], setActiveRows: (value: Row[]) => void, rows: Row[]) {
  return rows.map((row, i) => {
    return (
      <TableRow
        key={`TABLE_ROW_${i}`}
        activeRows={activeRows}
        setActiveRows={setActiveRows}
        row={row}
      />
    )
  })
}

export default function Table({ contacts }: TableProps) {
  const [activeRows, setActiveRows] = React.useState<Row[]>([])

  return (
    <table className='contacts-table'>
      <TableHeader
        activeRows={activeRows}
        setActiveRows={setActiveRows}
        rows={contacts}
      />
      <tbody>
        {renderRows(activeRows, setActiveRows, contacts)}
      </tbody>
    </table>
  )
}
