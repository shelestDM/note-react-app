import { styled } from "styled-components";

const CustomInput = styled.input.attrs((props)=>({
    type: props.$type ? props.$type : 'text',
    placeholder: props.$placeholder,
    onInput: props.$onInputHandler,
    value: props.$value
}))`
    line-height: 1.25;
    padding: 0.75rem;
    border-radius: 0.25rem;
    appearance: none;
    flex-basis: 70%;
    width: 100%;
    color: #374151;
    border: 1px solid transparent;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    transition: 0.2s;
  

    &:focus{
        outline: none;
    }

    &:hover{
        border: 1px solid rgb(0 0 0 / 0.1);
    }

`
const Input = (props) => {
    return ( 
        <CustomInput {...props}></CustomInput>
     );
}

export default Input;