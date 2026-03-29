const projetos = [
  {
    titulo: "Site de Portfólio",
    descricao: "Meu primeiro portfólio utilizando HTML, CSS e JS.",
    link: "https://github.com/juzem/portfolio"
  },
  {
    titulo: "App de Tarefas",
    descricao: "Aplicativo simples para gerenciar tarefas.",
    link: "https://github.com/juzem/todo-app"
  }
];

function renderizarProjetos() {
  const container = document.getElementById("lista-projetos");
  projetos.forEach(projeto => {
    const div = document.createElement("div");
    div.classList.add("projeto");
    div.innerHTML = `
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <a href="${projeto.link}" target="_blank">Ver no GitHub</a>
    `;
    container.appendChild(div);
  });
}

renderizarProjetos();
