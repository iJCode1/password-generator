import { clearField } from "./usecases/clear-field";
import { createHTMLAlert } from "./usecases/create-alert";
import { generatePassword } from "./usecases/generate-password";
import { paintSecurityBar } from "./usecases/paint-security-bar";
import { verifyChecks } from "./usecases/verify-checks";
import { verifyLength } from "./usecases/verify-length";

const $generator_checks = document.querySelectorAll(".generator-check");
const $generator_button = document.querySelector(".generator-button");
const $generator_range = document.querySelector("#generator-range");
const $generator_number = document.querySelector(".generator-number");
const $copy_text = document.querySelector(".copy-text");
const $copy_icon = document.querySelector(".copy-icon");
const $alert = document.querySelector(".alert-copy");

$generator_range.addEventListener("input", () => {
  let value = $generator_range.value * 3.33;

  $generator_number.textContent = $generator_range.value;
  $generator_range.style.backgroundSize = `${value}% 100%`;
  $generator_range.style.backgroundImage = `linear-gradient(var(--blue), var(--blue))`;
});

$generator_button.addEventListener("click", () => {
  clearField($copy_text);

  let sliderValue = verifyLength($generator_range);
  let checksSelected = verifyChecks($generator_checks);

  if (sliderValue < 6) {
    createHTMLAlert("Debe seleccionar una longitud de al menos 6 caracteres");
    return;
  }

  if (checksSelected === 0) {
    createHTMLAlert(
      "Debe seleccionar al menos una forma de generar la contraseña"
    );
    return;
  }

  $copy_text.value = generatePassword(verifyLength($generator_range));
});

$copy_icon.addEventListener("click", () => {
  if (!$copy_text.value) {
    createHTMLAlert("No se ha generado una contraseña que copiar");
  }

  $copy_text.select();
  document.execCommand("copy");

  if ($alert.classList.contains("is-inactive")) {
    $alert.classList.remove("is-inactive");
    setTimeout(() => {
      $alert.classList.add("is-inactive");
    }, 3000);
  }
});

$generator_checks.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    checkbox.firstElementChild.classList.toggle("isSelected");
    paintSecurityBar(verifyChecks($generator_checks));
  });
});
