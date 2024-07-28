import { useState } from "react";

const Contact = () => {

    const initialState = {
        name: "",
        message: "",
        email: "",
    }

    const [formDetails, setFormDetails] = useState(initialState);

    const onValueChange = (fieldName, value) => {
        const updatedFormDetails = { ...formDetails, [fieldName]: value};
        setFormDetails(updatedFormDetails);
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();
        console.log(formDetails);
        setFormDetails(initialState)
    }

    return (
        <section>

            <h1 className="text-4xl text-left font-bold my-6">Contáctame</h1>
            <div className="bg-white text-left rounded-xl p-8">
                <p>¿Estás interesado en trabajar juntos? Contáctame en{""} 
                <a href="mailto:contacto@marco-rangel.tech"> contacto@marco-rangel.tech</a>
                </p>
                <form
                    onSubmit={onHandleSubmit}
                    className="mt-3 flex flex-col gap-6">
                    <input 
                        type="text" 
                        placeholder="tu nombre" 
                        className="text-md bg-background rounded-xl px-4 py-3 placeholder-opacity-50 focus:outline-none border w-full "
                        value={formDetails.name}
                        onChange={(e) => onValueChange("name", e.target.value)}
                        />
                    <input 
                        type="email" 
                        placeholder="tu email"
                        className="text-md bg-background rounded-xl px-4 py-3 placeholder-opacity-50 focus:outline-none border w-full "
                        value={formDetails.email}
                        onChange={(e) => onValueChange("email", e.target.value)}
                        />
                    <textarea 
                        placeholder="Mensaje"
                        rows="4"
                        className="text-md bg-background rounded-xl px-4 py-3 placeholder-opacity-50 focus:outline-none border w-full "
                        value={formDetails.message}
                        onChange={(e) => onValueChange("message", e.target.value)}
                        />
                    <button 
                        type="submit"
                        className="bg-primary text-white"
                        >
                        Enviar
                    </button>
                </form>
            </div>
            
        </section>
    );
}

export default Contact;