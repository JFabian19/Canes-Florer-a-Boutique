// ==========================================================================
// CANES FLORERÍA BOUTIQUE — CAJAMARCA
// Controlador Principal con auto-recuperación y compatibilidad total
// ==========================================================================

const DEFAULT_STORE_CONFIG = {
  name: "Canes Florería",
  tagline: "Flores también cuentan historias",
  city: "Cajamarca, Perú",
  whatsappNumber: "51976543210",
  address: "Jr. Dos de Mayo 482 (A media cuadra de la Plaza de Armas), Cajamarca",
  phone: "+51 976 543 210",
  email: "hola@canesfloreria.pe",
  hours: "Lunes a Domingo: 8:00 AM - 9:30 PM",
  currency: "S/.",
  deliveryBasePrice: 8.00
};

const DEFAULT_CATEGORIES = [
  { id: "all", name: "Todos los Arreglos" },
  { id: "girasoles", name: "Edición Girasoles 🌻" },
  { id: "romance", name: "Rosas & Romance 🌹" },
  { id: "silvestres", name: "Silvestres Andinos 🌿" },
  { id: "cajas", name: "Cajas de Autor & NFC 🎁" },
  { id: "cumpleanos", name: "Cumpleaños & Fiestas 🎂" }
];

const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: "Bouquet Sol de Cajamarca",
    category: "girasoles",
    tag: "Más vendido",
    isFeatured: true,
    price: 135.00,
    oldPrice: 155.00,
    rating: 5.0,
    reviewsCount: 38,
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80",
    description: "Inspirado en el cielo radiante de los valles cajamarquinos. Ramo con 7 girasoles de primera selección, mimosas amarillas silvestres, eucalipto fresco y tarjeta interactiva NFC Canes incluida.",
    includesNfc: true,
    composition: ["7 Girasoles gigantes", "Follaje de Eucalipto andino", "Mimosas amarillas", "Papel kraft premium & cinta de lino", "Tarjeta inteligente NFC"]
  },
  {
    id: 2,
    name: "Caja Canes Girasoles & Amor",
    category: "cajas",
    tag: "Exclusivo NFC",
    isFeatured: true,
    price: 180.00,
    oldPrice: 210.00,
    rating: 4.9,
    reviewsCount: 42,
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80",
    description: "Nuestra caja insignia de diseño rígido en tono mostaza y crema. Contiene girasoles y rosas champagne seleccionadas a mano, bombones artesanales y tarjeta NFC programada con tus fotos y canciones.",
    includesNfc: true,
    composition: ["Girasoles frescos", "Rosas de exportación", "Chocolates finos", "Caja cilíndrica de lujo", "Tarjeta interactiva Canes NFC"]
  },
  {
    id: 3,
    name: "Rosas Andinas Caramelo",
    category: "romance",
    tag: "Romance",
    isFeatured: true,
    price: 160.00,
    oldPrice: null,
    rating: 4.9,
    reviewsCount: 29,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    description: "Docena y media de rosas aterciopeladas en tonos cálidos melocotón y rosado suave, envueltas en tela de fibra natural y lazo satinado.",
    includesNfc: true,
    composition: ["18 Rosas seleccionadas", "Gypsophila baby breath", "Envoltorio biodegradable", "Tarjeta dedicatoria"]
  },
  {
    id: 4,
    name: "Jardín Silvestre Santa Apolonia",
    category: "silvestres",
    tag: "Edición Local",
    isFeatured: false,
    price: 120.00,
    oldPrice: 140.00,
    rating: 4.8,
    reviewsCount: 21,
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",
    description: "Composición silvestre de flores nativas, lisianthus, espigas de trigo y lavanda cultivada en los alrededores de Cajamarca.",
    includesNfc: true,
    composition: ["Lisianthus", "Espigas secas", "Lavanda aromática", "Crisantemos miniatura", "Tarjeta Canes"]
  },
  {
    id: 5,
    name: "Ramo Cumpleaños Radiante",
    category: "cumpleanos",
    tag: "Celebración",
    isFeatured: false,
    price: 145.00,
    oldPrice: 165.00,
    rating: 5.0,
    reviewsCount: 19,
    image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80",
    description: "Una explosión de alegría con girasoles, gerberas amarillas y follaje aromático. Perfecto para sorprender a esa persona en su día.",
    includesNfc: true,
    composition: ["Girasoles", "Gerberas multicolores", "Topper 'Feliz Día'", "Tarjeta NFC con video saludo"]
  },
  {
    id: 6,
    name: "Eterno Sol — Flores Preservadas",
    category: "girasoles",
    tag: "Duran +1 año",
    isFeatured: true,
    price: 195.00,
    oldPrice: 220.00,
    rating: 5.0,
    reviewsCount: 33,
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80",
    description: "Girasol y follajes preservados bajo cúpula de cristal templado. Un recuerdo inolvidable que conserva su esplendor durante más de un año sin necesidad de agua.",
    includesNfc: true,
    composition: ["Girasol preservado 100% natural", "Cúpula de vidrio con base de madera", "Iluminación cálida micro-LED", "Tarjeta NFC"]
  },
  {
    id: 7,
    name: "Ramo Minimalista 5 Girasoles",
    category: "girasoles",
    tag: "Favorito Diario",
    isFeatured: false,
    price: 95.00,
    oldPrice: null,
    rating: 4.8,
    reviewsCount: 27,
    image: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=800&q=80",
    description: "La pureza y calidez del girasol en un empaque boutique tipo periódico vintage con mensaje poético.",
    includesNfc: true,
    composition: ["5 Girasoles de tallo largo", "Papel periódico vintage impermeable", "Cordón de yute", "Tarjeta con dedicatoria"]
  },
  {
    id: 8,
    name: "Luxury Box Orquídeas & Rosas",
    category: "cajas",
    tag: "Premium",
    isFeatured: false,
    price: 240.00,
    oldPrice: 270.00,
    rating: 5.0,
    reviewsCount: 16,
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
    description: "Arreglo de lujo en caja acrílica transparente con orquídeas blancas, rosas y detalles dorados. Para momentos verdaderamente trascendentes.",
    includesNfc: true,
    composition: ["Orquídea viva", "Rosas premium", "Caja acrílica de lujo", "Tarjeta NFC programada"]
  }
];

