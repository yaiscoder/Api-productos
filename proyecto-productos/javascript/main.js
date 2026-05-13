
import { getProducts, getCategories } from './api.js';
import { renderProducts, renderCategories } from './ui.js';
import { renderPagination } from './pagination.js';

class ProductApp {
    constructor() {
        this.currentPage = 1;
        this.productsPerPage = 9;

        this.init();
    }

    async init() {
        await this.loadCategories();
        await this.loadProducts();
    }

    async loadProducts() {
        const skip = (this.currentPage - 1) * this.productsPerPage;

        const data = await getProducts(this.productsPerPage, skip);

        this.totalPages = Math.ceil(data.total / this.productsPerPage);
        this.products = data.products;

        this.render();
    }

    async loadCategories() {
        const data = await getCategories();

        const container = document.getElementById('category-list');
        renderCategories(container, data);
    }

    render() {
        renderProducts(
            document.getElementById('card-products'),
            this.products
        );

        renderPagination(
            document.getElementById('pagination'),
            this.currentPage,
            this.totalPages,
            () => this.prevPage(),
            () => this.nextPage()
        );
    }

    prevPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.loadProducts();
        }
    }

    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.loadProducts();
        }
    }
}

const app = new ProductApp();