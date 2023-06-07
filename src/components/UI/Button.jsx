import {styled} from "styled-components";

const StyledButton = styled.button.attrs(props => ({
    type: props.$type,
    disabled: props.$disabled,
}))`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 12px;
    border-radius: 4px;
    font-weight: 600;
    background-color: ${props => props.$color || '#2563eb'};
    width: ${props => props.$width || "fit-content"};
    height: ${props => props.$height || "fit-content"};
    padding: ${props => props.$padding || "12px 16px"};
    border: 1px solid ${props => props.$color || '#2563eb'};

    &:disabled { opacity:0.5}

    &:hover:not(:disabled){background-color: ${props => props.$color || '#2563eb'}; transform: scale(1.05)}

    &:active:not(:disabled){ transform: scale(0.9);}


    @media(min-width: 375) {
        font-size: 14px;
    }

  `;


const Button = ( props ) => {
    return (
        <StyledButton {...props}>
            {props.title}
        </StyledButton>
    );
}

export default Button;
