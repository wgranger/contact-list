import React from 'react'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import mockInfo from './info.js'

export interface Row {
  contact: string;
  value: number;
  location: string;
  deals: number;
  tags: Array<string>;
}

function renderRows(rows: Array<Row>) {
  return rows.map(row => <TableRow row={row} />)
}

export default function Table() {
  return (
    <div>
      <TableHeader />
      {renderRows(mockInfo)}
    </div>
  )
}
