import landingImage from "../assets/landing.png";

const Landing = () => {
  return (
    <div className="relative w-full max-h-[500px]">
      {/* Image */}
      <img
        src={landingImage}
        alt="Landing"
        className="w-full max-h-[500px] object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-8xl font-bold bg-orange-900 bg-opacity-90 p-4 rounded">
          Meals Made Easy, 
        </h1>
        <h1 className="text-white text-8xl font-bold bg-orange-900 bg-opacity-90 p-4 rounded">Moments Made Special!</h1>
      </div>
    </div>
  );
};

export default Landing;
