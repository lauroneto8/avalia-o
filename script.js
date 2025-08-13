document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("cadastroForm");
    const nomeInput = document.getElementById("nome");
    const sobrenomeInput = document.getElementById("sobrenome");
    const dataNascimentoInput = document.getElementById("dataNascimento");
    const sexoInput = document.getElementById("sexo");
    const termosInput = document.getElementById("termos");

    form.addEventListener("submit", function(event) {
        let isValid = true;

        if (nomeInput.value.trim() === "") {
            showErrorMessage(nomeInput, "Por favor, digite seu nome.");
            isValid = false;
        } else {
            clearErrorMessage(nomeInput);
        }

        if (sobrenomeInput.value.trim() === "") {
            showErrorMessage(sobrenomeInput, "Por favor, digite seu sobrenome.");
            isValid = false;
        } else {
            clearErrorMessage(sobrenomeInput);
        }

        if (dataNascimentoInput.value === "") {
            showErrorMessage(dataNascimentoInput, "Por favor, selecione sua data de nascimento.");
            isValid = false;
        } else {
            clearErrorMessage(dataNascimentoInput);
        }

if (sexoInput.value === "") {
    showErrorMessage(sexoInput, "Por favor, selecione seu sexo.");
    isValid = false;
} else {
    clearErrorMessage(sexoInput);
}

if (!termosInput.checked) {
    showErrorMessage(termosInput, "Você deve aceitar os termos de uso.");
    isValid = false;
} else {
    clearErrorMessage(termosInput);
}

if (!isValid) {
    event.preventDefault();
}
    });

function showErrorMessage(input, message) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = message;
    errorElement.style.display = "block";
}

function clearErrorMessage(input) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = "";
    errorElement.style.display = "none";
}
});