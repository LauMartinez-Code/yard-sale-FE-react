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


/** Concatena un ellipsis ("`...`") al final de `text`
 *  cuando la cantidad de caracteres es mayor a `45` */
export const setTextEllipsis = (text) => {
    if(text.length > 45)
        return text.substring(0,41) + '...';

    return text;
};

/** Agrega la clase `.submitted` al primer fomulario dentro de `<main>`
 *  para frozar los mensajes de validacion establecidos en los campos que correspondan */
export const onTrySubmitMainForm = () => {
    document.querySelector('main form button[type="submit"]').addEventListener('click', () => document.querySelector('main form').classList.add('submitted'), { once: true } );
};