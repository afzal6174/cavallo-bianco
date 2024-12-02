import React from "react";

const ContactSection = () => {
  return (
    <section class="bg-[#713D11] text-[#ffffff] py-8">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="font-bold text-lg">Contactez-nous</h3>
          <form class="mt-4 grid gap-4">
            <input
              type="email"
              placeholder="Email"
              class="p-3 border rounded"
            />
            <input
              type="text"
              placeholder="Numéro de téléphone"
              class="p-3 border rounded"
            />
            <textarea
              placeholder="Message"
              class="p-3 border rounded h-32"
            ></textarea>
            <button
              type="submit"
              class="bg-[#d49f61] hover:bg-[#b78148] text-white py-3 px-6 rounded"
            >
              Envoyer
            </button>
          </form>
        </div>
        <div>
          <h3 class="font-bold text-lg">Nos coordonnées</h3>
          <p class="mt-4">e-mail: info@example.com</p>
          <p>021 625 09 70</p>
          <p>Pl. Chauderon 24, 1003 Lausanne</p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ContactSection);
