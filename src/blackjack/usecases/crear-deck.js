import _ from "underscore";


/**
 * Esta Funcion crea un nuevo deck
 * @param {array<String>} tiposDeCarta ['C','D','H','S']
 * @param {array<String>} tiposEspeciales ['A','J','Q','K']
 * @returns {array<String>} retorna un deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if ( !tiposDeCarta) throw new Error('Tipos de cartas son obligatorio')
    if ( tiposDeCarta.length === 0) throw new Error('Tipos de cartas tiene que ser un arreglo de string')
    let deck = []

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}


