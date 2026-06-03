import hamburger from '../../images/icon-hamburger.svg'
import heroone from '../../images/mobile-image-hero-1.jpg'
import close from '../../images/icon-close.svg'
import { useState } from 'react'

function Header(){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <div className="grid place-items-center font-spartan">
                <div className="w-full max-w-[1440px] flex">
                    <div className={`${ isOpen ? 'block' : 'hidden'} fixed z-1 w-full h-full bg-blacklowop`}></div>
                    <img src={heroone} className='absolute' alt="hero-1" />
                    <div className={`${ isOpen ? 'hidden' : 'flex' } relative z-1 flex items-center justify-center w-full text-white text-[30px] p-5 pt-7`}>
                        <div>room</div>
                        <img src={hamburger} className='absolute left-5' onClick={() => setIsOpen(!isOpen)} alt="hamburger-icon" />
                    </div>
                    <div className={`${ isOpen ? 'flex' : 'hidden' } relative z-2 flex items-center justify-end bg-white p-6 pt-10 pb-10 w-full gap-8`}>
                        <img src={close} onClick={() => setIsOpen(!isOpen)} className='absolute left-6' alt="close-icon" />
                        <div className='flex items-center justify-center gap-7 font-bold'>
                            <div>home</div>
                            <div>shop</div>
                            <div>about</div>
                            <div>contact</div>
                        </div>
                    </div>
                        
                    
                </div>
            </div>
        </>
    )
}

export default Header;