import { crearCartaHtml, pedirCarta,valorCarta } from "./";

/**
 * Turno de la computadora
 * @param {Number} puntosMinimos puntos que la ia necesita para ganar
 * @param {HTMLElement} puntosHTML  elementos HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora  elementos HTML para mostrar los puntos
 * @param {Array<String>} deck 
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora,deck=[] ) => {
    if (!puntosMinimos) throw new Error('Los puntos minimos son obligatorios');
    if (!deck) throw new Error('El deck es obligatorios');
    if (!puntosHTML) throw new Error('El argumento  puntoHTML es obligatorios');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHtml(carta)
        

        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}