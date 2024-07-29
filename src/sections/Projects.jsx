import ProjectCard from "../components/ProjectCard";

const projects = [
    {
        name: "CRUD MVC en PHP",
        description: "Proyecto CRUD en PHP puro con modelo MVC, con seguridad y robustez",
        url: "https://github.com/marc7hedev/MVCProject/",
        imgUrl:
            "/proj-logos/mvc-logo.png",
    },
    {
        name: "React Portfolio",
        description: "Portafolio moderno hecho con React y Framer Motion",
        url: "https://marco-rangel.tech/",
        imgUrl:
            "https://strapi.dhiwise.com/uploads/618fa90c201104b94458e1fb_64fecc21e15ea565176c74ad_React_Framer_Motion_Main_Image_07ee7c735e.jpg",
    },
    {
        name: "Ferremateriales Medina",
        description: "Página de negocio con elementos interactivos y catalogo de productos",
        url: "https://ferremateriales-medina.com/",
        imgUrl:
            "https://marco-rangel.tech/projects/ferremateriales_landin.png",
    },
    {
        name: "Multitheme Portfolio",
        description: "Portafolio moderno muy personalizable",
        url: "https://marc7hedev.github.io/portfoliov1/",
        imgUrl:
            "https://marco-rangel.tech/projects/portafoliov1.png",
    },

];


const Projects = () => {
    return (
        <>
            <h1 className="text-4xl text-left font-bold mb-2">Proyectos Recientes</h1>
            <ul className="bg-white text-left rounded-xl p-3 shadow-xl hover:shadow-2xl">
                {projects.map((project, i) =>  (
                    <li key={i}>
                        <ProjectCard 
                            name={project.name}
                            description={project.description}
                            url={project.url}
                            imgUrl={project.imgUrl}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Projects;