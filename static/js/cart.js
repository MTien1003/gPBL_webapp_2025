
// Ingredient pricing data (in Japanese Yen) - Same as checkout
const ingredientPrices = {
    '1 lb fresh rice noodles (pho noodles)': 520,
    'Thinly sliced raw beef': 1340,
    'Bean sprouts': 295,
    'Thai basil leaves': 370,
    'Cilantro': 266,
    'Mint leaves': 341,
    'Lime wedges': 147,
    'Sliced jalapeños': 222,
    'Hoisin sauce': 594,
    'Sriracha sauce': 445,
    // Additional ingredients for other dishes
    'Extra cilantro': 266,
    'Extra jalapeños': 222,
    'Pickled vegetables': 185,
    'Soy sauce': 148,
    'Fresh lettuce leaves': 222,
    'Fresh herbs (mint, cilantro)': 296,
    'Nuoc cham dipping sauce': 370,
    'Crushed peanuts': 259,
    'Fried shallots': 185,
    'Peanut dipping sauce': 370,
    'Fresh herbs for garnish': 296,
    'Fresh cucumber': 148,
    'Fresh tomatoes': 185,
    'Nuoc mam cham sauce': 370,
    'Fresh greens': 222,
    'Chili sauce': 222,
    'Extra coconut milk': 296,
    'Extra crushed ice': 74,
    'Toasted sesame seeds': 185,
    'Extra condensed milk': 222,
    'Extra herbs': 296,
    'Extra peanuts': 259,
    'Chili flakes': 111,
    'Lime wedges': 147,
    'Prawn crackers': 185,
    'Chili slices': 111,
    'Extra bean sprouts': 148,
    'Lettuce leaves': 222,
    'Fresh herbs': 296,
    'Nuoc cham sauce': 370,
    'Scallion oil': 185,
    'Fresh herbs': 296
};

// Default ingredient images
const ingredientImages = {
    '1 lb fresh rice noodles (pho noodles)': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=100',
    'Thinly sliced raw beef': 'https://images.unsplash.com/photo-1448907503123-67254d59ca4f?w=100',
    'Bean sprouts': 'https://images.unsplash.com/photo-1588767768733-d0a9ae028a6d?w=100',
    'Thai basil leaves': 'https://images.unsplash.com/photo-1618375569909-3c8616cf263d?w=100',
    'Cilantro': 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=100',
    'Mint leaves': 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=100',
    'Lime wedges': 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=100',
    'Sliced jalapeños': 'https://images.unsplash.com/photo-1583392439853-47eb2290c6bb?w=100',
    'Hoisin sauce': 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=100',
    'Sriracha sauce': 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=100',
    // Default image for other ingredients
    'default': 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=100'
};

// Load cart items from localStorage
function loadCartItems() {
    const selectedIngredients = JSON.parse(localStorage.getItem('selectedIngredients')) || [];
    const tableBody = document.getElementById('cart-table-body');

    if (selectedIngredients.length === 0) {
        tableBody.innerHTML = `
                    <tr>
                        <td colspan="6" class="text-center py-4">
                            <p class="mb-3">Your cart is empty</p>
                            <a href="index.html" class="btn btn-primary rounded-pill">Continue Shopping</a>
                        </td>
                    </tr>
                `;
        return;
    }

    let subtotal = 0;
    tableBody.innerHTML = '';

    selectedIngredients.forEach((ingredient, index) => {
        const price = ingredientPrices[ingredient] || 445; // Default price in Yen
        const image = ingredientImages[ingredient] || ingredientImages['default'];
        const total = price * 1; // Quantity is 1 by default
        subtotal += total;

        const row = document.createElement('tr');
        row.innerHTML = `
                    <th scope="row">
                        <div class="d-flex align-items-center">
                            <img src="${image}" class="img-fluid me-5 rounded-circle" style="width: 80px; height: 80px; object-fit: cover;" alt="${ingredient}">
                        </div>
                    </th>
                    <td>
                        <p class="mb-0 mt-4">${ingredient}</p>
                    </td>
                    <td>
                        <p class="mb-0 mt-4">¥${price}</p>
                    </td>
                    <td>
                        <div class="input-group quantity mt-4" style="width: 100px;">
                            <div class="input-group-btn">
                                <button class="btn btn-sm btn-minus rounded-circle bg-light border" onclick="updateCartQuantity(${index}, -1)">
                                    <i class="fa fa-minus"></i>
                                </button>
                            </div>
                            <input type="text" class="form-control form-control-sm text-center border-0" value="1" id="cart-qty-${index}" readonly>
                            <div class="input-group-btn">
                                <button class="btn btn-sm btn-plus rounded-circle bg-light border" onclick="updateCartQuantity(${index}, 1)">
                                    <i class="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p class="mb-0 mt-4" id="cart-item-total-${index}">¥${total}</p>
                    </td>
                    <td>
                        <button class="btn btn-md rounded-circle bg-light border mt-4" onclick="removeCartItem(${index})">
                            <i class="fa fa-times text-danger"></i>
                        </button>
                    </td>
                `;
        tableBody.appendChild(row);
    });

    updateCartTotal(subtotal);
}

