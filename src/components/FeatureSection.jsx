const FeatureSection = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row justify-center gap-0">
        <div className="flex grow flex-col gap-4 items-center justify-center p-8 bg-[#EBE1D5] border border-[#713D11]">
          <h3 className="font-bold text-xl text-[#713D11]">A propos</h3>
          <img
            src="/item-1.svg"
            alt="Feature 1"
            className="max-w-[200px] h-auto"
          />
        </div>
        <div className="flex grow flex-col gap-4 items-center justify-center p-8 bg-[#EBE1D5] border border-[#713D11]">
          <h3 className="font-bold text-xl text-[#713D11]">Menu</h3>
          <img
            src="/item-2.svg"
            alt="Feature 2"
            className="max-w-[200px] h-auto"
          />
        </div>
        <div className="flex grow flex-col gap-4 items-center justify-center p-8 bg-[#EBE1D5] border border-[#713D11]">
          <h3 className="font-bold text-xl text-[#713D11]">Contact</h3>
          <img
            src="/item-3.svg"
            alt="Feature 3"
            className="max-w-[200px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
