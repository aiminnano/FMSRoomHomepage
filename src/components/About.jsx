import dark from '../../images/image-about-dark.jpg'
import light from '../../images/image-about-light.jpg'


function About(){
    return (
        <>
        <div className="grid place-items-center font-spartan">
            <div className="w-full max-w-[1440px] flex flex-col lg:flex-row">
                <div className='h-[237.5px] lg:h-[266px] w-full lg:max-w-[420px]'><img src={dark} className='h-full w-full object-cover lg:max-w-[420px]' alt="dark-room-img" /></div>
                <div className='flex flex-col gap-4 p-8 pt-12 pb-10 lg:p-12 lg:pt-16 lg:gap-3 lg:max-w-[584px]'>
                    <h1 className='uppercase font-bold tracking-[.33rem] text-[15px] lg:text-base lg:tracking-[.405rem]'>About our furniture</h1>
                    <p className='leading-[1.4] text-grey500 text-[15px] font-medium '>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
                </div>
                <div className='h-[237.5px] lg:h-[266px] w-full lg:max-w-[420px]'><img src={light} className='h-full w-full object-cover ' alt="light-room-img" /></div>
            </div>
        </div>
        </>
    )
}

export default About;