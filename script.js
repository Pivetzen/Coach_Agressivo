async function responder() {
    const input = document.getElementById('pergunta');
    const btn = document.getElementById('btn-perguntar');
    const respostaContainer = document.getElementById('resposta-container');
    const respostaDiv = document.getElementById('resposta');
    
    // Impede o envio se estiver vazio ou já estiver carregando
    if (!input.value.trim() || btn.classList.contains('loading')) {
        return;
    }

    // --- Estado de Carregamento ---
    btn.classList.add('loading');
    btn.firstElementChild.innerText = "Pensando em como te xingar...";
    
    // Esconde resposta anterior se houver
    respostaContainer.classList.add('hidden');
    
    // URL do seu Google Apps Script (Proxy)
    const url = "https://script.google.com/macros/s/AKfycbyNwOecawak24Xquasd4ts5Om3dHpVlamufRgF1MgQYpMfMDFxhvm3sfAR7DWCU1QBUAA/exec"; // <--- COLOQUE SUA URL AQUI

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ pergunta: input.value })
        });

        if (!response.ok) throw new Error('Falha na API');

        const data = await response.json();
        
        // --- Exibir Resposta com Animação ---
        respostaDiv.innerText = data.choices[0].message.content;
        
        // Remove 'hidden' para iniciar a transição CSS
        respostaContainer.classList.remove('hidden');

    } catch (error) {
        respostaDiv.innerText = "Erro ao conectar. A API cansou da sua cara. Tenta de novo, seu inútil.";
        respostaContainer.classList.remove('hidden');
    } finally {
        // --- Restaurar Estado do Botão ---
        btn.classList.remove('loading');
        btn.firstElementChild.innerText = "PERGUNTAR";
    }
}
