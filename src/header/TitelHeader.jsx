import Searchheader from "./SearchHeader"
import Btn from "./ButtonHeader"
import styled from "styled-components"



const Titel = () => {
  return (
    <>
      <div className="container shadow ">
        <Row className="row mt-50 p-15 ">

          <Btn />
          <div className="col-4 text-center">
            <h2 className="text-white text-md-end text-lg-center">مدیریت مخاطبین</h2>
          </div>
          <Searchheader />
        </Row>


      </div>


    </>

  )
}
export default Titel





// /style

const Row = styled.div`
  background-color: #0d0b16 ;
  border-radius: 20px;
`