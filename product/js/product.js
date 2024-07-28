document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button button');
    const products = document.querySelectorAll('.product .content');

    let selectedCategory = null;

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.getAttribute('data-category');

            if (selectedCategory === category) {
                selectedCategory = null;
                clearFilter();
                clearSelected(buttons);
            } else {
                selectedCategory = category;
                filterProducts(category);
                clearSelected(buttons);
                this.classList.add('selected');
            }
        });
    });

    function filterProducts(category) {
        products.forEach(product => {
            const productCategory = product.getAttribute('data-category');
            if (productCategory === category) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    function clearFilter() {
        products.forEach(product => {
            product.style.display = 'block';
        });
    }

    function clearSelected(buttons) {
        buttons.forEach(button => {
            button.classList.remove('selected');
        });
    }
});

