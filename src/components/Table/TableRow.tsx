import React from 'react'
import { Row } from 'types'

export default function TableRow(props: { row: Row }) {
  return (
    <tr>
      <td>
        <input type='checkbox' />
        {props.row.contact}
      </td>
      <td>{props.row.value}</td>
      <td>{props.row.location}</td>
      <td>{props.row.deals}</td>
      <td>{props.row.tags}</td>
    </tr>
  )
}
