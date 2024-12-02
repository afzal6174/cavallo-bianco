import { IcecreamIcon, LocalPizzaIcon, WineBarIcon } from "@/assets/icons";

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-screen bg-[url('/hero-image.png')]">
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-around text-white">
        <img
          src="/cavallo-bianco-logo.png"
          alt="logo"
          className="w-auto h-16 sm:h-20 lg:h-24"
        />
        <div className="relative flex flex-col items-center justify-center h-1/3">
          <img src="/banner.png" alt="banner" className="object-cover -ml-12" />
          <div className="absolute align-middle text-center mt-24">
            <p className="leading-10 text-2xl">Restaurant Pizzeria</p>
            <p className="leading-10 text-2xl">
              Pl. Chauderon 24, 1003 Lausanne
            </p>
          </div>
        </div>
        <button className=" z-10 bg-[#713D11] hover:bg-[#b78148] text-white font-semibold px-12 md:px-20 py-3 rounded-3xl">
          Réserver
        </button>
        <div className="flex justify-evenly w-full">
          <div className="flex flex-col items-center text-center">
            <LocalPizzaIcon className="text-white h-[40px] w-[40px] md:h-[70px] md:w-[70px]" />
            <span className="hidden md:block w-64 mt-4">
              Authentiques, savoureuses, aux saveurs italiennes incomparables
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <WineBarIcon className="text-white h-[40px] w-[40px] md:h-[70px] md:w-[70px]" />
            <span className="hidden md:block w-64 mt-4">
              Vins fins et cocktails pour sublimer chaque bouchée
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <IcecreamIcon className="text-white h-[40px] w-[40px] md:h-[70px] md:w-[70px]" />
            <span className="hidden md:block w-64 mt-4">
              Douceur italienne : tiramisus, glaces crémeuses et plus
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
