
// //firebase
// import { getDatabase, ref, get, child, onValue } from "firebase/database"
// import initFirebase from "../../components/api/initialize";



// export const getData = () => {
//   const [dataFb, setData] = useState(null)

// const get = () => {
//   const dbRef = ref(getDatabase());
// get(child(dbRef, `/cases/cases/`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log("array", snapshot.val());
//    setData(snapshot.val())
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });
// }

// useEffect(() => {
//   initFirebase("cases/");
//   get();
// },[])

//   return ( <></> );
// }
 
