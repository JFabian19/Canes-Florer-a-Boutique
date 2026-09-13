// Base de datos de productos, testimonios y configuración de Canes Florería - Cajamarca
// Compatible tanto con carga directa de archivo (file://) como con servidores web

const STORE_CONFIG = {
  name: "Canes Florería",
  tagline: "Flores también cuentan historias",
  city: "Cajamarca, Perú",
  whatsappNumber: "51976543210", // Número de contacto (+51 Cajamarca)
  address: "Jr. Dos de Mayo 482 (A media cuadra de la Plaza de Armas), Cajamarca",
  phone: "+51 976 543 210",
  email: "hola@canesfloreria.pe",
  hours: "Lunes a Domingo: 8:00 AM - 9:30 PM",
  currency: "S/.",
  deliveryBasePrice: 8.00
};

const CATEGORIES = [
  { id: "all", name: "Todos los Arreglos" },
  { id: "girasoles", name: "Edición Girasoles 🌻" },
  { id: "romance", name: "Rosas & Romance 🌹" },
  { id: "silvestres", name: "Silvestres Andinos 🌿" },
  { id: "cajas", name: "Cajas de Autor & NFC 🎁" },
  { id: "cumpleanos", name: "Cumpleaños & Fiestas 🎂" }
];

const PRODUCTS = [
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

const DELIVERY_ZONES = [
  { zone: "Centro Histórico de Cajamarca", time: "45 a 60 min", price: "S/. 7.00", badge: "Más rápido" },
  { zone: "Baños del Inca", time: "60 a 90 min", price: "S/. 12.00", badge: "Cobertura total" },
  { zone: "San Antonio / Magna Valle", time: "45 a 60 min", price: "S/. 8.00", badge: "Entrega express" },
  { zone: "Urb. El Ingenio / Toribio Casanova", time: "45 a 60 min", price: "S/. 8.00", badge: "Frecuente" },
  { zone: "Chontapaccha / Bellavista", time: "50 a 70 min", price: "S/. 9.00", badge: "Entrega express" },
  { zone: "Huambocancha / Zonas Campestres", time: "90 a 120 min", price: "S/. 15.00", badge: "Programado" }
];

const TESTIMONIALS = [
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

const NFC_DEMO_DATA = {
  recipient: "Valeria",
  sender: "Mateo",
  occasion: "Nuestro 3er Aniversario 🌻",
  message: "Cada girasol de este ramo me recuerda la luz y alegría que trajiste a mi vida desde aquel paseo por las colinas de Santa Apolonia. Gracias por ser mi lugar favorito en el mundo.",
  songTitle: "Yellow — Coldplay",
  photo: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80"
};

// Exportar globalmente en window para evitar bloqueo CORS en file://
window.CANES_DATA = {
  STORE_CONFIG,
  CATEGORIES,
  PRODUCTS,
  DELIVERY_ZONES,
  TESTIMONIALS,
  NFC_DEMO_DATA
};
