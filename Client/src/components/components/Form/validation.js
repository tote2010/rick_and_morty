
export default function Validate (data) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const  regexPassword  =  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{6,10})/; 
    const errors={}
    if(!regexEmail.test(data.username)){
        errors.username = "Debe ser un email."
    }
    if(!data.username){
        errors.username = "Este campo es requerido, no puede estar vacio.";
    } 
    if(data.username.length > 35){
        errors.username = "No puede tener más de 35 caracteres."
    }
    if(!regexPassword.test(data.password)){
        errors.password = "Debe contener al menos un numero."
    }
    if(data.password.length < 6 || data.password.length > 10){
        errors.password = "Debe contener entre 6 a 10 caracteres."
    }
    return errors;
}