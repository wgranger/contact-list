import React from 'react'
import Avatar from '../Avatar'
import { Row } from 'types'

export default function TableRow(props: { row: Row }) {
  return (
    <tr>
      <td>
        <div className='contacts-table__contact'>
          <input type='checkbox' />
          <Avatar name={props.row.contact} />
          <span>{props.row.contact}</span>
        </div>
      </td>
      <td>{props.row.value}</td>
      <td>{props.row.location}</td>
      <td>{props.row.deals}</td>
      <td>{props.row.tags}</td>
    </tr>
  )
}
