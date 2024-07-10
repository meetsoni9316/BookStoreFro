import React from 'react'
import {Link} from 'react-router-dom'
function About() {
  return (
    <>
    <div className='flex h-screen  items-center  justify-center dark:bg-slate-900 dark:text-white '>
    <div  className="w-[600px] dark:bg-slate-900 dark:text-white">
  <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form  method="dialog" className='dark:bg-slate-900 dark:text-white'>
      {/* if there is a button in form, it will close the modal */}
      {/* <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link> */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"> ✕ </Link>
    
    <h3 className="font-bold text-lg dark:bg-slate-900 dark:text-white">About Us</h3>
    <br/>
    {/* <br/> */}
    <div className='
    dark:bg-slate-900 dark:text-white'>
    

Welcome to <span  className='
text-pink-500'>BookStore</span>, your online haven for free books. Founded with the mission to make literature accessible to everyone, we offer a vast collection of e-books across various genres. Our curated selection includes bestsellers, timeless classics, and hidden gems, all available at no cost. Join our community of book lovers and dive into the world of endless reading possibilities. Connect with us on social media to stay updated on new arrivals and special features. At BookStore, we believe that the joy of reading should be free for all.



    </div>





    {/* <div className='flex justify-around mt-4'>
<button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>

 <p className='text-xl'>Have acccount?

 <Link to='/login' className='underline text-blue-500 cursor-pointer'> Login</Link>
    

    {/* <button className='underline text-blue-500 cursor-pointer'  onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</button>
    <Login/> */}
{/* </p> 




    </div> */}

    </form>

  

  </div>
</div>
    </div>
    </>
  )
}

export default About