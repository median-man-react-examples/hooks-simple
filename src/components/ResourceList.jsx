import React, { useState, useEffect } from 'react'
import axios from 'axios'

const resourceUrl = resource =>
  `http://jsonplaceholder.typicode.com/${resource}`

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([])
  const fetchResources = async resource => {
    const { data } = await axios.get(resourceUrl(resource))
    setResources(data)
  }
  useEffect(() => {
    fetchResources(resource)
  }, [resource])
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
