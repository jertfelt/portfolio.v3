//firebase
import { getDatabase, ref, get, child, onValue } from "firebase/database"
import initFirebase from "../../components/api/initialize";

import { useEffect, useState } from "react"

export async function dataCases (){
  const [data, setData] = useState(null)
  const casesArray = []

    const dbRef = ref(getDatabase());
    get(child(dbRef, `/cases/cases/`)).then((snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val())
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

    for (const key in data){
      casesArray.push({
        id:key,
        ...data[key]
      })
    }
}

export async function getFeaturedCases(){
  const allCases = await dataCases();
  return allCases.filter(c => c.featured)
}

export async function getCaseByTag(tag){
  const allCases = await dataCases();
  return allCases.filter(c => c.tag === tag)
}