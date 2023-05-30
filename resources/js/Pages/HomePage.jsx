import React from 'react'
import { Link, Head } from '@inertiajs/react';
import PhoneImage from "../assets/gambar/Ilustration/phone_store.png"
import CoinImage from "../assets/gambar/Ilustration/silky-coin.png"
import About1 from "../assets/gambar/Ilustration/analytics.png"
import About2 from "../assets/gambar/Ilustration/2.png"
import PociImage from "../assets/gambar/brand/poci.png"
import IndomaretImage from "../assets/gambar/brand/indomaret.jpg"
import RotiGembulImage from "../assets/gambar/brand/gembul.png"
import BiznetImage from "../assets/gambar/brand/biznet.jpg"
import McdImage from "../assets/gambar/brand/mcd.png"
import NauImage from "../assets/gambar/brand/nau.png"
import Navbar from '@/Components/Navbar'


function Home() {
  return (
    <div>
        <Head title="Home"/>
        <Navbar />
        <section className="home" id="home">
            <div className="container">
                <div className="wrapper">
                <div className="content">
                    <span>Tertarik ikut Bisnis?</span>
                    <h3>Ya, di JOORAGAN aja!!!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit rem aut sit fuga ratione aliquid numquam quasi, quibusdam ipsam doloremque.</p>
                    <a href="#" className="btn">Pilih Franchise</a>
                </div>
                <div className="image">
                    <img src={PhoneImage} alt="phoneImage" />
                </div>
                </div>
            </div>
            <div className="uang">
                <img src={CoinImage} alt="coinimage" />
                <img src={CoinImage} alt="coinimage" />
                <img src={CoinImage} alt="coinimage" />
                <img src={CoinImage} alt="coinimage" />
                <img src={CoinImage} alt="coinimage" />
                <img src={CoinImage} alt="coinimage" />
                <img src={CoinImage} alt="coinimage" />
            </div>
        </section>
        
        {/* About */}
        <section className="about">
            <div className="container">
                <div className="title">
                <h3>Kenalin, Jooragan <br/> Sang Pembawa Rejeki</h3>
                </div>
                <div className=" flex justify-center mt-12">
                <Link href="#product" className="btn button-ykp">Yuk Kepoin</Link>
                </div>

                <div className="content">
                <div className="content_detail pertama">
                    <img src={About1} alt="About1"/>
                    <h4>Sub Title 1</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at!</p>
                </div>
                <div className="content_detail kedua">
                    <img src={About2} alt="About2"/>
                    <h4>Sub Title 2</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at!</p>
                </div>
                <div className="content_detail ketiga">
                    <img src={About2} alt="About3"/>
                    <h4>Sub Title 3</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at!</p>
                </div>
                <div className="content_detail keempat">
                    <img src={About2} alt="About4"/>
                    <h4>Sub Title 4</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at!</p>
                </div>
            </div>
            </div>
        </section>

        {/* Product */}
        <section className="text-gray-600 body-font" id="product">
            <div className="container py-24 mx-auto">
                <div className="max-w-xl mb-12 md:mx-auto sm:text-center lg:max-w-4xl md:mb-20">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-md md:text-lg font-semibold tracking-wider text-white uppercase rounded-full bg-[#5c6ee2]">
                            Franchise
                        </p>
                    </div>
                    <h2 className="max-w-lg md:max-w-3xl mb-6 font-sans text-6xl font-bold leading-none tracking-tight warna-gold md:mx-auto franchise-title">
                    <span className="relative inline-block">
                        <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                        <defs>
                            <pattern id="bc9273ce-29bb-4565-959b-714607d4d027" x="0" y="0" width=".135" height=".30">
                            <circle cx="1" cy="1" r=".7"></circle>
                            </pattern>
                        </defs>
                        <rect fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)" width="52" height="24"></rect>
                        </svg>
                        <span className="relative">Choose</span>
                    </span>
                    your way. Advance everyday.
                    </h2>
                    <p className="text-gray-700  text-lg font-semibold md:text-xl franchise-subtitle italic">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
                    </p>
                </div>

                <div className="flex flex-wrap mx-auto justify-center">
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <div className="max-w-lg lg:max-w-sm md:max-w-full overflow-hidden shadow-[_8px_8px_6px_#645b4d] bg-white rounded-lg h-[34rem] border relative">
                        <img className="object-cover object-center w-full h-56 mx-auto  px-20 " src={PociImage} alt="poci" />
                    
                        <div className="flex items-center px-6 py-3 bgr-gold">
                            <i className='bx bxs-crown text-2xl text-yellow-700'></i>
                    
                            <h1 className="product-title mx-3 text-2xl md:text-xl font-extrabold text-[#5c6ee2] ">Franchise</h1>
                        </div>
                    
                        <div className="px-6 py-4">
                            <h1 className="text-3xl md:text-2xl font-semibold text-gray-800 product-title">Patterson johnson</h1>
                    
                            <p className="py-2 text-gray-700 dark:text-gray-400 product-description md:text-lg text-xl">Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.</p>
                    
                            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200 absolute bottom-5 left-5">
                            <Link href="/" className="bg-[#f9cc1b] flex items-start justify-center  text-slate-700 text-sm sm:text-base rounded-full hover:bg-[#f9cc1b] duration-300 transition-colors  border  hover:cursor-pointer w-fit p-3 product-wa">
                                <i className='bx bxl-whatsapp text-3xl'></i>
                        
                                <span className="nomor text-lg">08123123132</span>
                            </Link>
                            </div>
                    
                        </div>
                    </div>

                    </div>
                    
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <div className="max-w-lg lg:max-w-sm md:max-w-full overflow-hidden shadow-[_8px_8px_6px_#645b4d] bg-white rounded-lg h-[34rem] border relative">
                        <img className="object-cover object-center w-full h-56 mx-auto  px-20" src={IndomaretImage} alt="indomaret image" />
                    
                        <div className="flex items-center px-6 py-3 bgr-gold">
                            <i className='bx bxs-crown text-2xl text-yellow-700'></i>
                    
                            <h1 className="product-title mx-3 text-2xl md:text-xl font-extrabold text-[#5c6ee2] ">Franchise</h1>
                        </div>
                    
                        <div className="px-6 py-4">
                            <h1 className="text-3xl md:text-2xl font-semibold text-gray-800 product-title">Patterson johnson</h1>
                    
                            <p className="py-2 text-gray-700 dark:text-gray-400 product-description md:text-lg text-xl">Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.</p>
                    
                            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200 absolute bottom-5 left-5">
                            <Link href="/" className="bg-[#f9cc1b] flex items-start justify-center  text-slate-700 text-sm sm:text-base rounded-full hover:bg-[#f9cc1b] duration-300 transition-colors  border  hover:cursor-pointer w-fit p-3 product-wa">
                                <i className='bx bxl-whatsapp text-3xl'></i>
                        
                                <span className="nomor text-lg">08123123132</span>
                            </Link>
                            </div>
                    
                        </div>
                    </div>

                    </div>

                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <div className="max-w-lg lg:max-w-sm md:max-w-full overflow-hidden shadow-[_8px_8px_6px_#645b4d] bg-white rounded-lg h-[34rem] border relative">
                        <img className="object-cover object-center w-full h-56 mx-auto  px-20" src={RotiGembulImage} alt="avatar" />
                    
                        <div className="flex items-center px-6 py-3 bgr-gold">
                            <i className='bx bxs-crown text-2xl text-yellow-700'></i>
                    
                            <h1 className="product-title mx-3 text-2xl md:text-xl font-extrabold text-[#5c6ee2] ">Franchise</h1>
                        </div>
                    
                        <div className="px-6 py-4">
                            <h1 className="text-3xl md:text-2xl font-semibold text-gray-800 product-title">Patterson johnson</h1>
                    
                            <p className="py-2 text-gray-700 dark:text-gray-400 product-description md:text-lg text-xl">Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.</p>
                    
                            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200 absolute bottom-5 left-5">
                            <Link href="/" className="bg-[#f9cc1b] flex items-start justify-center  text-slate-700 text-sm sm:text-base rounded-full hover:bg-[#f9cc1b] duration-300 transition-colors  border  hover:cursor-pointer w-fit p-3 product-wa">
                                <i className='bx bxl-whatsapp text-3xl'></i>
                        
                                <span className="nomor text-lg">08123123132</span>
                            </Link>
                            </div>
                    
                        </div>
                    </div>

                    </div>

                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <div className="max-w-lg lg:max-w-sm md:max-w-full overflow-hidden shadow-[_8px_8px_6px_#645b4d] bg-white rounded-lg h-[34rem] border relative">
                        <img className="object-cover object-center w-full h-56 mx-auto  px-10" src={BiznetImage} alt="avatar" />
                    
                        <div className="flex items-center px-6 py-3 bgr-gold">
                            <i className='bx bxs-crown text-2xl text-yellow-700'></i>
                    
                            <h1 className="product-title mx-3 text-2xl md:text-xl font-extrabold text-[#5c6ee2] ">Franchise</h1>
                        </div>
                    
                        <div className="px-6 py-4">
                            <h1 className="text-3xl md:text-2xl font-semibold text-gray-800 product-title">Patterson johnson</h1>
                    
                            <p className="py-2 text-gray-700 dark:text-gray-400 product-description md:text-lg text-xl">Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.</p>
                    
                            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200 absolute bottom-5 left-5">
                            <Link href="/" className="bg-[#f9cc1b] flex items-start justify-center  text-slate-700 text-sm sm:text-base rounded-full hover:bg-[#f9cc1b] duration-300 transition-colors  border  hover:cursor-pointer w-fit p-3 product-wa">
                                <i className='bx bxl-whatsapp text-3xl'></i>
                        
                                <span className="nomor text-lg">08123123132</span>
                            </Link>
                            </div>
                    
                        </div>
                    </div>

                    </div>

                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <div className="max-w-lg lg:max-w-sm md:max-w-full overflow-hidden shadow-[_8px_8px_6px_#645b4d] bg-white rounded-lg h-[34rem] border relative">
                        <img className="object-cover object-center w-72 h-62 mx-auto  p-8" src={McdImage} alt="avatar" />
                    
                        <div className="flex items-center px-6 py-3 bgr-gold">
                            <i className='bx bxs-crown text-2xl text-yellow-700'></i>
                    
                            <h1 className="product-title mx-3 md:text-xl text-2xl font-extrabold text-[#5c6ee2] ">Franchise</h1>
                        </div>
                    
                        <div className="px-6 py-4">
                            <h1 className="text-3xl md:text-2xl font-semibold text-gray-800 product-title">Patterson johnson</h1>
                    
                            <p className="py-2 text-gray-700 dark:text-gray-400 product-description md:text-lg text-xl">Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.</p>
                    
                            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200 absolute bottom-5 left-5">
                            <Link href="/" className="bg-[#f9cc1b] flex items-start justify-center  text-slate-700 text-sm sm:text-base rounded-full hover:bg-[#f9cc1b] duration-300 transition-colors  border  hover:cursor-pointer w-fit p-3 product-wa">
                                <i className='bx bxl-whatsapp text-3xl'></i>
                        
                                <span className="nomor text-lg">08123123132</span>
                            </Link>
                            </div>
                    
                        </div>
                    </div>

                    </div>

                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <div className="max-w-lg lg:max-w-sm md:max-w-full overflow-hidden shadow-[_8px_8px_6px_#645b4d] bg-white rounded-lg h-[34rem] border relative">
                        <img className="object-cover object-center w-72 h-62 mx-auto  p-8" src={NauImage} alt="nauimage" />
                    
                        <div className="flex items-center px-6 py-3 bgr-gold">
                            <i className='bx bxs-crown text-2xl text-yellow-700'></i>
                    
                            <h1 className="product-title mx-3 md:text-xl text-2xl font-extrabold text-[#5c6ee2] ">Franchise</h1>
                        </div>
                    
                        <div className="px-6 py-4">
                            <h1 className="md:text-2xl text-3xl font-semibold text-gray-800 product-title">Patterson johnson</h1>
                    
                            <p className="py-2 text-gray-700 dark:text-gray-400 product-description md:text-lg text-xl">Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.</p>
                    
                            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200 absolute bottom-5 left-5">
                            <Link href="/" className="bg-[#f9cc1b] flex items-start justify-center  text-slate-700 text-sm sm:text-base rounded-full hover:bg-[#f9cc1b] duration-300 transition-colors  border  hover:cursor-pointer w-fit p-3 product-wa">
                                <i className='bx bxl-whatsapp text-3xl'></i>
                        
                                <span className="nomor text-lg">08123123132</span>
                            </Link>
                            </div>
                    
                        </div>
                    </div>

                    </div>

                </div>
            </div>
        </section>

        {/* Kontak */}
        <section className="kontak">
            <h3 className="title">Kontak</h3>
            <p>Silahkan Bisa Menghubungi Kami Melalui:</p>
            <div className="kontak-container">
                <div className="kontak-konten">
                <div className="kontak-information">
                    <i className="uil uil-phone contact_icon"></i>
                    <div className="kontak_informations">
                    <h4 className="kontak-title">Call Me</h4>
                    <p className="kontak-subtitle">+6281-353-253-228</p>
                    </div>
                </div>
                <div className="kontak-information">
                    <i className="uil uil-envelope contact_icon"></i>
                    <div>
                    <h4 className="kontak-title">Email</h4>
                    <p className="kontak-subtitle">@hendi.arpana@gmail.com</p>
                    </div>
                </div>
                <div className="kontak-information">
                    <i className="uil uil-map-marker contact_icon"></i>
                    <div>
                    <h4 className="kontak-title">Alamat</h4>
                    <p className="kontak-subtitle">Indonesia, Bali, Buleleng</p>
                    </div>
                </div>
                </div>

                <form action="" className="kontak-form">
                <div className="kontak-inputs">
                    <div className="kontak-inputs-flex">
                        <div className="kontak-content">
                        <label htmlFor="" className="kontak-label"></label>
                        <input type="text" className="kontak-input" placeholder="Nama"/>
                        </div>
                        <div className="kontak-content">
                        <label htmlFor="" className="kontak-label"></label>
                        <input type="email" className="kontak-input" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="kontak-content">
                        <label htmlFor="" className="kontak-label"></label>
                        <input type="text" className="kontak-input" placeholder="Project"/>
                    </div>
                    <div className="kontak-content">
                        <label htmlFor="" className="kontak-label"></label>
                        <textarea name="" id="" cols="0" rows="7" className="kontak-input" placeholder="Pesan"></textarea>
                    </div>
                </div>
                <div className="btn-form">
                    <Link href="#" className="button button_flex">
                    Kirim Pesan
                    <i className="uil uil-message button_icon"></i>
                    </Link>
                </div>
                </form>
            </div>
        </section>

    </div>
  )
}

export default Home