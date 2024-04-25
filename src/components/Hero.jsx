import baclgroundImage from "../assets/background.jpg";

const Hero = () => {
  return (
    <section className="container mx-auto flex selection:bg-primaryPink selection:text-light">
      <div className="flex flex-1 flex-col pt-20 gap-y-6 text-primaryGreen font-maison pr-16">
        <h1 className="font-bold text-header tracking-wide">Explore the world of plants</h1>
        <p className="text-lg pb-4">Discover the Beauty and Diversity of Plants: Explore our Website
        </p>
        <button className="bg-primaryGreen text-primaryPink w-fit py-2 px-6">Explore</button>
      </div>
      <div className="flex-none">
        <img className="h-[50rem] w-full object-cover" src={baclgroundImage} alt="Plant image" />
      </div>
    </section>
  );
};
export default Hero;
