/**
 * Generar una contraseña
 * @param {Number} length 
 * @returns retorna la contraseña generada
 */
export const generatePassword = (length) => {
  if (!length)
    throw new Error("Se debe especificar la longitud de la constraseña");

  const numbers = "0123456789";
  const capitalLetters = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnñopqrstuvwxyz";
  const symbols = "@!^$*%#&()[]{}";
  let characters = "";
  let password = "";
  const $generator_checks_selected = document.querySelectorAll(
    ".generator-check > .isSelected"
  );

  $generator_checks_selected.forEach((el) => {
    if (el.dataset.check == "capital") {
      characters += capitalLetters;
    } else if (el.dataset.check == "lowercase") {
      characters += lowercaseLetters;
    } else if (el.dataset.check == "numbers") {
      characters += numbers;
    } else if (el.dataset.check == "symbols") {
      characters += symbols;
    }
  });

  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return password;
};
