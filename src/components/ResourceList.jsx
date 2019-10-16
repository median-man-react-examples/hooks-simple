import React from 'react'
import { useResources } from './useResources'

const ResourceList = ({ resource }) => {
  const resources = useResources(resource)
  return (
    <div>
      <ul>
        {resources.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  )
}

export default ResourceList
