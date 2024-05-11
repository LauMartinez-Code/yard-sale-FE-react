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