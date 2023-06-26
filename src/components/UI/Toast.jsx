import { styled } from "styled-components";
import { toastIcons } from "../../utils/utils";

const CustomToast = styled.div`
    background:  white;
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
    border-radius: 8px;
    color: #64748b;
    box-shadow: 0 1px 15px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

    div:first-child{
        color:${props=>props.$color};
        background:${props=>props.$bgColor};
    }
`

const Toast = (props) => {


    return (
        <CustomToast {...props} className="animate-toastAppear">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8  rounded-lg">
                {toastIcons[props.$key]}
            </div>
            <div className="text-sm font-normal">{props.title}</div>
        </CustomToast>
    );
}

export default Toast;