const DEFAULT_DELIVERY_ZONES = [
  { zone: "Centro Histórico de Cajamarca", time: "45 a 60 min", price: "S/. 7.00", badge: "Más rápido" },
  { zone: "Baños del Inca", time: "60 a 90 min", price: "S/. 12.00", badge: "Cobertura total" },
  { zone: "San Antonio / Magna Valle", time: "45 a 60 min", price: "S/. 8.00", badge: "Entrega express" },
  { zone: "Urb. El Ingenio / Toribio Casanova", time: "45 a 60 min", price: "S/. 8.00", badge: "Frecuente" },
  { zone: "Chontapaccha / Bellavista", time: "50 a 70 min", price: "S/. 9.00", badge: "Entrega express" },
  { zone: "Huambocancha / Zonas Campestres", time: "90 a 120 min", price: "S/. 15.00", badge: "Programado" }
];

const DEFAULT_TESTIMONIALS = [
  {
    id: 1,
    name: "Camila Arana",
    location: "Baños del Inca, Cajamarca",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "Hace 3 días",
    comment: "Los girasoles llegaron súper frescos, se notaba que los cortaron el mismo día. Pero lo que hizo llorar a mi mamá fue la tarjeta NFC: acercó su celular y salió el video que le grabamos con mis hermanos desde Lima. ¡Una experiencia única en Cajamarca!",
    productName: "Caja Canes Girasoles & Amor"
  },
  {
    id: 2,
    name: "Rodrigo Vásquez",
    location: "Centro Histórico, Cajamarca",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "Hace 1 semana",
    comment: "El diseño del ramo es de otro nivel, nada que ver con las florerías tradicionales. Los colores mostaza y crema del empaque combinan perfecto y el servicio por WhatsApp fue súper rápido. 100% recomendados.",
    productName: "Bouquet Sol de Cajamarca"
  },
  {
    id: 3,
    name: "Lucía Mendoza",
    location: "Urb. El Ingenio, Cajamarca",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "Hace 2 semanas",
    comment: "Pedí para el aniversario de mis padres. Llegó puntual hasta su casa y la tarjeta con canción de Spotify vinculada fue el toque maestro. Excelente atención y precio justo en soles.",
    productName: "Eterno Sol — Flores Preservadas"
  }
];

