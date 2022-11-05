

export async function getAllCases({firebaseData}){
  const cases = [];
  

for (const key in firebaseData) {
  cases.push({
    id: key,
    ...firebaseData[key]
  })
}
}


export async function getFeaturedCases(){
  const allCases = await getAllCases();
  return allCases.filter(c => c.featured)
}

export async function getCaseById(id) {
  const allCases = await getAllCases();
  return allCases.filter((c => c.id === id))
}