function Button({children,onClickHandler,color}){
    return(
        <button onClick={onClickHandler}  className={` w-[100px] h-[40px] bg-[#F0C041] ${color=="gray" ? "bg-gray-200" : "bg-yellow"}`} >{children}</button>
    )
}
export default Button