// Carga segura de datos con respaldo
const rawData = (typeof window !== 'undefined' && window.CANES_DATA) ? window.CANES_DATA : {};
const STORE_CONFIG = rawData.STORE_CONFIG || DEFAULT_STORE_CONFIG;
const CATEGORIES = rawData.CATEGORIES || DEFAULT_CATEGORIES;
const PRODUCTS = rawData.PRODUCTS || DEFAULT_PRODUCTS;
const DELIVERY_ZONES = rawData.DELIVERY_ZONES || DEFAULT_DELIVERY_ZONES;
const TESTIMONIALS = rawData.TESTIMONIALS || DEFAULT_TESTIMONIALS;

// Estado global de la aplicación
const state = {
  cart: [],
  selectedCategory: 'all',
  selectedDeliveryZone: DELIVERY_ZONES[0],
  isNfcRevealed: false
};

// ==========================================================================
// INICIALIZACIÓN ROBUSTA (Evita congelamiento por DOM readyState)
// ==========================================================================
function bootApp() {
  initIntroCurtain();
  initCartFromStorage();
  renderCategories();
  renderProducts();
  renderDeliveryZones();
  renderTestimonials();
  initNfcSimulator();
  initCartDrawer();
  initMobileMenu();
  setupEventListeners();
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootApp);
  } else {
    // Si el DOM ya cargó, arrancar de inmediato
    bootApp();
  }
}

// ==========================================================================
// ANIMACIÓN DE ENTRADA / PAGE REVEAL
// ==========================================================================
function initIntroCurtain() {
  const curtain = document.getElementById('intro-curtain');
  const skipBtn = document.getElementById('skip-intro-btn');
  const replayBtn = document.getElementById('replay-intro-btn');

  const hideCurtain = () => {
    if (!curtain) return;
    curtain.classList.add('hidden');
    document.body.style.overflow = 'auto';
  };

  const showCurtain = () => {
    if (!curtain) return;
    curtain.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Reiniciar barra de progreso
    const bar = curtain.querySelector('.intro-bar-progress');
    if (bar) {
      bar.style.animation = 'none';
      void bar.offsetHeight; // forzar reflow
      bar.style.animation = 'progressFill 1.8s cubic-bezier(0.65, 0, 0.35, 1) forwards';
    }

    setTimeout(hideCurtain, 2200);
  };

  if (skipBtn) {
    skipBtn.onclick = hideCurtain;
    skipBtn.addEventListener('click', hideCurtain);
  }

  if (replayBtn) {
    replayBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      showCurtain();
    });
  }

  // Auto ocultar después de 2.2 segundos para una entrada fluida
  setTimeout(hideCurtain, 2200);
}

// ==========================================================================
// CATEGORÍAS & FILTROS
// ==========================================================================
function renderCategories() {
  const container = document.getElementById('categories-container');
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => `
    <button class="category-tab ${state.selectedCategory === cat.id ? 'active' : ''}" data-cat-id="${cat.id}">
      ${cat.name}
    </button>
  `).join('');

  container.querySelectorAll('.category-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedCategory = btn.getAttribute('data-cat-id');
      renderCategories();
      renderProducts();
    });
  });
}

// ==========================================================================
// CATÁLOGO DE PRODUCTOS
// ==========================================================================
function renderProducts() {
  const container = document.getElementById('products-grid');
  if (!container) return;

  const filtered = state.selectedCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === state.selectedCategory);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <p style="color: var(--color-text-muted); font-size: 1.1rem;">No hay arreglos en esta categoría por el momento.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(product => `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-image-wrap">
        <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy" />
        <span class="product-badge-tag">${product.tag}</span>
        ${product.includesNfc ? `
          <div class="product-nfc-indicator" title="Incluye Tarjeta Interactiva NFC">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
            </svg>
          </div>
        ` : ''}
      </div>

      <div class="product-content">
        <div class="product-rating">
          <span class="star">★</span>
          <strong>${product.rating.toFixed(1)}</strong>
          <span>(${product.reviewsCount} reseñas en Cajamarca)</span>
        </div>

        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.description}</p>

        <div class="product-footer">
          <div class="product-price-box">
            <span class="price-current">${STORE_CONFIG.currency} ${product.price.toFixed(2)}</span>
            ${product.oldPrice ? `<span class="price-old">${STORE_CONFIG.currency} ${product.oldPrice.toFixed(2)}</span>` : ''}
          </div>

          <button class="btn-add-cart" data-add-id="${product.id}" title="Añadir al carrito" aria-label="Añadir ${product.name} al carrito">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
              <path d="M3 6h18"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
          </button>
        </div>
      </div>
    </article>
  `).join('');

  container.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.getAttribute('data-add-id'), 10);
      addToCart(id);
    });
  });
}

