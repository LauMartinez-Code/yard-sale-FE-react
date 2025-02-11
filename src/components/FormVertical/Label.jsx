/**
 * @component Componente Label
 * @param {Object} props - Props del componente.
 * @param {string} props.text - Texto de la etiqueta.
 * @param {string} [props.errorMessage] - Mensaje de error (opcional).
 * @param {string} [props.helpText] - Texto de ayuda (opcional).
 * @param {React.ReactNode} props.children - Elementos hijos que se renderizarán dentro del `<label>`.
 * @returns {JSX.Element} Elemento Label.
 * @example
 * <Label 
 *   text="Nombre"
 *   errorMessage="Este campo es obligatorio" >
 *   <input type="text" required />
 * </Label>
 */
const Label = ({text, errorMessage, helpText, children}) => {
    return (
        <label className="form-vertical__label">
            {text}
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