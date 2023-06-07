import { styled } from "styled-components";

const CustomTextarea = styled.textarea`
    display: flex;
    align-items: center;
    height: 100%;
    width: 85%;
    border-radius: 4px;
    resize: none;
    border: 1px solid rgb( 55 65 81 / 0.1);
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    position: absolute;
    z-index: 10;
    top: -1px;
    left: -1px;
    appearance: none;

    
    &:focus{
        outline: none;
    }
`

const Textarea = (props) => {
    return  <CustomTextarea value={props.value} onChange={props.onInputHandler}/> ;
}
 


export default Textarea;