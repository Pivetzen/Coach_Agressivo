async function responder() {
    const input = document.getElementById('pergunta').value;
    const respostaDiv = document.getElementById('resposta');
    
    if (!input) return;
    respostaDiv.innerText = "Pensando em como te xingar...";

    // URL do seu Google Apps Script
    const url = "https://script.google.com/macros/s/AKfycbyNwOecawak24Xquasd4ts5Om3dHpVlamufRgF1MgQYpMfMDFxhvm3sfAR7DWCU1QBUAA/exec";

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ pergunta: input })
        });

        const data = await response.json();
        respostaDiv.innerText = data.choices[0].message.content;
    } catch (error) {
        respostaDiv.innerText = "Erro ao conectar. Tenta de novo, seu inútil.";
    }
}
