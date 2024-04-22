import baclgroundImage from '../assets/background.jpg'

const Hero = () => {
    return(
        <section className="flex h-96 max-h-96 max-w-full">
            <div className='basis-1/2 m-8'>
                <img className='rounded-2xl' src={baclgroundImage} alt="Plant logo" />
            </div>
            <div className='flex flex-col justify-center gap-y-4 basis-1/2 text-primaryGreen'>
                <h1 className="font-bold text-header">
                    Find your new plant friend!
                </h1>
                <p className='text-lg'>Lorem ipsum jaskajskjdhsdhahdkhadkhsdkhkasdhsgdfsfja</p>
            </div>
        </section>
    )
}
export default Hero