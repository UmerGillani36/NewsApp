import axios from 'axios';
import React, { useEffect, useState, createContext } from 'react'

export const newscontext = createContext(null);
const NewsContext = (props) => {
  const key = '1b754dd30a1740f99d09bcd51812add6';
  const endPoint = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${key}`;

  const [data, setData] = useState();
  // console.log(data);

  useEffect(() => {
    axios.get(endPoint).then((response) => { setData(response.data) }).catch((error) => { console.log(error); })
  }, [])
  return (
    <div>
      <newscontext.Provider value={{ data }}>
        {props.children}
      </newscontext.Provider>
    </div>
  )
}

export default NewsContext