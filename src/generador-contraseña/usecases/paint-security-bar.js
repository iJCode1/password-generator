/**
 * Cambia la imagen del la barra de seguridad según sea el caso
 * @param {HTMLImageElement} length
 */
export const paintSecurityBar = (length) => {
  const $security_icon = document.querySelector(".security-icon");

  if (length >= 0 && length <= 4) {
    switch (length) {
      case 0:
        $security_icon.style.backgroundImage =
          "url('./assets/icons/level-0.svg')";
        break;
      case 1:
        $security_icon.style.backgroundImage =
          "url('./assets/icons/level-1.svg')";
        break;
      case 2:
        $security_icon.style.backgroundImage =
          "url('./assets/icons/level-2.svg')";
        break;
      case 3:
        $security_icon.style.backgroundImage =
          "url('../assets/icons/level-3.svg')";
        break;
      case 4:
        $security_icon.style.backgroundImage =
          "url('../assets/icons/level-4.svg')";
        break;
    }
  }
};
