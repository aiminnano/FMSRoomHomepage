import hamburger from '../../images/icon-hamburger.svg'
import heroone from '../../images/mobile-image-hero-1.jpg'
function Header(){
    return(
        <>
            <div className="grid place-items-center font-spartan">
                <div className="w-full max-w-[1440px] flex">
                    <img src={heroone} className='absolute' alt="hero-1" />
                    <div className='relative flex items-center justify-center w-full text-white text-[30px] p-5 pt-7'>
                        <div>room</div>
                        <img src={hamburger} className='absolute left-5' alt="hamburger-icon" />
                    </div>
                       
                        
                    
                </div>
            </div>
        </>
    )
}

export default Header;