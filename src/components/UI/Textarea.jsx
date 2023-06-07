import { forwardRef } from "react";
import { styled } from "styled-components";

const CustomTextarea = styled.textarea.attrs( props =>({

}))`
    display: flex;
    opacity: ${props => props.$isVisible ? 1 : 0};
    z-index: ${props => props.$isVisible ? 10 : -10};
    align-items: center;
    height: 100%;
    width: 85%;
    border-radius: 4px;
    resize: none;
    border: 1px solid rgb( 55 65 81 / 0.1);
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    position: absolute;
    top: -1px;
    left: -1px;
    appearance: none;

    &:focus{
        outline: none;
    }
`

const Textarea = forwardRef((props, ref) => {
    return  <CustomTextarea $isVisible={props.$isVisible} ref={ref} value={props.value} onChange={props.onInputHandler}/> ;
});
 
export default Textarea;