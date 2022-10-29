import { useState, useEffect } from "react";


const useFetch = (url, headers) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
   
    fetch(url, headers).then (res => {
      if (!res.ok){
        throw Error ("Kunde inte hämta data från servern. Kontakta din administratör eller prova igen.")
      }
      return res.json();
    })
  .then((data) => {
    setData(data);
    setLoading(false);
    setFetchError("");
  })
.catch(err => {
  setFetchError(err.message);
  setLoading.false;
})

}, [url])

return ({
  data, isLoading, fetchError
})
  
}
 
export default useFetch;