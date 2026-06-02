import hamburger from '../../images/icon-hamburger.svg'
import heroone from '../../images/mobile-image-hero-1.jpg'
import close from '../../images/icon-close.svg'

function Header(){
    return(
        <>
            <div className="grid place-items-center font-spartan">
                <div className="w-full max-w-[1440px] flex">
                    <img src={heroone} className='absolute' alt="hero-1" />
                    <div className='hidden relative flex items-center justify-center w-full text-white text-[30px] p-5 pt-7'>
                        <div>room</div>
                        <img src={hamburger} className='absolute left-5' alt="hamburger-icon" />
                    </div>
                    <div className='relative flex items-center justify-end bg-white p-6 pt-10 pb-10 w-full gap-8'>
                        <img src={close} className='absolute left-5' alt="close-icon" />
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