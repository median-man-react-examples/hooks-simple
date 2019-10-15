import React, { useState, useEffect } from 'react'
import axios from 'axios'

const resourceUrl = resource =>
  `http://jsonplaceholder.typicode.com/${resource}`

const createFetchResources = setResources => async resource => {
  const { data } = await axios.get(resourceUrl(resource))
  setResources(data)
}

const useResources = resource => {
  const [resources, setResources] = useState([])
  useEffect(() => {
    createFetchResources(setResources)(resource)
  }, [resource])
  return resources
}

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
