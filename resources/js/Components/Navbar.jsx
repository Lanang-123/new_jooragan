import React,{useState} from 'react'
import { Link, Head } from '@inertiajs/react';

function Navbar() {
    const [isActive,setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive);
    }
  return (
    <div>
        <header className="header">
            <Link href="#" className="logo">
                <h3>JOORAGAN</h3>
            </Link>

            <nav className={isActive ? 'navbar slide':'navbar'}>
                <Link href={route('home')}>Beranda</Link>
                <Link to="">Dagangan</Link>
                <Link to="">Edukasi</Link>
                <Link href={route('about')}>Tentang</Link>
                <Link to="">Kontak</Link>
            </nav>

            <div className="menu-toggle">
                <input type="checkbox" onClick={toggleClass}/>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    </div>
  )
}

export default Navbar
