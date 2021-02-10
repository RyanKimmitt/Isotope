//Event function
function calc() {
    //Input
    let AtomicNumber = +proton.value;
    let Nueculas = +mass.value;
    let ElementSymbol = symbol.value;

    //Process & output
    modify.innerHTML = isotopeFormula(AtomicNumber, Nueculas, ElementSymbol);

}

//Calculator Brain
function isotopeFormula(AtomicMass, Nueculas, ElementSymbol) {
    let No = (Nueculas - AtomicMass);
    return  `Your final isotope of ${ElementSymbol} - ${Nueculas} is ${No} Nuetrons`;
}