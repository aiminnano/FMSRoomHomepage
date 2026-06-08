import hamburger from '../../images/icon-hamburger.svg'
import heroone from '../../images/mobile-image-hero-1.jpg'
import herotwo from '../../images/mobile-image-hero-2.jpg'
import herothree from '../../images/mobile-image-hero-3.jpg'
import close from '../../images/icon-close.svg'
import Arrow from '../../images/icon-arrow.svg?react'
import arrowleft from '../../images/icon-angle-left.svg'
import arrowright from '../../images/icon-angle-right.svg'
import hero1d from '../../images/desktop-image-hero-1.jpg'
import hero2d from '../../images/desktop-image-hero-2.jpg'
import hero3d from '../../images/desktop-image-hero-3.jpg'

import { useState } from 'react'

function Header(){
    const desktopImages = [hero1d, hero2d, hero3d];
    const mobileImages = [heroone, herotwo, herothree]
    const [isOpen, setIsOpen] = useState(false);
    const [count, setCount] = useState(0);
    const [fade, setFade] = useState(true)

    const prev = () => {
        setFade(false)
        setTimeout(() => {
            setCount(count === 0 ? desktopImages.length - 1 : count - 1);
            setFade(true)
        }, 50);  
    }

    const next = () => {
        setFade(false);
        setTimeout(() => {
            setCount(count === desktopImages.length - 1 ? 0 : count + 1);
            setFade(true);
        }, 50);  
    }

    return(
        <>
            <div className="grid place-items-center font-spartan">
                <div className="w-full max-w-[1440px] flex flex-col lg:flex-row lg:h-[534px]">

                    <div className='h-[360px] relative'>    
                        <div className={`${ isOpen ? 'block' : 'hidden'} fixed z-1 w-full h-full bg-blacklowop`}></div>
                        <img src={mobileImages[count]} className={`transition-opacity duration-50 ${fade ? 'opacity-100' : 'opacity-0'} absolute lg:hidden w-full h-full object-cover`} alt="mobile-img" />
                        <img src={desktopImages[count]} className={`transition-opacity duration-50 ${fade ? 'opacity-100' : 'opacity-0'} hidden lg:block w-full h-[534px] object-cover`} alt="desktop-img" />
                        <div className='lg:hidden'>
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
                        <div className='hidden absolute lg:flex gap-14 items-center justify-center top-0 text-white p-15 pt-10 '>
                            <div className='text-3xl pb-1'>room</div>
                            <div className='flex items-center gap-7.5 font-medium'>
                                <div className='nav-item cursor-pointer pb-1'>home</div>
                                <div className='nav-item cursor-pointer pb-1'>shop</div>
                                <div className='nav-item cursor-pointer pb-1'>about</div>
                                <div className='nav-item cursor-pointer pb-1'>contact</div>
                            </div>
                        </div>
                        <div className='absolute right-0 bottom-0 z-5 bg-black flex items-center lg:hidden'>
                            <button type="button" onClick={prev} className='flex items-center justify-center w-[56px] h-[55px] '><img src={arrowleft} className='w-[10px]' alt="left-arrow-icon" /></button>
                            <button type="button" onClick={next} className='flex items-center justify-center w-[56px] h-[55px] '><img src={arrowright} className='w-[10px]' alt="right-arrow-icon" /></button>
                        </div>
                    </div>

                    
                    <div className='relative p-8 flex flex-col items-start gap-8 lg:gap-5 mt-7 lg:max-w-[600px] lg:p-25'>
                        <div className='flex flex-col gap-4 lg:gap-6 leading-[1.3]'>
                            <div className='font-semibold tracking-tighter text-[2.55rem] leading-[.9] lg:text-[3.03rem]'>Discover innovative ways to decorate</div>
                            <div className='text-grey500 text-[15.5px] leading-[1.4]'>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in brinking your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</div>
                        </div>

                        <div className='group flex gap-4 items-center cursor-pointer'>
                            <div className='tracking-[.8rem] font-medium text-[15px] cursor-pointer group-hover:text-grey500 '>SHOP NOW </div>
                            <Arrow className='text-black group-hover:text-grey500' />
                        </div>
                        <div className='hidden lg:flex absolute left-0 bottom-0 z-5 bg-black flex items-center '>
                            <button type="button" onClick={prev} className='flex items-center justify-center w-[56px] h-[55px] lg:h-[78px] lg:w-[82px] hover:bg-grey800 cursor-pointer'><img src={arrowleft} className='w-[10px] lg:w-[14px]' alt="left-arrow-icon" /></button>
                            <button type="button" onClick={next} className='flex items-center justify-center w-[56px] h-[55px] lg:h-[78px] lg:w-[82px] hover:bg-grey800 cursor-pointer'><img src={arrowright} className='w-[10px] lg:w-[14px]' alt="right-arrow-icon" /></button>
                        </div>    
                    </div>

                    

                </div>
            </div>
        </>
    )
}

export default Header;