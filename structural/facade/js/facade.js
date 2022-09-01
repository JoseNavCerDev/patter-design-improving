
class ComplexFramework{

    reverseMethod(data){
        const data_ = data.split('');
        const dataReverse = [];
        let acumulator = 0;
 
        for(let i = data_.length - 1; i >= 0; i --){
         dataReverse[acumulator++] = data_[i];
        }
 
        return dataReverse;
     }
       

}

class Facade{

    constructor(frameworkComplejo){
        this.frameworkComplejo = frameworkComplejo;        
    }

    metodoComplejoReducido(data){
        return this.frameworkComplejo.reverseMethod(data);
    }  

}

const message = "Parangaricutirimicuaro";
const frameworkComplejo = new FrameworkComplejo();
const facadeAplicado = new Facade(frameworkComplejo);
const mensaje = facadeAplicado.metodoComplejoReducido(message);

console.log(mensaje);