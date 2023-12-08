function SendPersonalInformation (){
    return(
        <div>
              <form className='w-[25%] h-full flex flex-col justify-between items-start gap-[15px]'>
                                                   <div className='w-full'>
                                                            <p className=' pl-[10px] mb-[5px]'>Email</p>
                                                            <input className='w-full h-[40px] border-[2px] border-gray-200 outline-none ' type={'email'} />
                                                   </div>
                                                   <div className='w-full'>
                                                            <p className=' pl-[10px] mb-[5px]'>Name</p>
                                                            <input className='w-full h-[40px] border-[2px] border-gray-200 outline-none ' />
                                                   </div>
                                                   <div className='w-full'>
                                                            <p className=' pl-[10px] mb-[5px]'>AddDress</p>
                                                            <input className='w-full h-[40px] border-[2px] border-gray-200 outline-none ' />
                                                   </div>
                                                   
                                                   
                                          </form>
        </div>
    )
}
export default SendPersonalInformation