export default class Cl_mPersona {
    _nombre = "";
    _apellido = "";
    _cedula = 0;
    _sexo = "";
    _fechaNac = "";
    constructor({ nombre, apellido, cedula, sexo, fechaNac }) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.sexo = sexo;
        this.fechaNac = fechaNac;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set apellido(value) {
        this._apellido = value;
    }
    get apellido() {
        return this._apellido;
    }
    set cedula(value) {
        this._cedula = value;
    }
    get cedula() {
        return this._cedula;
    }
    set sexo(value) {
        this._sexo = value;
    }
    get sexo() {
        return this._sexo;
    }
    set fechaNac(value) {
        this._fechaNac = value;
    }
    get fechaNac() {
        return this._fechaNac;
    }
    //esta vaina la hizo la ia la verdad pero voy a medio explicar lo que entendi :V
    get edad() {
        // con esto obtenemos la fecha del dia de hoy
        const hoy = new Date();
        // convertimos la fecha de nacimiento que proporciono el usuario en un objeto de fecha
        const nacimiento = new Date(this.fechaNac);
        // aca calculamos la edad estimada ejemplo 2026 - 2006 serian 20
        let e = hoy.getFullYear() - nacimiento.getFullYear();
        // aca se calcula la diferencia entre los meses para ver si ya paso su cumpleaños y asi obtener la edad de forma mas precisa
        let m = hoy.getMonth() - nacimiento.getMonth();
        //Si la diferencia de meses es negativa (m < 0) significa que su mes aún no llega.
        // O, si se esta en el mismo mes (m===0) y a su ves el dia de hoy es menor al dia de su cumpleaños
        if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
            // le restamos uno a la edad estimada ya que no a cumplido años aun
            e--;
            //Devolvemos el número final ya corregido o no dependiendo del caso
        }
        return e;
    }
    get descuento() {
        return false;
    }
    get costo() {
        return 0;
    }
}
