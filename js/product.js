// js/products.js
const products = [
  { name: "Creamy Pasta", price: 12, image: "img/Quick Pasta Recipes.jpg", description: "Rich & creamy Italian pasta made fresh." },
  { name: "Grilled Salmon", price: 18, image: "img/Seafood.jpg", description: "Perfectly grilled salmon with herbs." },
  { name: "Chocolate Cake", price: 8, image: "img/Desserts.jpg", description: "Soft & moist chocolate layered cake." },
  { name: "Spicy Chicken Curry", price: 14, image: "img/Chicken Curry.jpg", description: "Tender chicken cooked in rich spices." },
  { name: "Fresh Veggie Salad", price: 9, image: "img/Veggie Salad.jpg", description: "A healthy mix of fresh vegetables." },
  { name: "Juicy Beef Steak", price: 22, image: "img/Beef Steak.jpg", description: "Grilled to perfection with a smoky flavor." }
];

const productGrid = document.getElementById("product-grid");
products.forEach(product => {
  const card = document.createElement("div");
  card.className = "bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="w-full h-56 object-cover">
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2">${product.name}</h3>
      <p class="text-gray-600 mb-4">${product.description}</p>
      <div class="flex justify-between items-center">
        <span class="text-lg font-bold text-primary">$${product.price}</span>
        <button class="add-to-cart bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition">Add to Cart</button>
      </div>
    </div>`;
  productGrid.appendChild(card);
});
