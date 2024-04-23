import baclgroundImage from '../assets/background.jpg'

const Hero = () => {
    return(
        <section className="container mx-auto px-4 flex h-96 selection:bg-primaryPink selection:text-light">
            <div className='flex flex-col justify-center gap-y-4 basis-1/2 text-primaryGreen pr-10'>
                <h1 className="font-bold text-header">
                    Find your new plant friend!
                </h1>
                <p className='text-lg'>Lorem ipsum jaskajskjdhsdhahdkhadkhsdkhkasdhsgdfsfja</p>
            </div>
            <div className='basis-1/2'>
                <img className='max-w-lg' src={baclgroundImage} alt="Plant image" />
            </div>
        </section>
    )
}
export default Hero