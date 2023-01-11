/**
 * Verifica los checks que han sido seleccionados
 * @returns retorna la cantidad de checks que se hicieron
 */
export const verifyChecks = ()=>{
  const $generator_checks_selected = document.querySelectorAll(".generator-check > .isSelected");
  return $generator_checks_selected.length;
}