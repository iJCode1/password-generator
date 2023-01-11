/**
 * Crea una alerta y la muestra en el documento
 * @param {String} text Ejemplo: "Contraseña copiada al portapapeles."
 */
export const createHTMLAlert = (text = "") => {
  const div = document.createElement("div");
  const i = document.createElement("i");
  const p = document.createElement("p");

  if (!document.querySelector(".is-error")) {
    div.classList.add("alert-copy", "is-error");
    i.classList.add("alert-icon");
    p.classList.add("alert-paragraph");

    p.textContent = text;

    div.append(i, p);

    document.body.append(div);

    setTimeout(() => {
      document.body.removeChild(div);
    }, 3000);
  }
};
