//firebase
import { getDatabase, ref, get, child, onValue } from "firebase/database"
import initFirebase from "../../components/api/initialize";

import { useEffect, useState } from "react"


export async function getData (){
  let cases = []
  initFirebase("cases/");
  const db = getDatabase();
  const dbRef = ref(db, `/cases/cases/`);
  onValue(dbRef, (snapshot) => {
  let data = snapshot.val()
  for (const key in data) {
    cases.push({
      id: key,
      ...data[key]
    })
  }
  })
  console.log(cases)
  return cases
}



export async function getCV(direction){
  let cv= []
  initFirebase("cv/");
  const db = getDatabase();
  const dbRef = ref(db, `/cv/${direction}`);
  onValue(dbRef, (snapshot) => {
  let data = snapshot.val()
  for (const key in data) {
    cv.push({
      id: key,
      ...data[key]
    })
  }
  })
  console.log(cv)
  return cv
}



export async function getFeaturedCases(){
  const allCases = await getData();
  return allCases.filter(c => c.featured)
}

export async function getCaseByTag(tag){
  const allCases = await getData();
  return allCases.filter(c => c.tag === tag)
}