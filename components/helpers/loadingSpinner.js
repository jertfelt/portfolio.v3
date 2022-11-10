import styled from "styled-components";

const Container = styled.div`

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #383636; /* Black */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


`


const Loading = () => {
  return (
    <>
    <h3>Vänta, det laddar..</h3>
    <Container className="spinner-container">
    <div className="loading-spinner">
    </div>
  </Container>
  </>
    );
}
 
export default Loading;