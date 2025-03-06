import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-400 text-transparent bg-clip-text">
            Contato
          </h2>
          <p>Redes sociais aqui</p>
        </div>
      </RevealOnScroll>
    </section>
  );
};
