import Image from "next/image";

const ImageContainer = ({image, name, description}) => {
  return ( 
  <Image src={image}
  alt={description}
  width={300}
  height={300}
  />

    );
}
 
export default ImageContainer;