// Update quantity in cart
function updateCartQuantity(index, change) {
    const qtyInput = document.getElementById(`cart-qty-${index}`);
    let currentQty = parseInt(qtyInput.value);
    let newQty = currentQty + change;
    if (newQty < 1) newQty = 1;
    qtyInput.value = newQty;

    // Update total for this item
    const selectedIngredients = JSON.parse(localStorage.getItem('selectedIngredients')) || [];
    const ingredient = selectedIngredients[index];
    const price = ingredientPrices[ingredient] || 445;
    const itemTotal = price * newQty;
    document.getElementById(`cart-item-total-${index}`).textContent = `¥${itemTotal}`;

    // Recalculate subtotal and update total immediately
    let subtotal = 0;
    selectedIngredients.forEach((_, i) => {
        const qtyElement = document.getElementById(`cart-qty-${i}`);
        if (qtyElement) {
            const qty = parseInt(qtyElement.value);
            const itemPrice = ingredientPrices[selectedIngredients[i]] || 445;
            subtotal += itemPrice * qty;
        }
    });
    updateCartTotal(subtotal);
}

// Remove item from cart
function removeCartItem(index) {
    let selectedIngredients = JSON.parse(localStorage.getItem('selectedIngredients')) || [];
    selectedIngredients.splice(index, 1);
    localStorage.setItem('selectedIngredients', JSON.stringify(selectedIngredients));
    loadCartItems(); // Reload cart display
}

// Update cart totals
function updateCartTotal(subtotal) {
    const shipping = 2235; // Fixed shipping cost in Yen
    const total = subtotal + shipping;

    document.getElementById('cart-subtotal').textContent = `¥${subtotal}`;
    document.getElementById('cart-total').textContent = `¥${total}`;
}

// Apply coupon (placeholder functionality)
function applyCoupon() {
    const couponInput = document.getElementById('coupon-input');
    const couponCode = couponInput.value.trim().toUpperCase();

    let discount = 0;
    let message = '';

    switch (couponCode) {
        case 'VIETNAMESE10':
            discount = 0.1; // 10% discount
            message = '10% discount applied!';
            break;
        case 'JAPANESE15':
            discount = 0.15; // 15% discount
            message = '15% discount applied!';
            break;
        case 'WELCOME20':
            discount = 0.2; // 20% discount
            message = '20% discount applied!';
            break;
        default:
            message = 'Invalid coupon code';
            break;
    }

    if (discount > 0) {
        // Apply discount to current subtotal
        const currentSubtotal = parseInt(document.getElementById('cart-subtotal').textContent.replace('¥', ''));
        const discountedSubtotal = Math.round(currentSubtotal * (1 - discount));
        const shipping = 2235;
        const newTotal = discountedSubtotal + shipping;

        document.getElementById('cart-subtotal').textContent = `¥${discountedSubtotal}`;
        document.getElementById('cart-total').textContent = `¥${newTotal}`;

        // Store discount in localStorage for checkout
        localStorage.setItem('appliedDiscount', JSON.stringify({
            code: couponCode,
            discount: discount,
            originalSubtotal: currentSubtotal,
            discountedSubtotal: discountedSubtotal
        }));
    }

    alert(message);
    couponInput.value = '';
}

// Proceed to checkout
function proceedToCheckout() {
    const selectedIngredients = JSON.parse(localStorage.getItem('selectedIngredients')) || [];

    if (selectedIngredients.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Get current quantities from cart
    const cartQuantities = {};
    selectedIngredients.forEach((ingredient, index) => {
        const qtyElement = document.getElementById(`cart-qty-${index}`);
        if (qtyElement) {
            cartQuantities[ingredient] = parseInt(qtyElement.value);
        }
    });

    // Store quantities for checkout
    localStorage.setItem('cartQuantities', JSON.stringify(cartQuantities));

    // Redirect to checkout
    window.location.href = 'checkout.html';
}

function renderAllIngredients() {
    const container = document.getElementById('all-ingredients-list');
    if (!container) return;
    container.innerHTML = '';
    Object.keys(ingredientPrices).forEach(name => {
        const price = ingredientPrices[name];
        const image = ingredientImages[name] || ingredientImages['default'];
        const item = document.createElement('div');
        item.className = 'ingredient-item d-flex align-items-center mb-3';
        item.innerHTML = `
            <img src="${image}" alt="${name}" style="width:60px;height:60px;object-fit:cover;border-radius:50%;margin-right:16px;">
            <div>
                <div><strong>${name}</strong></div>
                <div>Giá: ¥${price}</div>
            </div>
        `;
        container.appendChild(item);
    });
}

// Load cart items when page loads
document.addEventListener('DOMContentLoaded', function () {
    renderAllIngredients();
    loadCartItems();
});