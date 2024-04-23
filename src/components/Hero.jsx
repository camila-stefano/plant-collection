import baclgroundImage from "../assets/background.jpg";

const Hero = () => {
  return (
    <section className="container mx-auto flex h-96 selection:bg-primaryPink selection:text-light">
      <div className="flex flex-1 flex-col justify-center gap-y-4 text-primaryGreen font-maison pr-16">
        <h1 className="font-bold text-header tracking-wide">Explore the world of plants</h1>
        <p className="text-lg">Discover the Beauty and Diversity of Plants: Explore our Website
        </p>
        <button className="bg-primaryGreen text-primaryPink rounded-full w-fit py-2 px-6">Explore</button>
      </div>
      <div className="flex-none">
        <img className="h-[50rem] w-full object-cover" src={baclgroundImage} alt="Plant image" />
      </div>
    </section>
  );
};
export default Hero;
