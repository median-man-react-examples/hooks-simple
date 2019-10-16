import { useState, useEffect } from 'react'
import axios from 'axios'
const resourceUrl = resource =>
  `http://jsonplaceholder.typicode.com/${resource}`
const createFetchResources = setResources => async resource => {
  const { data } = await axios.get(resourceUrl(resource))
  setResources(data)
}
export const useResources = resource => {
  const [resources, setResources] = useState([])
  useEffect(() => {
    createFetchResources(setResources)(resource)
  }, [resource])
  return resources
}
