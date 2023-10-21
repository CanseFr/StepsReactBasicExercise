
export default function ButtonClassic({textColor='#fff', bgColor='#7950F2', onClick, children }){
    return (
        <button  style={{backgroundColor: bgColor, color: textColor, borderRadius: "20px"}} onClick={onClick }
                >{children}
        </button>)
}