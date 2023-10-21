import {useState} from "react";
import PropTypes from "prop-types";
import ButtonClassic from "../Material/ButtonClassic";

TestExp.protoType = {
    children : PropTypes.string,
    className : PropTypes.string,
    txtExpand : PropTypes.string,
    txtCollapse : PropTypes.string,
    colorBtn : PropTypes.string,
    firstCharVisible : PropTypes.number,
    // expand: PropTypes.bool
}

export default function TestExp({
        children,
        className = "containerCounter",
        txtExpand = "See more",
        txtCollapse = "See less",
        colorBtn = "",
        firstCharVisible = 20,
        // expand= false
}){

    const [isOpenBtn, setIsOpenBtn] = useState(false)

    // const alreadyExpand =

    function handleVisibility(){
        setIsOpenBtn(() => !isOpenBtn)
    }

    return(
        <div className={className}>
            <p>
                { !isOpenBtn ? children.slice(0,firstCharVisible) + "..." :  children} {" "}
                <ButtonClassic style={{color:colorBtn}} onClick={ handleVisibility } >
                    { !isOpenBtn ? txtExpand :  txtCollapse}
                </ButtonClassic>
            </p>
        </div>
    )
}