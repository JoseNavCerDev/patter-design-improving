
class ComplexFrameworkTS{

    reverseMethod(data: string): string[]{
        let data_ : string[] = data.split(''); 
        let dataReverse: string[] = [];
        let acumulator: number = 0;
 
        for(let i = data_.length - 1; i >= 0; i --){
         dataReverse[acumulator++] = data_[i];
        } 
        return dataReverse;
     }
}




class FacadeTS{

    private complexFrameworkTs : ComplexFrameworkTS;

    constructor(complexFrameworkTS: ComplexFrameworkTS){
        this.complexFrameworkTs = complexFrameworkTS;
    }

    reversMethodByFacadeClass(data: string): string[]{
        return this.complexFrameworkTs.reverseMethod(data);
    }
}
 


const data = "Parangaricutirimicuaro";

const complexClass = new ComplexFrameworkTS();
const facade = new FacadeTS(complexClass);
 
console.log(facade.reversMethodByFacadeClass(data));


