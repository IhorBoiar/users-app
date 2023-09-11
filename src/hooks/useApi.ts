import {useEffect, useState} from 'react'
import {apiRequest} from "../api/api.helpers";

const useApi = (url: string, parameters: any) => {
  const [data, setData] = useState<any | any[]>()

  useEffect(() => {
    apiRequest({
      url: url,
      params: parameters,
      method: 'GET'
    }).then(data => setData(data.data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return data
}
export default useApi
