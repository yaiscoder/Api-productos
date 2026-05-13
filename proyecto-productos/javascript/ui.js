
export function renderProducts(container, products) {
    container.innerHTML = '';

    for (let product of products) {
        const { title, category, thumbnail, price } = product;

        container.innerHTML += `
            <div class="card">
                <img src="${thumbnail}" class="card-img">
                <div class="card-category">${category}</div>
                <div class="card-title">${title}</div>
                <div class="card-price">$${price}</div>
                <button class="btn-primary" style="width:100%; margin-top:15px; font-size:0.8rem;">
                    Agregar al carrito
                </button>
            </div>
        `;
    }
}

export function renderCategories(container, categories) {
    container.innerHTML = '';

    for (let cat of categories) {
        container.innerHTML += `<div class="filter-item">${cat}</div>`;
    }
}