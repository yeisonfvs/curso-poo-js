
const yeison = {
    name: "yeison",
    age: 26,
    cursosAprovados: [
        "Curso HTML Y CSS",
        "Curso Practico HTML y CSS",
    ],

    aprobarCurso(nuevoCurso) {
       this.cursosAprovados.push(nuevoCurso);
      
    },
    
};
//prototype
function student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    //this.aprobarCurso = function(nuevoCurso) {
    // this.cursosAprobados.push(nuevoCurso);   
    //}
}

student.prototype.aprobarCurso = function(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
}
//instancia del prototype
const juanita = new student(
    "juanita alejandra",
    15,
    [
        "curso de ingles",
        "curso de angular"
    ],
);

// prototipos con la sintaxis de clases

class student2 {
    constructor({
        name, 
        age, 
        email,
        cursosAprobados,
    }){
        this.name = name;
        this.age = age;
        this.email = email,
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}

const miguelito = new student2({
    name: "miguel",
    age: 26,
    
}
);
