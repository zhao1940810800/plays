import axios from 'axios'

export const request= (param:any)=>{
    let method=param.method
    let url= `http://localhost:3000${param.url}`
  if (method === 'GET') {
    return axios
      .get(url, {
        params: param.data || {},
      })
      .then((res: any) => {
        return res.data
      })
  } else if (method === 'POST') {
    return axios({
      method: 'post',
      url: url,
      data: param.data || {},
      headers: param.headers || {},
    }).then((res: any) => {
      return res.data
    })
  }

}
