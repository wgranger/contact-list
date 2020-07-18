import React from 'react'

export interface AvatarProps {
  name?: string
}

export default function Avatar({ name }: AvatarProps) {
  const initials = name && name.split(' ').map(alias => alias[0])

  return (
    <div className='avatar'>
      <span>{initials}</span>
    </div>
  )
}
