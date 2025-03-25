function showRestaurantDetails(name, image, description, address, category, hours, price) {
    const restaurantHTML = `
        <div id="restaurant-details" class="container-fluid p-5 bg-white text-dark">
            <button id="backToMenu" class="btn btn-warning main-menu-btn">Main Menu</button>
            <div class="row">
                <div class="col-md-6">
                    <img src="${image}" class="restaurant-image img-fluid rounded" alt="${name}">
                </div>
                <div class="col-md-6">
                    <h2 class="restaurant-name text-danger">${name}</h2>
                    <p class="restaurant-address"><strong>Location:</strong> ${address}</p>
                    <p><strong>Category:</strong> ${category}</p>
                    <p><strong>Open:</strong> ${hours}</p>
                    <p><strong>Price:</strong> ${price}</p>
                    <p>${description}</p>
                </div>
            </div>
        </div>
    `;

    document.body.innerHTML = restaurantHTML;

    document.getElementById('backToMenu').addEventListener('click', function() {
        location.reload();
    });
}

document.querySelectorAll('.restaurant-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.overlay').style.opacity = '1';
    });
    card.addEventListener('mouseleave', function() {
        this.querySelector('.overlay').style.opacity = '0';
    });
    card.addEventListener('click', function() {
        showRestaurantDetails(
            this.dataset.name,
            this.dataset.image,
            this.dataset.description,
            this.dataset.address || "N/A",
            this.dataset.category || "N/A",
            this.dataset.hours || "N/A",
            this.dataset.price || "N/A"
        );
    });
});
