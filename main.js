async function cardproducts (){
    const catalog = document.getElementById('card-products');

    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    console.log(data)

    for (let product of data.products){

        const {title, category, thumbnail, price} = product

        catalog.innerHTML += `<div class="products-grid" id="products-container">
                <div class="card">
                    <img src="${thumbnail}" alt="${title}" class="card-img">
                    <div class="card-category">${category}</div>
                    <div class="card-title">${title}</div>
                    <div class="card-price">$${price}</div>
                    <button class="btn-primary" style="width:100%; margin-top:15px; font-size:0.8rem;">
                        Agregar al carrito
                    </button>
                </div>
            </div>`
    }
    
}

cardproducts();

async function categoryList (){
    const category = document.getElementById('category-list');

    const response1 = await fetch('https://dummyjson.com/products/category-list')
    const data1 = await response1.json();
    console.log(data1)

    for (let cate of data1){
        category.innerHTML += `<div class="filter-item">${cate}</div>`
    }
}
categoryList()

// async function searchCategory (){
//     const search = document.getElementById('card-products');

//     const response2 = await fetch('https://dummyjson.com/products/category/'${category});
// }