import tags from '../data/Tags.js';

const projects = [
  {
    img: './images/portfolioscreen.jpg',
    title: 'Portafolio',
    github: 'https://github.com/firthunandz/Portfolio',
    description: 'Portafolio ersonal hecho en Astro',
    tags: [tags.HTML, tags.CSS, tags.JavaScript, tags.Astro]
  },
  {
    img: './images/fermentoswebscreen.jpg',
    title: 'Fermentos Web',
    github: 'https://github.com/firthunandz/Fermentos-web',
    description: 'Web para mi emprendimiento "Fer-mentos"',
    tags: [tags.HTML, tags.CSS, tags.JavaScript]
  },
  {
    img: './images/neonsnakescreen.jpg',
    title: 'Neon Snake Game',
    github: 'https://github.com/firthunandz/NeonSnake',
    description: 'Snake game hecho en React',
    tags: [tags.HTML, tags.CSS, tags.JavaScript, tags.React]
  },
  {
    img: './images/pokeclickscreen.jpg',
    title: 'Poke Click',
    github: 'https://github.com/firthunandz/PokeClick',
    description: 'Idle clicker game using PokeAPI',
    tags: [tags.HTML, tags.CSS, tags.JavaScript]
  },
  {
    img: './images/funkopopscreen.jpg',
    title: 'Funko-POP e-commerce',
    github: 'https://github.com/firthunandz/CaC-finalProyect',
    description: 'Proyecto final para el bootcamp Codo a codo',
    tags: [tags.HTML, tags.CSS, tags.JavaScript, tags.NodeJS, tags.Express, tags.EJS, tags.MySQL, tags.Sequelize]
  },
]

export default projects;