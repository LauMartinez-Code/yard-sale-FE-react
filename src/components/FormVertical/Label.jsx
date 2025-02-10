/**
 * @component Componente Label
 * @param {Object} props - Props del componente.
 * @param {string} props.label - Texto de la etiqueta.
 * @param {string} [props.errorMessage] - Mensaje de error (opcional).
 * @param {string} [props.helpText] - Texto de ayuda (opcional).
 * @param {React.ReactNode} props.children - Elementos hijos que se renderizarán dentro del `<label>`.
 * @returns {JSX.Element} Elemento Label.
 * @example
 * <Label 
 *   label="Nombre"
 *   errorMessage="Este campo es obligatorio" >
 *   <input type="text" required />
 * </Label>
 */
const Label = ({label, errorMessage, helpText, children}) => {
    return (
        <label className="form-vertical__label">
            {label}
            {children}
            {(errorMessage || helpText) && 
                <small className={errorMessage ? "form-vertical__invalid-feedback" : "form-vertical__text-small"}>
                    {errorMessage || helpText}
                </small>
            }
        </label>
    )
}

export default Label;