// ==========================================================================
// CARRITO DE COMPRAS & STORAGE
// ==========================================================================
function initCartFromStorage() {
  try {
    const saved = localStorage.getItem('canes_cajamarca_cart');
    if (saved) {
      state.cart = JSON.parse(saved);
    }
  } catch (e) {
    console.error('Error al cargar carrito local', e);
  }
  updateCartUI();
}

function saveCartToStorage() {
  try {
    localStorage.setItem('canes_cajamarca_cart', JSON.stringify(state.cart));
  } catch (e) {
    console.error('Error al guardar carrito local', e);
  }
}

function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += qty;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: qty
    });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`¡"${product.name}" agregado al carrito!`);
}

function updateCartItemQty(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => i.id !== productId);
  }

  saveCartToStorage();
  updateCartUI();
}

function updateCartUI() {
  const countBadges = document.querySelectorAll('.cart-badge');
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  countBadges.forEach(badge => {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'flex' : 'none';
  });

  renderCartDrawerContent();
}

function renderCartDrawerContent() {
  const body = document.getElementById('cart-drawer-body');
  const subtotalEl = document.getElementById('cart-subtotal-val');
  const totalEl = document.getElementById('cart-total-val');
  if (!body) return;

  if (state.cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 12h8"/>
        </svg>
        <p style="font-size: 1.1rem; font-family: var(--font-serif); font-weight: 600; margin-bottom: 0.5rem;">Tu carrito está vacío</p>
        <p style="font-size: 0.85rem; color: var(--color-text-muted);">Elige uno de nuestros arreglos de girasoles o flores frescas para comenzar.</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = `${STORE_CONFIG.currency} 0.00`;
    if (totalEl) totalEl.textContent = `${STORE_CONFIG.currency} 0.00`;
    return;
  }

  body.innerHTML = `
    <div style="display:flex; flex-direction:column; gap: 0.85rem;">
      ${state.cart.map(item => `
        <div class="cart-item-row">
          <img class="cart-item-img" src="${item.image}" alt="${item.name}" />
          <div class="cart-item-info">
            <h5>${item.name}</h5>
            <span class="cart-item-price">${STORE_CONFIG.currency} ${(item.price * item.quantity).toFixed(2)}</span>
            <div class="cart-qty-controls">
              <button class="qty-btn" data-cart-minus="${item.id}" aria-label="Disminuir">−</button>
              <span style="font-size: 0.85rem; font-weight: 700; padding: 0 4px;">${item.quantity}</span>
              <button class="qty-btn" data-cart-plus="${item.id}" aria-label="Aumentar">+</button>
            </div>
          </div>
          <button style="color: var(--color-text-light); padding: 4px;" data-cart-remove="${item.id}" title="Eliminar">
            ✕
          </button>
        </div>
      `).join('')}
    </div>

    <div class="checkout-fields">
      <h4 style="font-family: var(--font-serif); font-size: 1.1rem; color: var(--color-espresso); margin-top: 0.5rem;">
        Detalles de Entrega en Cajamarca
      </h4>
      <input type="text" id="checkout-recipient" class="checkout-input" placeholder="Nombre de quien recibe" />
      <input type="text" id="checkout-address" class="checkout-input" placeholder="Dirección en Cajamarca (ej. Jr. Dos de Mayo 123)" />
      
      <select id="checkout-zone" class="checkout-input">
        ${DELIVERY_ZONES.map(z => `
          <option value="${z.zone}" data-price="${z.price}">
            ${z.zone} — ${z.price} (${z.time})
          </option>
        `).join('')}
      </select>

      <textarea id="checkout-dedication" class="checkout-input" rows="2" placeholder="Dedicatoria o mensaje para la tarjeta NFC / impresa"></textarea>
    </div>
  `;

  body.querySelectorAll('[data-cart-minus]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.getAttribute('data-cart-minus'), 10);
      updateCartItemQty(id, -1);
    });
  });

  body.querySelectorAll('[data-cart-plus]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.getAttribute('data-cart-plus'), 10);
      updateCartItemQty(id, 1);
    });
  });

  body.querySelectorAll('[data-cart-remove]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.getAttribute('data-cart-remove'), 10);
      state.cart = state.cart.filter(i => i.id !== id);
      saveCartToStorage();
      updateCartUI();
    });
  });

  const zoneSelect = body.querySelector('#checkout-zone');
  if (zoneSelect) {
    zoneSelect.addEventListener('change', () => {
      const selectedOption = zoneSelect.options[zoneSelect.selectedIndex];
      const priceText = selectedOption.getAttribute('data-price');
      const numericPrice = parseFloat(priceText.replace('S/.', '').trim()) || 8.00;
      updateTotals(numericPrice);
    });
  }

  updateTotals(8.00);
}

