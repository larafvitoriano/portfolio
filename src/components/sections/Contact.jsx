import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-400 text-transparent bg-clip-text">
            Contato
          </h2>

           {/* Ícones do LinkedIn e GitHub */}
           <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/larafernanda/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <img src="src\assets\linkedin.png" alt="Logo do LinkedIn" className="w-10"/>
            </a>
            <a
              href="https://github.com/larafvitoriano"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              <img src="src\assets\github.png" alt="Logo do Github" className="w-10"/>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
