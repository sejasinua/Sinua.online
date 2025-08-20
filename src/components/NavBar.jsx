import SinuaSVG from '../assets/sinua.svg'
import Links from './Links'

export default function NavBar() {
    return(
        <header className='fixed top-0 left-0 w-screen h-[80px] flex justify-around items-center'>
            <a href='/'><img width={140} src={SinuaSVG} /></a>
            <nav className='flex flex-row gap-8'>
                <ul className='flex flex-row items-center gap-3'>
                    <Links name="Home" link="/" />
                    <Links name="About" link="/about" />
                    <Links name="Projects" link="/projects" />
                    <Links name="Server" link="/" />
                    <Links name="Contact" link="/contact" />
                </ul>
                <ul className='flex flez-row gap-4'>
                    <button className='p bg-black text-white rounded-[12px] cursor-pointer duration-[0.3s] hover:opacity-[0.85]'>Login</button>
                    <button className='p rounded-[12px] border-[3px] border-black cursor-pointer duration-[0.3s] hover:opacity-[0.65]'>Sign Up</button>
                </ul>
            </nav>
        </header>
    )
}