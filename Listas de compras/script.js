// ===== Cria container principal =====
const container = document.createElement('div');
container.id = 'lista-container';
document.body.appendChild(container);

// ===== Estilos direto no container =====
container.style.backgroundColor = '#e8e5c8ff' // cor de fundo
container.style.border = '2px solid #ccc';  // borda
container.style.borderRadius = '10px';      // cantos arredondados
container.style.padding = '20px';           // epaçamento interno
container.style.maxWidth = '400px';               // largura máxima
container.style.margin = '20px auto';             // centraliza horizontalmente
container.style.boxShadow = '0 4px 10px rgba(0,0,0,0.5)'; //sombra

// ===== Cria título =====
const título = document.createElement('h1');
título.textContent = 'Lista de Compras';
título.style.textAlign = 'center';
título.style.marginBottom = '15px',
container.appendChild(título);

// ===== Cria input de texto =====
const inputItem = document.createElement('input');
inputItem.type = 'text';
inputItem.placeholder = 'Digite um item';
inputItem.style.textAlign = 'center';
inputItem.style.width = '70%';
inputItem.style.padding = '6px'
container.appendChild(inputItem);

// ===== Cria botão de adicionar =====
const btnAdd = document.createElement('button');
btnAdd.textContent = 'Adicionar';
btnAdd.style.marginLeft = '10px';
btnAdd.style.padding = '6px 12px';
btnAdd.style.cursor = 'pointer';
btnAdd.style.borderRadius = '5px';
container.appendChild(btnAdd);

// ===== Cria Lista ordenada =====
const lista = document.createElement('ol');
lista.style.marginTop = '15px';
lista.style.paddingLeft = '20px';
container.appendChild(lista);

// ===== Função para adicionar item =====
function adicionarItem() {
    const valor = inputItem.value.trim();
    if (valor !== '') {
        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between' // texto e lixeira separados
        li.style.alignItems = 'center';
        li.style.padding = '6px 0';
        li.style.borderBottom = '1px solid #2a2a2aff';
        li.style.fontFamily = 'Arial, sans-serif';
        li.style.fontSize = '16px'
       
        // texto do item
        const span = document.createElement('span');
        span.textContent = valor;
    }
}

// Evento do botão
btnAdd.addEventListener('click', adicionarItem);

// Evento para tecla Enter no input
inputItem.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        adicionarItem();
    }

    // Libera o objeto URL
    URL.revokeObjectURL(url);
});