function addPersonalMessage() {
    var personalMessage = prompt("Escribe tu mensaje personalizado:");
    if (personalMessage !== null && personalMessage !== "") {
        var greetingCard = document.getElementById("greetingCard");
        var messageParagraph = document.createElement("p");
        messageParagraph.textContent = personalMessage;
        greetingCard.appendChild(messageParagraph);
    }
}
