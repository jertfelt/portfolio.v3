import initFirebase from "./initialize";
import { getDatabase, ref, child, get} from "firebase/database";
import { useEffect, useState } from "react"

const DATA = () => {
  const [firebaseData, setFirebaseData] = useState(null)
  console.log(firebaseData)

  useEffect(() => {
    initFirebase()
    getDataFirebase()
  , []})

const getDataFirebase = () => {
const dbRef = ref(getDatabase());
get(child(dbRef, `/cases/`)).then((snapshot) => {
 
  setFirebaseData(snapshot.val())
  if (snapshot.exists()) {
    setFirebaseData(snapshot.val())
    console.log("snap", firebaseData)
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
console.log("nytt", firebaseData)
   
}
return (
  <>
  {firebaseData}
  </>
)

}

export default DATA