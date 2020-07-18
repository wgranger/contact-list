import React from 'react'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import mockInfo from './info.js'
import { Row } from 'types'

function renderRows(rows: Array<Row>) {
  return rows.map((row, i) => <TableRow key={`TABLE_ROW_${i}`} row={row} />)
}

export default function Table() {
  return (
    <table className='contacts-table'>
      <TableHeader />
      <tbody>
        {renderRows(mockInfo)}
      </tbody>
    </table>
  )
}
