import styled from "styled-components";
import Link from "next/link";
import {cases } from "../../data/cases";

const Cases = () => {
  return (
    <div>
      <h1>All Cases</h1>
      {cases.map(c => (
        <Link href={'/cases/' + c.id} 
        key={c.id}>
          {c.id}
            <h3>{c.headline}</h3>
        </Link>
      ))}
    </div>
  );
}
 
export default Cases;
