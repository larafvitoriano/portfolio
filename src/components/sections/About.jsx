import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML + CSS",
    "Javascript",
    "React",
    "Angular",
    "TypeScript",
    "TailwindCSS",
    "Bootstrap",
  ];

  const backendSkills = ["Node.js", "Express", "C#", ".NET", "MongoDB", "SQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-400 text-transparent bg-clip-text">
            Sobre Mim
          </h2>

          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <p className="text-gray-300 mb-6">
              Tenho 25 anos, sou analista de sistemas e estou cursando uma
              Pós-Graduação pela UFRN/IMD, atuando em Desenvolvimento Fullstack.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4">🎓 Formação Acadêmica</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Análise e Desenvolvimento de Sistemas</strong> -
                  Centro Universitário Vale do Salgado (2018-2020)
                </li>
                <li>
                  <strong>Pós-Graduação em Desenvolvimento de Software</strong>{" "}
                  - Universidade Federal do Rio Grande do Norte (2024 -
                  Atualmente)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4">
                💼 Experiência Profissional
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Programa de Residência em Tecnologia da Informação
                  </h4>
                  <p className="mb-2 mt-2">
                    Pós-graduação pela UFRN, em parceria com o IMD/UFRN e o
                    Tribunal de Contas do Estado (TCE-RN).
                  </p>
                  <p>
                    <strong>Atividades</strong>:
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>
                      Desenvolvimento de soluções fullstack, criando Web APIs em C# com .NET (REST e padrões de projeto).
                      </li>
                      <li>
                      Integração com frontend em Angular, com foco em performance, boas práticas e responsividade.
                      </li>
                      <li>
                      Uso diário de metodologias ágeis (Scrum e Kanban).
                      </li>
                      <li>
                      Versionamento de código com Git.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
