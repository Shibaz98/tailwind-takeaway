import { NavLink, Outlet } from "react-router-dom"


export default function Root() {
  return (
    <div className="shadow-xl">
        <header className=" flex items-center justify-between p-4">
            <img src="/images/logo.png" alt="" className="w-32 ml-4"/>
            <nav className='m-10 text-3xl'>
                <NavLink className='mx-4' to='/'>Home</NavLink>
                <NavLink className='mx-4' to='contact'>Contact</NavLink>
                <NavLink className='mx-4' to='basket'>Basket</NavLink>
            </nav>
        </header>
        <div className="flex justify-center">
            <NavLink className='text-center'>
                <img src="/images/burgers.webp" alt="image of burger" className="w-32 mx-4" />
                Burgers
            </NavLink>
            <NavLink className='text-center'>
                <img src="/images/burgers.webp" alt="image of burger" className="w-32 mx-4" />
                Burgers
            </NavLink>
            <NavLink className='text-center'>
                <img src="/images/burgers.webp" alt="image of burger" className="w-32 mx-4" />
                Burgers
            </NavLink>
        </div>
        <Outlet/>
    </div>
  )
}
