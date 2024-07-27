import { Linkedin, AtSign, GitBranch } from "lucide-react";

const Bio = () => {
    
    return (
        <section className="bg-white text-center md:text-left rounded-xl p-2 md:p-5 shadow-md">
        
            <h1 className="text-lg md:text-2xl font-bold mt-3">Marco Rangel</h1>
            <p className="text-secondary-foreground py-2">Desarrollador Web especializado en Backend</p>
            <div className="flex flex-row gap-2 mt-2">
                <a href="https://mx.linkedin.com/" target="_blank" rel="noopener noreferrer" >

                    <Linkedin className="text-blue-400 hover:text-blue-600 cursor-pointer"/>

                </a>
                <a href="https://mx.linkedin.com/" target="_blank" rel="noopener noreferrer" >
                    <AtSign className="text-pink-400 hover:text-pink-600 cursor-pointer"/>
                </a>
                <a href="https://github.com/marc7hedev" target="_blank" rel="noopener noreferrer" >
                    <GitBranch className="text-red-400 hover:text-red-600 cursor-pointer"/>
                </a>
            </div>
        
        </section>
    )
};

export default Bio;
