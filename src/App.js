import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Cart from './components/cart/Cart'
import Button from './components/button/Button';
import CalcCart from './components/calc-cart/CalcCart';
import SendPersonalInformation from './components/senPersonalInformatin/SendPersonalInformation';
function App() {
  const [dressList , setDressList] = useState([
    {img:"./image/dress1.jpg"  , price: 10.9   , title:"cami maxi dress in polka dot"  , id:1 , size:"Xs"},
    {img:"./image/dress2.jpg"  , price: 14.9   , title:"Midi dress in pink ditsy floral"  , id:2 , size : "S"},
    {img:"./image/dress3.jpg"  , price: 18.9   , title:"Midi sundress with ruched front"  , id:3 , size: "M"},
    {img:"./image/dress4.jpg"  , price: 25.9   , title:"cami maxi dress in polka dot"  , id:4 , size: "L"},
    {img:"./image/dress5.jpg"  , price: 29.9   , title:"Midi sundress with shirring detail"  , id:5 , size: "XL"},
    {img:"./image/dress6.jpg"  , price: 49.9   , title:"Midi sundress with ruched front"  , id:6 , size: "XXL"}
  ])
  const [buyCart , setBuyCart] = useState([])
  const [buyMode , setBuyMode] = useState({mode:"nothing" , id:null})
  const [dataMode ,  setDataMode] = useState("deactive");
  const [totalCost, setTotalCost] = useState(0);
  const [filterDress , setFilterDress] = useState("ALL");
  const [costMode , setCostMode] = useState();
  useEffect(()=>{totalPrice()},[buyCart])
  function addDressToCardFN(id){
      const prevBuyCart = [...buyCart]
      const findIndex = prevBuyCart.findIndex(item => item.idDress == id )
            if(findIndex == -1 ){
                  setBuyCart([...buyCart,{idDress:id ,count:1}])
            } else{
                 prevBuyCart[findIndex].count +=1;
                 setBuyCart(prevBuyCart)      
            }
            console.log(buyCart)
            setBuyMode({mode:"wantToBuy" , id:null})            
  }
function removeFN(id){
      const prevBuyCart = [...buyCart]
     console.log(id)
      const finder = buyCart.findIndex(item => item.idDress == id)
      console.log(finder)
      if(finder>=0){
            if(buyCart[finder].count>1){
                  const findIndex = prevBuyCart.findIndex(item => item.idDress == id)
                  if (findIndex > -1){
                        prevBuyCart[findIndex].count -=1;
                        setBuyCart(prevBuyCart)
                  }    
            }else{
                  setBuyCart(buyCart.filter(item => item.idDress != id)) 
            }
      }     
}
 function totalPrice(){
      let total = 0
      buyCart.forEach(item => {
            const dressPrice = dressList.find(dress => dress.id == item.idDress)?.price 
            total += item.count * dressPrice     
      })
      console.log(total)
      setTotalCost(total)  
 }
  return (
    <div className="App">
          <div>
            {console.log(buyCart)}
               <header className=' w-full h-[60px] bg-[#203040] text-white flex justify-start items-center pl-[10px]'>
                    <p>React Shoppin cart</p>
               </header>
               <main className=' w-full lg:max-w[1024px] xl:max-w-[80%] h-full pl-[5px] pr-[10px] flex flex-col justify-between items-center xl:flex-row xl:justify-between xl:items-start xl:gap-[5px]  '>
                    <div className='dress-wrapper xl:w-[74%] flex flex-col justify-between'>
                          <div className='option-wrapper w-full h-[60px] border-b-[2px] flex justify-between items-center border-gray-200  '>
                              <div className='w-full'> 
                                   <p>{dressList.length} Products</p>
                              </div>    
                              <div className='w-full'>
                                  <span className='mr-[8px]'>Order</span>
                                  <select value={costMode} onChange={(e) => setCostMode(e.target.value)} name="cost">
                                        <option value="Lowest">Lowest</option>
                                        <option value="Highest">Highest</option>
                                  </select>
                              </div>
                              <div className='w-full'> 
                                  <span className='mr-[8px]'>Filter</span>
                                  <select value={filterDress} onChange={(e)=> setFilterDress(e.target.value)} name="size">
                                        <option value="ALL">ALL</option>
                                        <option value="Xs">Xs</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                  </select>
                              </div>
                          </div>
                          <div className='cart w-full h-full grid justify-between items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] '>
                                 {
                                  dressList.filter(item=> 
                                    {if(filterDress == "Xs"){
                                         if(item.size.includes("Xs")){
                                          return item
                                         }
                                    }else if(filterDress == "S"){
                                          if(item.size.includes("S")){
                                           return item
                                          }
                                     }else if(filterDress == "M"){
                                          if(item.size.includes("M")){
                                           return item
                                          }
                                     }else if(filterDress == "L"){
                                          if(item.size.includes("L")){
                                           return item
                                          }
                                     }else if(filterDress == "XL"){
                                          if(item.size.includes("XL")){
                                           return item
                                          }
                                     }else if(filterDress == "XXL"){
                                          if(item.size.includes("XXL")){
                                           return item
                                          }
                                     }
                                    else{
                                          return item
                                    }}).sort((a,b) => {
                                          if(costMode == "Highest"){
                                                return b.price - a.price
                                          }else{
                                                return a.price - b.price
                                          }
                                    }).map(item => {
                                    return( 
                                      <Cart img={item.img} price={item.price} title={item.title} id={item.id} addDressToCard={addDressToCardFN}/>
                                     )})     
                                 }          
                          </div>
                    </div>
                    <div className='calc-Price h-full w-[25%] xl:w-[25%] pb-[20px] '>
                          <div> 
                              {buyMode?.mode == "wantToBuy" ?
                               <div className='w-full h-[60px]  flex justify-center items-center border-b-[2px] border-gray-200'>
                                     <p>you have {buyCart.length} in cart</p>
                               </div>:
                               <div className='w-full h-[60px]  flex justify-center items-center border-b-[2px] border-gray-200'>
                                     <p>Cart is empty</p>
                               </div>
                              }
                               <div className='w-full h-full pl-[30px]  pt-[15px] ' >
                                    {buyCart.map(item => {
                                           const finder = dressList.find(dress => dress.id == item.idDress)
                                           return(
                                                <CalcCart img={finder.img} title={finder.title} price={finder.price} count={item.count} remove={removeFN} id={item.idDress}/>
                                           )
                                    }
                                          )}
                                           <div className="w-full h-full flex flex-col justify-between ">
                                                  <div className='w-full h-full flex  justify-between items-center'>
                                                      <p>Total: {totalCost}</p>
                                                      <Button onClickHandler={() => setDataMode("active")}>Proceed</Button>
                                                  </div>
                                                  <div className='w-full h-full'>
                                                      {dataMode == "active"   ?  <SendPersonalInformation/> : <></>}
                                                  </div>
                                                   
                                          </div>    
                               </div>
                          </div>   
                    </div>
               </main>
               <footer className='w-full h-[60px] '>
                      <p className='w-full h-full bg-[#203040] flex justify-center items-center text-white text-[18px]'>All right is reserved</p>
               </footer>
          </div>
    </div>
  );
}

export default App;
