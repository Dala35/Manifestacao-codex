const chatbox = document.getElementById('chatbox');
const userInputElement = document.getElementById('userInput');
const themeToggle = document.getElementById('themeToggle');
let sessionData = {};
function showMessage(message, sender = "codex") {
    const msgElement = document.createElement("div");
    msgElement.textContent = `${sender.toUpperCase()}: ${message}`;
    msgElement.classList.add(sender);
    chatbox.appendChild(msgElement);
    chatbox.scrollTop = chatbox.scrollHeight;  // Scroll to the bottom
}
function processInput() {
    const input = userInputElement.value.trim();
    if (input === "") return;
    showMessage(`Você: ${input}`, "user");
    // Resposta baseada no contexto
    let response = "";
    if (sessionData['propósito']) {
        response = "CÓDEX: Você já está buscando seu propósito. Continue essa jornada, pois você está no caminho certo.";
    } else {
        response = "CÓDEX: O propósito está dentro de você. O que você busca no momento?";
    }
    sessionData['propósito'] = input.toLowerCase().includes("propósito");
    setTimeout(() => showMessage(response, "codex"), 1500);
    userInputElement.value = "";
}
function askCodex(topic) {
    let response;
    if (topic === "propósito") {
        response = "CÓDEX: O seu propósito está sendo revelado, mas depende de suas ações agora.";

    } else if (topic === "mistério") {

        response = "CÓDEX: O mistério está à sua volta, aguardando o momento certo para ser descoberto.";
    }

    showMessage(response, "codex");
}
themeToggle.addEventListener('click', () => {

    document.body.classList.toggle('light-theme');
});
// Mensagem inicial

document.addEventListener("DOMContentLoaded", () => {

    showMessage("CÓDEX: Bem-vindo, explorador. Estamos prestes a começar uma jornada de descoberta. O que deseja aprender hoje?", "codex");
});

