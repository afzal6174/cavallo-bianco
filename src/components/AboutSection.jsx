import { Map } from "@/assets/icons";
import React from "react";

const AboutSection = () => {
  return (
    <section className="flex flex-col gap-0">
      <div className="flex flex-col lg:flex-row-reverse bg-[#713D11] py-8 h-[720px]">
        <div className="w-full lg:w-1/2 px-2">
          <h2 className="text-3xl text-[#EBE1D5] font-bold">À Propos</h2>
          <p className="mt-4 text-lg text-white text-start leading-7">
            Situé au cœur de Lausanne, près de la Place Chauderon, Cavallo
            Bianco vous propose une cuisine italienne authentique
            alliant saveurs méditerranéennes et ingrédients frais. Découvrez
            nos pizzas artisanales, pâtes faites maison et desserts
            emblématiques comme le tiramisu, le tout dans une ambiance
            chaleureuse et conviviale.{" "}
          </p>
          <p className="text-lg text-white text-start leading-7">
            Accompagnez vos plats d'une sélection de vins raffinés et
            de cocktails uniques, parfaits pour sublimer votre expérience. Que
            ce soit pour un dîner romantique, un repas entre amis ou en famille,
            Cavallo Bianco est l'adresse idéale à Lausanne.{" "}
          </p>
          <p className="text-lg text-white text-start leading-7">
            Réservez dès aujourd’hui et vivez la dolce vita !
          </p>
        </div>

        <div className="relative w-full lg:w-1/2 mt-4 lg:mt-20">
          <img
            src="/pizza.png"
            alt="pizza"
            className="absolute h-auto w-auto"
          />
        </div>
      </div>
      <div className="flex flex-col gap-0 lg:flex-row py-8 bg-[#EBE1D5]  text-[#713D11]">
        <h2 className="mt-auto px-20 w-full lg:w-1/2 text-3xl md:text-6xl font-extrabold">
          MAMMA <br /> MIA !
        </h2>
        <div className="w-full lg:w-1/2 flex flex-col gap-4 p-8">
          <div>
            <h3
              id="opening-schedule-list"
              className="text-2xl font-bold leading-10"
            >
              HORAIRES D’OUVERTURE
            </h3>
            <dl
              aria-labelledby="opening-schedule-list"
              className="text-xl font-semibold"
            >
              <div className="flex leading-8">
                <dt className="w-40">LUNDI-SAMEDI</dt>
                <dd>10H-00H</dd>
              </div>
              <div className="flex leading-8">
                <dt className="w-40">DIMANCHE</dt>
                <dd>17H-00H</dd>
              </div>
            </dl>
            <div
              aria-labelledby="opening-schedule-list"
              className="flex gap-2 leading-8"
            >
              <Map className="h-6 w-6" />
              <p className="text-base text-[#713D11] underline underline-offset-4 decoration-1">
                Pl. Chauderon 24, 1003 Lausanne
              </p>
            </div>
          </div>
          <div>
            <h3
              id="kitchen-schedule-list"
              className="text-2xl font-bold leading-10"
            >
              HORAIRES DE LA CUISINE
            </h3>
            <dl
              aria-labelledby="kitchen-schedule-list"
              className="text-xl font-semibold"
            >
              <div className="flex leading-8">
                <dt className="w-40">LUNDI-SAMEDI</dt>
                <dd>
                  11H30-14H <br />
                  18H30-23H
                </dd>
              </div>
              <div className="flex leading-8">
                <dt className="w-40">DIMANCHE</dt>
                <dd>18H30 - 23H</dd>
              </div>
            </dl>
            <div
              aria-labelledby="kitchen-schedule-list"
              className="flex gap-2 leading-8"
            >
              <Map className="h-6 w-6" />
              <p className="text-base text-[#713D11] underline underline-offset-4 decoration-1">
                Pl. Chauderon 24, 1003 Lausanne
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutSection);
