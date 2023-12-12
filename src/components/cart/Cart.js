import Button from "../button/Button"
import './style.css'
function Cart({img,price,title,id,addDressToCard}){
    return(
         <div className="hover-color-change w-full h-full flex flex-col justify-between items-center pt-[20px] pb-[20px]">
            <div className="w-[300px] " >
                <img className="w-full h-full" src={img}/>
            </div>
            <div>
                <a className=" cursor-pointer">{title}</a>
            </div>
            <div className="w-full h-[50px] flex justify-between items-center">
                  <p>{price}$</p>
                  <Button onClickHandler={() => {addDressToCard(id)}}>Add To Card</Button>
            </div>  
         </div>
    )
}
export default Cart