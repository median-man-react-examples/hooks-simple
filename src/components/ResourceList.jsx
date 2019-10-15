import React from 'react'

export const ResourceList = ({ resources }) => (
  <ul>
    {resources.map(({ title }) => (
      <li>{title}</li>
    ))}
  </ul>
)
