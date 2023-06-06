import {styled} from "styled-components";

const StyledButton = styled.button.attrs(props => ({
    type: props.$type,
    disabled: props.$disabled,
}))`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
    border-radius: 4px;
    font-weight: 600;
    background-color: ${props => props.$color || '#2563eb'};
    width: ${props => props.$width || "fit-content"};
    height: ${props => props.$height || "fit-content"};
    padding: ${props => props.$padding || "12px 16px"};
    border: 1px solid ${props => props.$color || '#2563eb'};

    &:hover{background-color: ${props => props.$color || '#2563eb'};}

    &:active{ transform: scale(0.9);}
  `;


const Button = ( props ) => {
    return (
        <StyledButton {...props}>
            {props.title}
        </StyledButton>
    );
}

export default Button;
