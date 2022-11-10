//firebase
import { getDatabase, ref, get, child, onValue } from "firebase/database"
import initFirebase from "../../components/api/initialize";

import { useCallback, useEffect, useState } from "react"


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

export async function getTag (){
let tag = [];
let data = [];
  const allData = await getData();
  data = allData;

  let uniquetags = [...new Set(data.map(item => item.tag))]
  tag = uniquetags;
return tag
}

export async function getTags (){
  let tags = [];
  let data = [];
    const allData = await getData();
    data = allData;
    const c1 = data.map(item => item.tags.c1)
    const c2 = data.map(item => item.tags.c2)
    const c3 = data.map(item => item.tags.c3)
    const alltags = c1.concat(c2, c3)
    let uniquetags = [...new Set(alltags)]
    tags = uniquetags;
  return tags
  }