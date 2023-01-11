/**
 * Limpia el input enviado como argumento
 * @param {HTMLElement} field 
 */
export const clearField = (field) => {

  if(!field) throw new Error("Se requiere el campo")

  field.value = "";
};
