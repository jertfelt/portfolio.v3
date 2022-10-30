import getDb from "../utils/db/index"
import {ref, get} from "firebase/database"

export async function getServerSideProps(context){
  const db = getDb();
  const root = ref(db);
  const data = await get(root);

  return{
    props: {
      data: data.val()
    }
  }
}

export default function Test({data}){
  console.log(data)
  return(
    <div>
      <p>{data}</p>
    </div>
  )
}