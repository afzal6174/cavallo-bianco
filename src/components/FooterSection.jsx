import { FacebookOutlined, Instagram, Linkedin } from "@/assets/icons";

const FooterSection = () => {
  return (
    <section className="flex flex-col gap-8 bg-[#EBE1D5]">
      <div className="flex flex-col-reverse md:flex-row items-center justify-around gap-4 mt-8">
        <div className="m-auto">
          <img
            src="/cavallo-bianco-logo-2.png"
            alt="logo"
            className="w-48 h-32"
          />
        </div>
        <div className="flex items-center justify-center gap-4 m-auto text-[#713D11]">
          <Instagram className="h-14 w-14" />
          <FacebookOutlined className="h-14 w-14" />
          <Linkedin className="h-14 w-14" />
        </div>
      </div>
      <div className="text-center mb-8">
        <p className="text-base text-[#713D11]">
          &copy; 2020-2024 Logixcube - Cornu. Tous droits réservés.
        </p>
      </div>
    </section>
  );
};

export default FooterSection;
