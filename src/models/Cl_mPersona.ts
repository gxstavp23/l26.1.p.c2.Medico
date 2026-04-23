export default class Cl_mPersona{
private _nombre: string ="";
private _apellido: string ="";
private _cedula: number = 0;
private _sexo: string = "";
private _fechaNac :string = "";

constructor({nombre,apellido,cedula,sexo,fechaNac}: {nombre:string,apellido:string,cedula:number,sexo:string,fechaNac:string}){
    this.nombre = nombre;
    this.apellido = apellido;
    this.cedula = cedula;
    this.sexo = sexo;
    this.fechaNac = fechaNac;
}

set nombre(nombre:string){
   this._nombre = nombre;
}
get nombre():string{
    return this._nombre;
}
set apellido(value:string){
   this._apellido = value;
}
get apellido():string{
    return this._apellido;
}
set cedula(value:number){
    this._cedula = value;
}
get cedula():number{
    return this._cedula
}
set sexo(value:string){
    this._sexo = value;
}
get sexo():string{
    return this._sexo
}
set fechaNac(value:string){
    this._fechaNac = value;
}
get fechaNac():string{
    return this._fechaNac
}

get edad():number{
    const  hoy = new Date(); 
    const nacimiento = new Date(this.fechaNac);
   
    let e = hoy.getFullYear() - nacimiento.getFullYear();
    let m = hoy.getMonth() - nacimiento.getMonth();
    if (m < 0 || (m===0 && hoy.getDate() < nacimiento.getDate())) {    
        e-- 
    }return e
}
get descuento():boolean{
    return false ;
}
get costo():number{
    return 0;
}

}