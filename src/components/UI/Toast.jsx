import { styled } from "styled-components";

const CustomToast = styled.div`
    background-color: ${props => props.$bgColor || '#2563eb'};
    width:300px;
    position: absolute;
    left: calc(50% - 150px);
    bottom: 40px;
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 20px;
    padding: 16px;
    margin-bottom: 16px;
    color: #6b7280;
    border-radius: 8px;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`

const Toast = (props) => {
    return (
        <CustomToast {...props} className="animate-toastAppear">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                    </path>
                </svg>
            </div>
            <div className="text-sm text-white font-normal">{props.title}</div>
        </CustomToast>
    );
}

export default Toast;