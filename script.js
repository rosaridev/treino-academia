script.js
const botoesConcluir = document.querySelectorAll(' .btn-concluior');
botoesConcluir.forEach(botao => {
    botao.addEventListener('click', () => {
        const card = botao.parentElement;
        card.classList.toggle('concluido');
        if (card.classList.contains('concluido')) {
            botao.textContent = '✅ Treino Concluído!';
            botao.style.backgroundColor = '#888';
        } else{
            botao.textContent = 'concluido ✅';
            botao.style.backgroundColor = '#4CAF50';
        }
    });
});

const checkboxe = document.querySelectorAll('.check-treino');
checkboxe.forEach(checkboxe => {
    checkboxe.addEventListener('change', () => {
        const li = checkboxe.closest('li');
        if (checkboxe.checked) {
            li.classList.add('checked');
        } else {
            li.classList.remove('checked');
        }
    });
});