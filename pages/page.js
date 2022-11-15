import { getDatabase, ref, get, child, onValue } from "firebase/database"
import initFirebase from "../components/api/initialize";// app/page.js
import {useEffect} from "react"

const getData = () => {
  const dbRef = ref(getDatabase());
get(child(dbRef, `/cases/cases/`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log("array", snapshot.val());
   return(snapshot.val())
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
}


// This is an async Server Component
export default function Page() {
  useEffect(() => {
    initFirebase("cases/");
    getData();
  }, [])
  
 const data = getData();
 console.log(data)
  return <main></main>;
}
