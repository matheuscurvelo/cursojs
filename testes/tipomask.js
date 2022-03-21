class TipoMask {
    get tipoContratanteMask() { return    1; };
    get tipoResponsavelFinanceiroMask()  { return 2; };
    get tipoRepLegalMask()    { return    4; };
    get tipoTitularMask()     { return    8; };
    get tipoDependenteMask()  { return    0x10; };

}

const tm = new TipoMask()

console.log(tm.tipoDependenteMask);