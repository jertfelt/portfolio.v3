import initFirebase from "./initialize";
import { getDatabase, ref, child, get} from "firebase/database";
import { useEffect, useState } from "react"

const Data = () => {
  const [firebaseData, setFirebaseData] = useState(null)
  const cases = [];
  useEffect(() => {
    getDataFirebase()
  , [getDataFirebase()]})

const getDataFirebase = () => {
  initFirebase()

const dbRef = ref(getDatabase());
get(child(dbRef, `/cases`)).then((snapshot) => {
  setFirebaseData(snapshot.val())
  if (snapshot.exists()) {
    setFirebaseData(snapshot.val())
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

for (const key in firebaseData) {
  cases.push({
    id: key,
    ...firebaseData[key]
  })
}
}
// console.log("cases;", cases)
return (
  cases
)
}
export default Data


