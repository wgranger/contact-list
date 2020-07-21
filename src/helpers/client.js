import axios from 'axios'

export default function fetchResources() {
  const key = process.env.REACT_APP_API_KEY
  const corsAnywhere = process.env.REACT_APP_CORS_ANYWHERE
  const host = process.env.REACT_APP_HOST
  const version = '/api/3'
  const resource = '/contacts'
  const path = corsAnywhere + host + version + resource

  const options = {
    url: path,
    method: 'GET',
    headers: {
      'Api-Token': key,
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }

  axios(options).then(response => {
    console.log(response);
  })
}
