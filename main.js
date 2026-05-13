let currentPage = 1;
let currentCategory = 'all';
const productsPerPage = 9;


async function cardproducts (page){
    const catalog = document.getElementById('card-products');

    const skip = (page - 1) * productsPerPage;

    let url = '';
    if(currentCategory === 'all'){
        url = `https://dummyjson.com/products?limit=${productsPerPage}&skip=${skip}`;
    }else{
        url = `https://dummyjson.com/products/category/${currentCategory}?limit=${productsPerPage}&skip=${skip}`;
    }
    
    const response = await fetch(url);

    const data = await response.json();
    console.log(data)

    catalog.innerHTML = '';

    for (let product of data.products){

        const {title, category, thumbnail, price} = product

        catalog.innerHTML += `<div>
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
    
    createPagination(data.total);
}

function createPagination(totalProducts) {

    const pagination = document.getElementById('pagination');

    pagination.innerHTML = '';

    const totalPages = Math.ceil(totalProducts / productsPerPage);

    pagination.innerHTML += `<button class="page-btn" onclick="previousPage()" ${currentPage === 1 ? 'disabled' : ''}>←</button>
        <button class="page-btn active">${currentPage}</button>
        <button class="page-btn" onclick="nextPage(${totalPages})" ${currentPage === totalPages ? 'disabled' : ''}>→</button>`;
}

function previousPage(){

    if(currentPage > 1){
        currentPage--;
        cardproducts(currentPage);
    }
}

function nextPage(totalPages){

    if(currentPage < totalPages){
        currentPage++;
        cardproducts(currentPage);
    }
}

function changeCategory(category){

    currentCategory = category;
    currentPage = 1;

    cardproducts(currentPage);
}


cardproducts(currentPage);

async function categoryList (){
    const category = document.getElementById('category-list');

    const response1 = await fetch('https://dummyjson.com/products/category-list')
    const data1 = await response1.json();
    console.log(data1)

    for (let cate of data1){
        category.innerHTML += `<div class="filter-item" onclick="changeCategory('${cate}')">${cate}</div>`
    }
}

categoryList()