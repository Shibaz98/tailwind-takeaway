import { NavLink, Outlet } from "react-router-dom"


export default function Root() {
  return (
    <div className="shadow-xl">
        <header className=" flex items-center justify-between p-4">
            <img src="/images/logo.png" alt="" className="w-32 ml-4"/>
            <nav className='mt-5 text-3xl flex'>
                <NavLink className='mx-4  flex justify-items-center items-center border-b-4 hover:border-b-blue-400' to='/'>
                    <img src='images/home.png' className="w-6 h-6 mr-2"/>
                    Home
                </NavLink>
                <NavLink className='mx-4  flex justify-items-center items-center border-b-4 hover:border-b-blue-400' to='basket'>
                    <img src='images/shopping-basket.png' className="w-6 h-6 mr-2"/>
                    basket
                </NavLink>
                <NavLink className='mx-4 flex justify-items-center items-center border-b-4 hover:border-b-blue-400' to='contact'>
                    <img src='images/contact-mail.png' className="w-8 h-8 mr-2"/>
                    contact
                </NavLink>
            </nav>
        </header>
        <div className="flex justify-center">
            <NavLink to='burgers' className='text-center border-solid border-4 border-yellow-200 rounded-xl bg-yellow-200 font-medium mb-2 h-26 my-2 mx-2'>
                <img src="/images/burgers.webp" alt="image of burger" className="w-32 mx-3" />
                Burgers
            </NavLink>
            <NavLink to='pizza' className='text-center border-solid border-4 border-pink-200 rounded-xl bg-pink-200 font-medium mb-2 h-26 my-2 mx-2'>
                <img src="/images/pizza.webp" alt="image of burger" className="w-32 mx-3" />
                Pizza
            </NavLink>
            <NavLink to='kebab' className='text-center border-solid border-4 border-indigo-200 rounded-xl bg-indigo-200 font-medium mb-2 h-26 my-2 mx-2'>
                <img src="/images/kebabs.webp" alt="image of burger" className="w-32 mx-3" />
                Kebab
            </NavLink>
            <NavLink to='sandwiches' className='text-center border-solid border-4 border-orange-200 rounded-xl bg-orange-200 font-medium mb-2 h-26 my-2 mx-2'>
                <img src="/images/sandwiches.webp" alt="image of burger" className="w-32 mx-3" />
                Sandwiches
            </NavLink>
        </div>
        <Outlet/>
    </div>
  )
}
