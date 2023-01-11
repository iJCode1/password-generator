/**
 * Recibe el Slider del generador de contraseñas
 * @param {HTMLElement} slider
 * @returns retorna el valor del slider
 */
export const verifyLength = (slider) => {
  if (!slider) throw new Error("El atributo 'slider' es necesario");

  return slider.value;
};
