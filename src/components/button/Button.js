function Button({children,onClickHandler}){
    return(
        <button onClick={onClickHandler}  className='w-[100px] h-[40px] bg-[#F0C041]'>{children}</button>
    )
}
export default Button