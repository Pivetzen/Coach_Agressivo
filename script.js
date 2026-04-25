function responder() {
    const respostas = [
        "Domingo e tu quer acordar cedo? Ah, vá tomar no cu. Tenta se levantar e já ir tomar uma ducha, ou faz uma caminhada rápida para aquecer o corpo.",
        "Tá com preguiça de estudar? Se continuar assim, vai acabar morrendo na merda. Senta essa bunda na cadeira agora e estuda por 30 minutos sem olhar o celular!",
        "Não quer treinar? Olha que corpo de bosta tu tem. Levanta, faz 20 flexões agora ou aceita que você é um fracassado.",
        "Quer parar de procrastinar? Esquece a rede social, para de ser um inútil e começa a tarefa principal agora. O mundo não espera ninguém, seu lixo."
    ];

    const respostaDiv = document.getElementById('resposta');
    const aleatoria = respostas[Math.floor(Math.random() * respostas.length)];
    
    respostaDiv.innerText = aleatoria;
}
