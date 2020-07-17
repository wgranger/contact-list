import React from 'react'

const columns = [
  'contact',
  'value',
  'location',
  'deals',
  'tags'
]

export function renderColumns() {
  return columns.map(column => {
    return <th>{column}</th>
  })
}

export default function TableHeader() {
  return (
    <tr>
      <th>
        <input type='checkbox' />
      </th>
      {renderColumns()}
    </tr>
  )
}
