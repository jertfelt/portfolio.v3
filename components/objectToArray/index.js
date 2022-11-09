// import converter from './helper/helper.js'

const O2A = (data) => {
  const converted = []

  //LOOPING EACH CHILD AND PUSHING TO ARRAY
      for (const [key, value] of Object.entries(data)) {
                value['object_key'] = key;
                converted.push(value);
       } 
      
  return (converted);
}
 
export default O2A;
// const {O2A, ReverseO2A, FirstO2A, LastO2A, GetNO2A, CountO2A } = converter;

// export { O2A, ReverseO2A, FirstO2A, LastO2A, GetNO2A, CountO2A };