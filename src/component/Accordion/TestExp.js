import {useState} from "react";
import PropTypes from "prop-types";

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
        className = "",
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
                <button className="button-main" style={{color:colorBtn}} onClick={ handleVisibility } >
                    { !isOpenBtn ? txtExpand :  txtCollapse}
                </button>
            </p>
        </div>
    )
}