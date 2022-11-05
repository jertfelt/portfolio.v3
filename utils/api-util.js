export async function getAllCases() {
  const res = await fetch("https://frontend-portfolio-446fc-default-rtdb.europe-west1.firebasedatabase.app/cases")
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    }
  }
  const cases = [];
  
  for (const key in data) {
    cases.push({
      id: key,
      ...data[key]
    })
  }
  return cases;
}

export async function getFeaturedCases(){
  const allCases = await getAllCases();
  return allCases.filter(c => c.featured)
}

export async function getCaseById(id) {
  const allCases = await getAllCases();
  return allCases.filter((c => c.id === id))
}