function updateTotals(deliveryFee = 8.00) {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + (subtotal > 0 ? deliveryFee : 0);

  const subtotalEl = document.getElementById('cart-subtotal-val');
  const deliveryEl = document.getElementById('cart-delivery-val');
  const totalEl = document.getElementById('cart-total-val');

  if (subtotalEl) subtotalEl.textContent = `${STORE_CONFIG.currency} ${subtotal.toFixed(2)}`;
  if (deliveryEl) deliveryEl.textContent = `${STORE_CONFIG.currency} ${deliveryFee.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `${STORE_CONFIG.currency} ${total.toFixed(2)}`;
}

// ==========================================================================
// DRAWER TOGGLE
// ==========================================================================
function initCartDrawer() {
  const overlay = document.getElementById('cart-overlay');
  const drawer = document.getElementById('cart-drawer');
  const openButtons = document.querySelectorAll('.trigger-cart');
  const closeBtn = document.getElementById('cart-close-btn');

  const openDrawer = () => {
    if (overlay && drawer) {
      overlay.classList.add('active');
      drawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeDrawer = () => {
    if (overlay && drawer) {
      overlay.classList.remove('active');
      drawer.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  };

  openButtons.forEach(b => b.addEventListener('click', (e) => {
    e.preventDefault();
    openDrawer();
  }));

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  const checkoutBtn = document.getElementById('btn-checkout-wa');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', handleWhatsAppCheckout);
  }
}

// ==========================================================================
// CHECKOUT VIA WHATSAPP
// ==========================================================================
function handleWhatsAppCheckout() {
  if (state.cart.length === 0) {
    alert('Tu carrito está vacío. Elige un arreglo floral antes de continuar.');
    return;
  }

  const recipientInput = document.getElementById('checkout-recipient');
  const addressInput = document.getElementById('checkout-address');
  const zoneSelect = document.getElementById('checkout-zone');
  const dedicationInput = document.getElementById('checkout-dedication');

  const recipient = recipientInput ? recipientInput.value.trim() : '';
  const address = addressInput ? addressInput.value.trim() : '';
  const zone = zoneSelect ? zoneSelect.value : 'Cajamarca';
  const dedication = dedicationInput ? dedicationInput.value.trim() : '';

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 8.00;
  const total = subtotal + deliveryFee;

  let msg = `🌻 *¡Hola Canes Florería Boutique Cajamarca! Quisiera realizar un pedido:*\n\n`;
  msg += `📋 *DETALLE DEL PEDIDO:*\n`;
  state.cart.forEach(item => {
    msg += `• ${item.quantity}x ${item.name} (${STORE_CONFIG.currency} ${(item.price * item.quantity).toFixed(2)})\n`;
  });

  msg += `\n💰 *Subtotal:* ${STORE_CONFIG.currency} ${subtotal.toFixed(2)}`;
  msg += `\n🛵 *Zona de entrega:* ${zone}`;
  msg += `\n💵 *Total estimado:* ${STORE_CONFIG.currency} ${total.toFixed(2)}`;

  if (recipient) {
    msg += `\n\n👤 *Para:* ${recipient}`;
  }
  if (address) {
    msg += `\n📍 *Dirección en Cajamarca:* ${address}`;
  }
  if (dedication) {
    msg += `\n💌 *Dedicatoria para la tarjeta:* "${dedication}"`;
  }

  msg += `\n\n✨ _Acepto pagar vía Yape, Plin o Transferencia BCP/BBVA. ¿Tienen disponibilidad para hoy?_`;

  const encodedMsg = encodeURIComponent(msg);
  const url = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodedMsg}`;
  window.open(url, '_blank');
}

