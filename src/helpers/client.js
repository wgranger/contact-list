import axios from 'axios'

export default function fetchResources() {
  const key = process.env.REACT_APP_API_KEY
  const corsAnywhere = process.env.REACT_APP_CORS_ANYWHERE
  const host = process.env.REACT_APP_HOST
  const version = '/api/3'
  const resource = '/contacts'
  const includes = '?include=deals,contactTags.tag,contactLists.list'
  const proxy = 'http://127.0.0.1:8080/'
  const path = proxy + host + version + resource + includes

  const options = {
    url: path,
    method: 'GET',
    headers: {
      'Api-Token': key,
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }

  return axios(options).then(response => {
    return response
  }).catch(error => {
    return error
  })
}
