const campoNome = document.getElementById('nome');
const campoEmail = document.getElementById('email');
const BotaoSalvar = document.getElementById('BotaoSalvar');

BotaoSalvar.addEventListener('click', () => {
    // Captura os valores digitados pelo usuário
    const nome = campoNome.value;
    const email = campoEmail.value;
    // Validação simples para garantir que os campos não estão vazios
    if (!nome || !email) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    // 2. Define o conteúdo do arquivo de texto
    const conteudo = `Nome: ${nome}\nEmail: ${email}`;
    // 3. Cria um arquivo (Blob) com o conteúdo em formato de texto simples
    const blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' });
    // 4. Cria um link temporário para simular o download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'dados_usuario.txt'; // Nome do arquivo que será baixado
    // 5. Aciona o clique no link e remove o elemento da memória
    link.click();
    URL.revokeObjectURL(link.href);
});
