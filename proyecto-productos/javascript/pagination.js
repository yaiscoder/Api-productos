
export function renderPagination(container, currentPage, totalPages, onPrev, onNext) {
    container.innerHTML = `
        <button class="page-btn" ${currentPage === 1 ? 'disabled' : ''}>←</button>
        <button class="page-btn active">${currentPage}</button>
        <button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''}>→</button>
    `;

    const buttons = container.querySelectorAll('button');

    buttons[0].onclick = onPrev;
    buttons[2].onclick = onNext;
}