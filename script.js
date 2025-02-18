// Liste des produits (on pourrait charger ça depuis une base de données plus tard)
const products = [
    { id: 1, name: "Hoodie Noir Brodé", price: 89, img: "hoodie-noir.jpg", desc: "Hoodie oversized noir avec broderie minimaliste." },
    { id: 2, name: "T-shirt Oversized Vert Olive", price: 49, img: "tshirt-olive.jpg", desc: "T-shirt ample en coton bio, parfait pour un look streetwear." },
    { id: 3, name: "Jogging Gris Confort", price: 69, img: "jogging-gris.jpg", desc: "Jogging ajusté ultra confortable, idéal pour le quotidien." },
    { id: 4, name: "Casquette Noire Logo", price: 39, img: "casquette-noire.jpg", desc: "Casquette noire avec le logo brodé, un classique intemporel." }
];

// Récupérer l'ID du produit depuis l'URL
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));
const product = products.find(p => p.id === productId);

// Afficher les infos du produit sur la page
if (product) {
    document.getElementById("product-img").src = product.img;
    document.getElementById("product-img").alt = product.name;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = product.price + "€";
    document.getElementById("product-desc").textContent = product.desc;

    // Ajouter au panier
    document.getElementById("add-to-cart").addEventListener("click", function() {
        addToCart(product);
    });
}

// Fonction pour ajouter un produit au panier
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Produit ajouté au panier !");
}