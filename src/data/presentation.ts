type Social = {
  label: string;
  link: string;
  iconClass: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  image?: string; 
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "maxencewolff.pro@gmail.com",
  title: "Hola, Soy Samir 👋",
  // profile: "/profile.webp",
  description:
    "Soy un *desarrollador web* con experiencia en proyectos propios y en equipo, participando tanto en el *Frontend* como en el *Backend.* Actualmente *estoy trabajando en un área totalmente distinta de la informática.* Fuera del trabajo, me apasiona mucho jugar videojuegos, aprender sobre mecánica y estudiar *temas de tecnología.*",
    image: "public/perfil.jpeg",
    socials: [
    {
      label: "Twitter",
      link: "https://twitter.com/itsstormzz_",
      iconClass: "fab fa-twitter", // Clase de Font Awesome para Twitter
    },
    {
      label: "Linkedin",
      link: "https://bento.me/m-wolff",
      iconClass: "fab fa-linkedin", // Clase de Font Awesome para Bento (¡puede que esta no exista!)
    },
    {
      label: "Github",
      link: "https://github.com/MaeWolff",
      iconClass: "fab fa-github", // Clase de Font Awesome para GitHub
    },
    ]
  };

export default presentation;
