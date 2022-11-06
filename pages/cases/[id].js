import { cases } from "../../data/cases";

export const getStaticPaths = async () => {
  console.log(cases)
  const paths = cases.map(c => {
    return {
      params: {id: c.id.toString()}
    }
  })
  return{
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  console.log("test", context.params.id)
  const id = context.params.id;
  const res = "/cases/" + id;
console.log(res)

  return {
    props: { cases: data }
  }
}

export const Details = ({cases}) => {
  return (
    <div>
      <>{cases.title }</ h1>
      <p>{cases.text }</p>
    </div>
  );
}
