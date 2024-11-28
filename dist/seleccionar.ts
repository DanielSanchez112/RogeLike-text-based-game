// Obtener todas las tarjetas
const cards = document.querySelectorAll('.card');

// Función para manejar la selección de las tarjetas
function handleCardSelection(event: Event): void {
    // Desmarcar la tarjeta previamente seleccionada
    const selectedCard = document.querySelector('.selected');
    if (selectedCard) {
        selectedCard.classList.remove('selected');
    }

    // Marcar la tarjeta seleccionada
    const clickedCard = event.currentTarget as HTMLElement;
    clickedCard.classList.add('selected');
}

// Agregar el evento click a cada tarjeta
cards.forEach(card => {
    card.addEventListener('click', handleCardSelection);
});
