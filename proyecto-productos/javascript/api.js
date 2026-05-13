
export async function getProducts(limit, skip) {
    const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    return await response.json();
}

export async function getCategories() {
    const response = await fetch(
        "https://dummyjson.com/products/category-list"
    );
    return await response.json();
}