import initFirebase from "./initialize";
import { getDatabase, ref, child, get} from "firebase/database";
import { useEffect, useState } from "react"

const DATA = () => {
  const [firebaseData, setFirebaseData] = useState(null)
  useEffect(() => {
    getDataFirebase()
  , [getDataFirebase()]})



const getDataFirebase = () => {
  initFirebase()
const dbRef = ref(getDatabase());
get(child(dbRef, `/cases/`)).then((snapshot) => {
  setFirebaseData(snapshot.val())
  if (snapshot.exists()) {
    setFirebaseData(snapshot.val())
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

}
return (
  <>
  {firebaseData && <div>hej</div>}
  </>
)

}

export default DATA