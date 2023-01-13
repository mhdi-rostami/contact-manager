import styled from "styled-components"
import {FaSearch} from "react-icons/fa"

const Searchheader = () => {
    return(
        <Col className="col-4 text-start">
            <Input>   
                       <Icon >
                               <Iconsearch/>
                         </Icon>
                                       <Search type="search"  placeholder="جستجو مخاطب ..." />
            </Input>
        
        </Col>
    )
}

export default Searchheader


//********************************* */

//style

 const Iconsearch = styled(FaSearch)`
    width: 30px;
    color: #756f6f;
    margin-top: 13px;
    font-size: 20px;
    margin-left: 5px;
 `

 const Input = styled.div`
    position: relative;
 ` 
 const Icon = styled.div`
    position: absolute;
 `

const Col = styled.div`
    direction: ltr;
`
const Search = styled.input`
    direction: rtl;
    background-color: #e3e6e9;
    padding: 10px;
    border: none;
    border-radius: 20px;
`