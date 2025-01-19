import tags from '../data/Tags.js';

const projects = [
  {
    title: 'Portafolio',
    github: 'https://github.com/firthunandz/Portfolio',
    description: 'Portafolio hecho en Astro',
    tags: [tags.HTML, tags.CSS, tags.JavaScript, tags.Astro]
  },
  {
    title: 'Fermentos Web',
    github: 'https://github.com/firthunandz/Fermentos-web',
    description: 'Web para mi emprendimiento "Fer-mentos"',
    tags: [tags.HTML, tags.CSS, tags.JavaScript]
  },
  {
    title: 'Neon Snake Game',
    github: 'https://github.com/firthunandz/NeonSnake',
    description: 'Snakegame',
    tags: [tags.HTML, tags.CSS, tags.JavaScript, tags.React]
  },
  {
    title: 'Poke Click',
    github: 'https://github.com/firthunandz/PokeClick',
    description: 'Idle clicker game',
    tags: [tags.HTML, tags.CSS, tags.JavaScript]
  },
  {
    title: 'Funko-POP e-commerce',
    github: 'https://github.com/firthunandz/CaC-finalProyect',
    description: 'Proyecto final para el bootcamp Codo a codo',
    tags: [tags.HTML, tags.CSS, tags.JavaScript, tags.NodeJS, tags.Express, tags.EJS, tags.MySQL, tags.Sequelize]
  },
]

export default projects;