// ==========================================================================
// SIMULADOR INTERACTIVO NFC
// ==========================================================================
function initNfcSimulator() {
  const tapTrigger = document.getElementById('sim-tap-trigger');
  const tapPrompt = document.getElementById('sim-tap-prompt');
  const resetBtn = document.getElementById('sim-reset-btn');
  const mustardCard = document.getElementById('hero-mustard-card');

  const revealNfcContent = () => {
    if (tapPrompt) {
      tapPrompt.classList.add('revealed');
      state.isNfcRevealed = true;
    }
  };

  const hideNfcContent = () => {
    if (tapPrompt) {
      tapPrompt.classList.remove('revealed');
      state.isNfcRevealed = false;
    }
  };

  if (tapTrigger) {
    tapTrigger.addEventListener('click', revealNfcContent);
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', hideNfcContent);
  }

  if (mustardCard) {
    mustardCard.addEventListener('click', () => {
      const section = document.getElementById('experiencia-nfc');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setTimeout(revealNfcContent, 600);
      }
    });
  }
}

// ==========================================================================
// ZONAS DE REPARTO & TESTIMONIOS
// ==========================================================================
function renderDeliveryZones() {
  const container = document.getElementById('delivery-zones-grid');
  if (!container) return;

  container.innerHTML = DELIVERY_ZONES.map(item => `
    <div class="delivery-card">
      <div class="delivery-card-top">
        <div class="delivery-card-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
        <span class="delivery-badge">${item.badge}</span>
      </div>
      <h4>${item.zone}</h4>
      <div class="delivery-details">
        <span>Tiempo aprox: <strong>${item.time}</strong></span>
        <span>Envío: <strong>${item.price}</strong></span>
      </div>
    </div>
  `).join('');
}

function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;

  container.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card">
      <div>
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-text">"${t.comment}"</p>
      </div>
      <div class="testimonial-author">
        <img class="author-avatar" src="${t.avatar}" alt="${t.name}" loading="lazy" />
        <div class="author-info">
          <strong>${t.name}</strong>
          <span>${t.location} • <em>${t.productName}</em></span>
        </div>
      </div>
    </div>
  `).join('');
}

// ==========================================================================
// MENÚ MÓVIL Y LISTENERS
// ==========================================================================
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const header = document.querySelector('.header');

  if (toggleBtn && header) {
    toggleBtn.addEventListener('click', () => {
      const navLinks = document.querySelector('.nav-links');
      if (navLinks) {
        if (navLinks.style.display === 'flex') {
          navLinks.style.display = 'none';
        } else {
          navLinks.style.display = 'flex';
          navLinks.style.flexDirection = 'column';
          navLinks.style.position = 'absolute';
          navLinks.style.top = '100%';
          navLinks.style.left = '0';
          navLinks.style.right = '0';
          navLinks.style.backgroundColor = 'var(--color-cream-bg)';
          navLinks.style.padding = '1.5rem';
          navLinks.style.borderBottom = '1px solid var(--color-cream-border)';
          navLinks.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
        }
      }
    });
  }
}

function setupEventListeners() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        
        const navLinks = document.querySelector('.nav-links');
        if (window.innerWidth <= 768 && navLinks) {
          navLinks.style.display = 'none';
        }
      }
    });
  });
}

// ==========================================================================
// NOTIFICACIONES TOAST
// ==========================================================================
function showToast(message) {
  let toast = document.getElementById('toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
