import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-2"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          {/* TÍTULO */}
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-400 text-transparent bg-clip-text">
            Projetos
          </h2>
          {/* GRID DE PROJETOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* PROJETO 1 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">FSW Donalds</h3>
              <p className="text-gray-400 mb-4">
                Aplicação de self-checkout para totem de atendimento.
              </p>
              <div>
                {["React", "TypeScript", "Prisma", "Next.js", "Tailwind CSS"].map((tech, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://fsw-donalds-lemon.vercel.app/fsw-donalds"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Visualizar
                </a>
              </div>
            </div>
            {/* FIM PROJETO 1 */}

            {/* PROJETO 2 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Spotify</h3>
              <p className="text-gray-400 mb-4">
                Réplica do Spotify.
              </p>
              <div>
                {["React", "Node.js", "Express", "JavaScript"].map((tech, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Visualizar
                </a>
              </div>
            </div>
            {/* FIM PROJETO 2 */}

            {/* PROJETO 1 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Portfólio</h3>
              <p className="text-gray-400 mb-4">
              Projeto desenvolvido como currículo pessoal.
              </p>
              <div>
                {["React", "TailwindCSS", "JavaScript", "Vite"].map((tech, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#home"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Visualizar
                </a>
              </div>
            </div>
            {/* FIM PROJETO 1 */}

            {/* PROJETO 1 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Optimus Tech</h3>
              <p className="text-gray-400 mb-4">
                Projeto de landing page desenvolvido durante o desafio 7 Days of Code, da Alura.
              </p>
              <div>
                {["HTML + CSS"].map((tech, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://larafvitoriano.github.io/7daysofcode-alura/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Visualizar
                </a>
              </div>
            </div>
            {/* FIM PROJETO 1 */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
