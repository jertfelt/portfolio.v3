import { useState } from "react";

export const SelectFilter = ({items}) => {
  console.log(items, "selectfilter")
  // console.log(items.map(item => {
  //   console.log("item;", item)
  //  }))
   items.map(item => {console.log(item.id)})
 return (
  <>
              {
                items.map(item => (
                  <option 
                  key= {item.id}
                  //value={index+1}
                  value="featured">featured</option>
                ))
              }
         
              
         </>      
 ) 
}