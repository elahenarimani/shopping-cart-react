import Button from "../button/Button"

function CalcCart({img,count,price,title,remove,id}){
    return(
        <div className='w-full h-full flex flex-col justify-between items-center gap-[15px]'>
             <div className="w-full h-full flex justify-between items-center gap-[15px]">
                <div className="w-[50px] lg:min-w-[50px]  ">
                    <img className="w-full h-full" src={img}/>
                </div>   
                <div className="w-full flex flex-col justify-between gap-[15px]">
                   <p className="w-full whitespace-nowrap">{title}</p>
                   <div className="flex justify-between items-center">
                        <div>
                        <span>{price}</span>
                        <span>X</span>
                        <span>{count}</span>
                        </div>
                        <Button color={"gray"} onClickHandler={() => {remove(id)}}>remove</Button>
                   </div>
                   
                </div>      
             </div>
            
             <div>
                   
             </div>
        </div>
       
    )
}
export default CalcCart