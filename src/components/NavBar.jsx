import SinuaSVG from '../assets/sinua.svg'
import Links from './Links'

export default function NavBar() {
    return(
        <header className='fixed top-0 left-0 w-screen h-[80px] flex justify-around items-center bg-[#f0f0f0] z-10'>
            <a href='/'><img width={140} src={SinuaSVG} /></a>
            <nav className='flex flex-row gap-8'>
                <ul className='flex flex-row items-center gap-3'>
                    <Links name="Início" target="_self" link="/" />
                    <Links name="Sobre nós" target="_self" link="/about" />
                    <Links name="Projetos" target="_self" link="/projects" />
                    <Links name="Servidor" target="_blank" link="https://discord.gg/ezyHTg4Tu8" />
                    <Links name="Contato" target="_self" link="/contact" />
                </ul>
            </nav>
        </header>
    )
}