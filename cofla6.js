class App{
    constructor(nombre,descargas,puntuacion,peso){
        this.nombre = nombre;
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("app iniciada");
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("app instalada")
        }
    }
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("app desinstalada")
        }
    }
    infoApp(){
        return `
        <b>${this.nombre}</b><br>
        descargas <b>${this.descargas}</b><br>
        puntuacion <b>${this.puntuacion}</b><br>
        peso <b>${this.peso}</b><br><br>
        `
    }
}
const app1 = new App("Geometry Dash","5.000.000","4,8","123mb");
const app2 = new App("Clash Royale","100.000.000","4,5","42mb");
const app3 = new App("Clans of Clans","500.000.000","4,6","5mb");
const app4 = new App("Subway Surfers","1.000.000.000","4,6","666mb");
const app5 = new App("Free Fire","1.000.000.000","4,2","77712mb");
const app6 = new App("Geometry Dash Lite","100.000.000","4,4","16mb");
const app7 = new App("Geometry Dash World","50.000.000","4,5","22mb");
// app.instalar();
// app.abrir()
// app.cerrar()
// app.desinstalar()
document.write(app1.infoApp())
document.write(app2.infoApp())
document.write(app3.infoApp())
document.write(app4.infoApp())
document.write(app5.infoApp())
document.write(app6.infoApp())
document.write(app7.infoApp())