/** Retorna un string con formato currency.
 *
 * Utiliza "." como separador de miles y "," para decimales.
**/
export const toCurrencyFormat = value => {
    if (value != null && value != undefined) {
        if (value === 0) {
            return '$ 0,00';
        }
        
        return value.toLocaleString('es-ar', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 2
        });
    }
}


/** Establece un ellipsis ("`...`") sobre el contenido de texto de un elemento dado,
 *  cuando la cantidad de caracteres es mayor a `45` */
export const setTextEllipsis = (element, text) => {
    if(text.length > 45) {
        element.setAttribute('title', text);
        element.textContent = text.substring(0,41) + '...';
    }
    else {
        element.textContent = text;
    }
};