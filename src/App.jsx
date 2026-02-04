import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Search, 
  Menu, 
  X, 
  User, 
  LogOut, 
  Plus, 
  Minus, 
  Trash2, 
  CreditCard, 
  CheckCircle,
  Package,
  Edit,
  DollarSign,
  Image as ImageIcon,
  LayoutDashboard,
  Home,
  Heart,
  Star,
  Tag,
  Filter,
  ArrowRight,
  Truck,
  ShieldCheck
} from 'lucide-react';

// --- DATA MOCKUP LENGKAP (21 Produk) ---
const initialProducts = [
  {
    id: 1,
    name: "Kopi Gayo Arabica Premium",
    price: 85000,
    category: "Minuman",
    rating: 4.8,
    sold: 120,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400",
    description: "Kopi asli Aceh dengan cita rasa khas, di-roasting medium dark."
  },
  {
    id: 2,
    name: "Sony WH-1000XM5 Wireless",
    price: 3500000,
    category: "Elektronik",
    rating: 4.9,
    sold: 45,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
    description: "Noise cancelling terbaik di kelasnya dengan baterai 30 jam."
  },
  {
    id: 3,
    name: "Nike Air Jordan High",
    price: 2450000,
    category: "Fashion",
    rating: 4.7,
    sold: 88,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400",
    description: "Desain ikonik untuk gaya street style yang maksimal."
  },
  {
    id: 4,
    name: "Apple Watch Series 9",
    price: 6500000,
    category: "Elektronik",
    rating: 4.9,
    sold: 230,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400",
    description: "Pantau kesehatan jantung dan aktivitas harian dengan presisi."
  },
  {
    id: 5,
    name: "Herschel Little America",
    price: 1250000,
    category: "Fashion",
    rating: 4.6,
    sold: 150,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400",
    description: "Tas punggung premium dengan kompartemen laptop berlapis bulu."
  },
  {
    id: 6,
    name: "Matcha Ceremonial Grade",
    price: 165000,
    category: "Minuman",
    rating: 4.8,
    sold: 300,
    image: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&q=80&w=400",
    description: "Bubuk matcha murni impor Jepang untuk kesehatan."
  },
  {
    id: 7,
    name: "Mechanical Keyboard RGB",
    price: 850000,
    category: "Gaming",
    rating: 4.7,
    sold: 67,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=400",
    description: "Switch biru yang clicky dengan 18 mode lampu RGB."
  },
  {
    id: 8,
    name: "Monstera Deliciosa",
    price: 125000,
    category: "Home Living",
    rating: 4.5,
    sold: 40,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=400",
    description: "Tanaman hias aesthetic untuk mempercantik ruangan Anda."
  },
  {
    id: 9,
    name: "Skincare Set Glowing",
    price: 450000,
    category: "Beauty",
    rating: 4.9,
    sold: 500,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=400",
    description: "Paket lengkap serum, toner, dan cream untuk kulit bercahaya."
  },
  {
    id: 10,
    name: "Mouse Gaming Wireless",
    price: 550000,
    category: "Gaming",
    rating: 4.6,
    sold: 112,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=400",
    description: "Sensor presisi tinggi tanpa delay untuk pro player."
  },
  {
    id: 11,
    name: "Kacamata Hitam Retro",
    price: 180000,
    category: "Fashion",
    rating: 4.5,
    sold: 95,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=400",
    description: "Lindungi mata dari UV dengan gaya vintage yang kekinian."
  },
  {
    id: 12,
    name: "Fujifilm Instax Mini 12",
    price: 1200000,
    category: "Elektronik",
    rating: 4.8,
    sold: 340,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=400",
    description: "Kamera instan untuk menangkap momen berharga secara langsung."
  },
  {
    id: 13,
    name: "Yoga Mat Premium Anti-Slip",
    price: 250000,
    category: "Olahraga",
    rating: 4.7,
    sold: 520,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&q=80&w=400",
    description: "Matras yoga tebal 6mm yang nyaman dan tidak licin."
  },
  {
    id: 14,
    name: "Dumbbell Neoprene Set 3kg",
    price: 180000,
    category: "Olahraga",
    rating: 4.6,
    sold: 180,
    image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&q=80&w=400",
    description: "Dumbbell berlapis neoprene nyaman digenggam untuk workout di rumah."
  },
  {
    id: 15,
    name: "PlayStation 5 DualSense Controller",
    price: 1150000,
    category: "Gaming",
    rating: 4.9,
    sold: 890,
    image: "https://images.unsplash.com/photo-1606318801954-d46d46d3360a?auto=format&fit=crop&q=80&w=400",
    description: "Controller next-gen dengan haptic feedback yang imersif."
  },
  {
    id: 16,
    name: "Jaket Denim Vintage",
    price: 499000,
    category: "Fashion",
    rating: 4.5,
    sold: 120,
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=400",
    description: "Jaket denim klasik yang tak lekang oleh waktu."
  },
  {
    id: 17,
    name: "Aromatherapy Diffuser",
    price: 150000,
    category: "Home Living",
    rating: 4.4,
    sold: 600,
    image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=400",
    description: "Pewangi ruangan ultrasonik dengan lampu LED yang menenangkan."
  },
  {
    id: 18,
    name: "Serum Vitamin C",
    price: 120000,
    category: "Beauty",
    rating: 4.7,
    sold: 1200,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400",
    description: "Mencerahkan kulit dan memudarkan noda hitam bekas jerawat."
  },
  {
    id: 19,
    name: "Sepatu Lari Ultraboost",
    price: 1800000,
    category: "Olahraga",
    rating: 4.8,
    sold: 210,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=400",
    description: "Bantalan empuk untuk lari jarak jauh tanpa rasa sakit."
  },
  {
    id: 20,
    name: "Smart Speaker Mini",
    price: 550000,
    category: "Elektronik",
    rating: 4.5,
    sold: 300,
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&q=80&w=400",
    description: "Asisten suara pintar untuk mengontrol rumah pintar Anda."
  }
];

const categories = ["Semua", "Elektronik", "Fashion", "Minuman", "Gaming", "Home Living", "Beauty", "Olahraga"];

// --- KOMPONEN UTILITAS ---

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-5 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30",
    secondary: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30",
    success: "bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30",
    ghost: "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 bg-transparent"
  };
  
  return (
    <button 
      onClick={onClick} 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Input = ({ label, className, ...props }) => (
  <div className="mb-4 w-full">
    {label && <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">{label}</label>}
    <input 
      className={`w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all ${className}`}
      {...props}
    />
  </div>
);

const Badge = ({ children, color = 'indigo' }) => (
  <span className={`px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full bg-${color}-100 text-${color}-700 border border-${color}-200`}>
    {children}
  </span>
);

const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(number);
};

// --- KOMPONEN UTAMA APLIKASI ---

export default function App() {
  // State Global
  const [view, setView] = useState('home'); 
  const [user, setUser] = useState(null); 
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [toast, setToast] = useState(null);

  // State untuk Form Produk (Admin)
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  // State untuk Checkout
  const [loading, setLoading] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  // --- LOGIC KERANJANG & WISHLIST ---
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`"${product.name}" masuk keranjang!`);
  };

  const toggleWishlist = (product) => {
    if (wishlist.find(item => item.id === product.id)) {
      setWishlist(prev => prev.filter(item => item.id !== product.id));
      showToast("Dihapus dari wishlist");
    } else {
      setWishlist(prev => [...prev, product]);
      showToast("Disimpan ke wishlist ❤️");
    }
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, change) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + change;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // --- LOGIC ADMIN CRUD ---
  const handleSaveProduct = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const productData = {
      name: formData.get('name'),
      price: parseInt(formData.get('price')),
      category: formData.get('category'),
      image: formData.get('image') || "https://placehold.co/400",
      description: formData.get('description'),
      rating: 4.5, // Default rating
      sold: 0
    };

    if (isEditing) {
      setProducts(prev => prev.map(p => p.id === currentProduct.id ? { ...productData, id: p.id } : p));
      showToast("Produk berhasil diperbarui!");
    } else {
      setProducts(prev => [...prev, { ...productData, id: Date.now() }]);
      showToast("Produk baru berhasil ditambahkan!");
    }
    setIsEditing(false);
    setCurrentProduct(null);
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm("Yakin ingin menghapus produk ini?")) {
      setProducts(prev => prev.filter(p => p.id !== id));
      showToast("Produk dihapus.");
    }
  };

  const openEditModal = (product = null) => {
    setIsEditing(!!product);
    setCurrentProduct(product);
  };

  // --- LOGIC AUTH & NAVIGASI ---
  const handleLogin = (role) => {
    setUser({ 
      name: role === 'admin' ? 'Administrator' : 'Alexander', 
      role,
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
    });
    setView(role === 'admin' ? 'admin' : 'home');
    showToast(`Selamat datang, ${role === 'admin' ? 'Admin' : 'Alexander'}!`);
  };

  const handleLogout = () => {
    setUser(null);
    setView('home');
    setCart([]);
    showToast("Sampai jumpa lagi!");
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  // --- RENDER HELPERS ---
  
  // 1. HALAMAN UTAMA (HOME)
  const renderHome = () => {
    const filteredProducts = products.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCategory = selectedCategory === "Semua" || p.category === selectedCategory;
      return matchSearch && matchCategory;
    });

    return (
      <div className="space-y-10 pb-12">
        {/* Hero Section Modern */}
        <div className="relative bg-gray-900 rounded-3xl overflow-hidden shadow-2xl min-h-[400px] flex items-center">
          <div className="absolute inset-0">
             <img 
               src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=2070" 
               className="w-full h-full object-cover opacity-60"
               alt="Hero Background" 
             />
             <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          </div>
          <div className="relative z-10 px-8 md:px-12 max-w-2xl text-white">
            <Badge color="indigo">Promo Spesial 2024</Badge>
            <h1 className="text-5xl md:text-6xl font-extrabold mt-4 mb-6 leading-tight tracking-tight">
              Gaya Hidup <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Masa Depan.</span>
            </h1>
            <p className="text-gray-300 mb-8 text-lg max-w-md leading-relaxed">
              Temukan koleksi eksklusif dari teknologi terbaru hingga fashion terkini. Diskon 50% untuk pengguna baru.
            </p>
            <div className="flex gap-4">
              <Button onClick={() => document.getElementById('catalog').scrollIntoView({behavior: 'smooth'})} className="px-8 py-3 text-lg bg-white text-gray-900 hover:bg-gray-100 border-none">
                Belanja Sekarang
              </Button>
            </div>
          </div>
        </div>

        {/* Categories & Filter */}
        <div id="catalog" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Tag className="text-indigo-600" size={24}/> Koleksi Pilihan
            </h2>
            
            {/* Search Bar */}
            <div className="relative w-full md:w-80 group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Cari produk impianmu..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl shadow-sm focus:shadow-md focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat 
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" 
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-gray-400" size={32} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Produk tidak ditemukan</h3>
            <p className="text-gray-500">Coba kata kunci lain atau ganti kategori.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden relative">
                
                {/* Image Section */}
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300 delay-75">
                    <button 
                      onClick={() => toggleWishlist(product)}
                      className={`p-3 rounded-full shadow-lg backdrop-blur-md transition-colors ${
                        wishlist.find(i => i.id === product.id) 
                        ? 'bg-rose-500 text-white' 
                        : 'bg-white/90 text-gray-600 hover:bg-rose-50 hover:text-rose-500'
                      }`}
                    >
                      <Heart size={18} fill={wishlist.find(i => i.id === product.id) ? "currentColor" : "none"} />
                    </button>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md uppercase tracking-wider">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1 text-amber-400 text-sm font-bold">
                      <Star size={14} fill="currentColor" /> {product.rating}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight group-hover:text-indigo-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="block text-xs text-gray-400 mb-0.5">Harga</span>
                      <span className="text-lg font-bold text-gray-900">{formatRupiah(product.price)}</span>
                    </div>
                    <Button 
                      onClick={() => addToCart(product)} 
                      className="rounded-full w-10 h-10 p-0 flex items-center justify-center bg-gray-900 hover:bg-indigo-600 text-white shadow-none"
                    >
                      <Plus size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // 2. KERANJANG BELANJA
  const renderCart = () => (
    <div className="max-w-6xl mx-auto pb-12">
      <h2 className="text-3xl font-extrabold mb-8 flex items-center gap-3">
        <ShoppingCart className="text-indigo-600" size={32} /> Keranjang Anda
      </h2>
      
      {cart.length === 0 ? (
        <div className="text-center py-24 bg-white rounded-3xl shadow-sm border border-gray-100">
          <div className="w-24 h-24 bg-indigo-50 text-indigo-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingCart size={48} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Keranjang masih sepi nih</h3>
          <p className="text-gray-500 mb-8 max-w-sm mx-auto">Barang impianmu sedang menunggu untuk dibawa pulang. Yuk belanja!</p>
          <Button onClick={() => setView('home')} className="px-8 py-3">
            Mulai Belanja
          </Button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* List Item */}
          <div className="flex-1 space-y-4 w-full">
            {cart.map(item => (
              <div key={item.id} className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 items-center group transition-all hover:border-indigo-200">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-2xl bg-gray-50 shadow-inner" />
                
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{item.name}</h3>
                  <div className="text-sm text-gray-500 mb-2">{item.category}</div>
                  <p className="text-indigo-600 font-bold text-lg">{formatRupiah(item.price)}</p>
                </div>

                <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-1">
                  <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-indigo-600 disabled:opacity-50 transition-colors">
                    <Minus size={16} />
                  </button>
                  <span className="font-bold w-6 text-center text-gray-800">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-colors">
                    <Plus size={16} />
                  </button>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all sm:ml-2"
                  title="Hapus"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* Summary Card */}
          <div className="w-full lg:w-96">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Ringkasan Pesanan</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cartCount} barang)</span>
                  <span className="font-medium">{formatRupiah(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Pajak (11%)</span>
                  <span className="font-medium">{formatRupiah(cartTotal * 0.11)}</span>
                </div>
                <div className="flex justify-between text-emerald-600">
                  <span>Diskon Pengiriman</span>
                  <span className="font-medium">-Rp 15.000</span>
                </div>
              </div>
              
              <div className="border-t border-dashed border-gray-200 pt-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-700">Total Akhir</span>
                  <span className="text-2xl font-extrabold text-indigo-600">{formatRupiah(cartTotal + (cartTotal * 0.11) - 15000)}</span>
                </div>
              </div>

              <Button className="w-full py-4 text-lg shadow-indigo-500/20" onClick={() => setView('checkout')}>
                Lanjut ke Pembayaran <ArrowRight size={20} />
              </Button>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
                <ShieldCheck size={14} /> Transaksi aman & terenkripsi
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // 3. HALAMAN CHECKOUT DENGAN FITUR PROMO
  const renderCheckout = () => {
    const subTotal = cartTotal + (cartTotal * 0.11) - 15000;
    const finalTotal = subTotal - discount;
    
    const handleApplyPromo = () => {
      if (promoCode.toUpperCase() === 'DISKON50') {
        setDiscount(subTotal * 0.5);
        showToast("Kode promo berhasil! Hemat 50%");
      } else {
        showToast("Kode promo tidak valid");
        setDiscount(0);
      }
    };

    const handlePayment = (e) => {
      e.preventDefault();
      setLoading(true);
      // Simulasi API call
      setTimeout(() => {
        setLoading(false);
        setCart([]);
        setView('success');
      }, 2500);
    };

    return (
      <div className="max-w-3xl mx-auto pb-12">
        <button onClick={() => setView('cart')} className="mb-6 flex items-center gap-2 text-gray-500 hover:text-indigo-600 font-medium transition-colors">
          <ArrowRight className="rotate-180" size={18} /> Kembali ke Keranjang
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900">
                <Truck className="text-indigo-600" /> Alamat Pengiriman
              </h2>
              <form id="checkoutForm" onSubmit={handlePayment} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input label="Nama Depan" required placeholder="Alexander" />
                  <Input label="Nama Belakang" required placeholder="Graham" />
                </div>
                <Input label="Nomor Telepon" required placeholder="0812..." type="tel" />
                <Input label="Alamat Lengkap" required placeholder="Jalan Sudirman No. Kav 5..." />
                <div className="grid grid-cols-2 gap-5">
                  <Input label="Kota" required placeholder="Jakarta Selatan" />
                  <Input label="Kode Pos" required placeholder="12190" />
                </div>
              </form>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900">
                <CreditCard className="text-indigo-600" /> Pembayaran
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {['BCA Virtual Account', 'GoPay', 'COD (Bayar ditempat)'].map((method, idx) => (
                  <div key={idx} className="border-2 border-gray-100 rounded-2xl p-4 text-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition-all">
                    <div className="h-8 w-8 bg-gray-200 rounded-full mx-auto mb-2"></div>
                    <span className="text-xs font-bold text-gray-600">{method}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Summary */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4">Rincian Biaya</h3>
              
              {/* Promo Code Input */}
              <div className="mb-6">
                <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Kode Promo</label>
                <div className="flex gap-2">
                  <input 
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="DISKON50"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none uppercase"
                  />
                  <button onClick={handleApplyPromo} className="bg-gray-900 text-white px-3 rounded-lg text-sm font-bold hover:bg-gray-800">
                    Gunakan
                  </button>
                </div>
                {discount > 0 && <p className="text-xs text-emerald-600 mt-2 font-medium">Yeay! Hemat {formatRupiah(discount)}</p>}
              </div>

              <div className="space-y-3 text-sm border-t border-gray-100 pt-4 mb-6">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span>{formatRupiah(subTotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-medium">
                    <span>Diskon Promo</span>
                    <span>-{formatRupiah(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <span className="font-bold text-gray-900 text-lg">Total</span>
                  <span className="font-bold text-indigo-600 text-xl">{formatRupiah(finalTotal)}</span>
                </div>
              </div>

              <Button 
                onClick={() => document.getElementById('checkoutForm').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))}
                className="w-full py-3" 
                disabled={loading}
              >
                {loading ? "Memproses..." : "Bayar Sekarang"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 4. ADMIN DASHBOARD
  const renderAdmin = () => {
    if (isEditing || currentProduct === 'new') {
      const isNew = currentProduct === 'new';
      const initialData = isNew ? {} : currentProduct;
      
      return (
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">{isNew ? 'Tambah Produk Baru' : 'Edit Produk'}</h2>
          <form onSubmit={handleSaveProduct} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <Input name="name" label="Nama Produk" defaultValue={initialData.name} required />
              <Input name="category" label="Kategori" defaultValue={initialData.category} list="cat-list" required />
              <datalist id="cat-list">
                {categories.slice(1).map(c => <option key={c} value={c} />)}
              </datalist>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Input name="price" label="Harga (Rp)" type="number" defaultValue={initialData.price} required />
              <Input name="image" label="URL Gambar (Unsplash)" defaultValue={initialData.image} placeholder="https://..." />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Deskripsi Produk</label>
              <textarea 
                name="description" 
                className="w-full px-5 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none h-40 transition-all"
                defaultValue={initialData.description}
                required
              />
            </div>
            
            <div className="flex gap-4 pt-6 border-t border-gray-100">
              <Button type="submit" className="flex-1 py-3">Simpan Produk</Button>
              <Button type="button" variant="secondary" className="px-8" onClick={() => { setIsEditing(false); setCurrentProduct(null); }}>Batal</Button>
            </div>
          </form>
        </div>
      );
    }

    // LIST PRODUK ADMIN
    return (
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-6 rounded-3xl shadow-sm border border-gray-100 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Dashboard Admin</h2>
            <p className="text-gray-500 mt-1">Kelola {products.length} produk aktif di toko Anda</p>
          </div>
          <Button onClick={() => { setCurrentProduct('new'); setIsEditing(true); }} className="shadow-lg shadow-indigo-200">
            <Plus size={20} /> Tambah Produk
          </Button>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50/50 text-gray-600 font-semibold border-b border-gray-100 text-sm uppercase tracking-wider">
                <tr>
                  <th className="p-6">Info Produk</th>
                  <th className="p-6">Statistik</th>
                  <th className="p-6">Harga</th>
                  <th className="p-6 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {products.map(product => (
                  <tr key={product.id} className="hover:bg-gray-50/80 transition-colors group">
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <img src={product.image} alt="" className="w-16 h-16 rounded-2xl bg-gray-200 object-cover shadow-sm" />
                        <div>
                          <div className="font-bold text-gray-900 text-lg">{product.name}</div>
                          <Badge color="blue">{product.category}</Badge>
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="space-y-1 text-sm text-gray-500">
                        <div className="flex items-center gap-1"><Star size={14} className="text-amber-400 fill-current" /> {product.rating || 4.5} Rating</div>
                        <div>Terjual: {product.sold || 0}</div>
                      </div>
                    </td>
                    <td className="p-6 font-mono font-bold text-gray-700">{formatRupiah(product.price)}</td>
                    <td className="p-6">
                      <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => openEditModal(product)} className="p-2.5 text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-colors">
                          <Edit size={18} />
                        </button>
                        <button onClick={() => handleDeleteProduct(product.id)} className="p-2.5 text-red-500 bg-red-50 hover:bg-red-100 rounded-xl transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  // 5. HALAMAN LOGIN
  const renderLogin = () => (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-full max-w-md border border-white/50 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
        <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
          <User size={40} />
        </div>
        <h2 className="text-3xl font-bold mb-3 text-gray-900">Selamat Datang</h2>
        <p className="text-gray-500 mb-10 leading-relaxed">Masuk untuk mengakses keranjang, wishlist, dan fitur eksklusif lainnya.</p>
        
        <div className="space-y-4">
          <Button onClick={() => handleLogin('user')} className="w-full py-4 text-lg shadow-indigo-200" variant="primary">
            Masuk sebagai Pembeli
          </Button>
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
            <div className="relative flex justify-center"><span className="bg-white px-4 text-sm text-gray-400 font-medium">DEMO ACCOUNT</span></div>
          </div>
          <Button onClick={() => handleLogin('admin')} className="w-full py-4 text-gray-600 bg-gray-50 hover:bg-gray-100 border-none" variant="secondary">
            Masuk sebagai Admin Toko
          </Button>
        </div>
      </div>
    </div>
  );

  // 6. SUKSES PAGE
  const renderSuccess = () => (
    <div className="flex flex-col items-center justify-center py-20 text-center px-4">
      <div className="relative">
        <div className="w-32 h-32 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-8 animate-bounce">
          <CheckCircle size={64} />
        </div>
        <div className="absolute top-0 right-0 -mr-4 -mt-4 w-12 h-12 bg-yellow-300 rounded-full animate-ping opacity-75"></div>
      </div>
      
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Pembayaran Berhasil!</h2>
      <p className="text-gray-500 max-w-lg mx-auto mb-10 text-lg">
        Terima kasih telah berbelanja di Toko Nusantara. <br/>
        Pesanan <span className="font-mono font-bold text-gray-800">#TRX-88291</span> sedang kami proses.
      </p>
      
      <div className="flex gap-4">
        <Button onClick={() => setView('home')} variant="primary" className="px-10 py-4 text-lg">
          Belanja Lagi
        </Button>
        <Button variant="secondary" className="px-10 py-4 text-lg">
          Lihat Pesanan
        </Button>
      </div>
    </div>
  );

  // --- RENDER UTAMA ---
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Navbar Modern Glassy */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200/50 supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setView('home')}>
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-2.5 rounded-xl shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <Package className="text-white w-6 h-6" />
              </div>
              <div>
                <span className="block font-extrabold text-xl tracking-tight leading-none text-gray-900">Toko</span>
                <span className="block font-bold text-sm text-indigo-600 leading-none">Nusantara</span>
              </div>
            </div>

            {/* Navigasi Desktop */}
            <div className="hidden md:flex items-center bg-gray-100/50 p-1.5 rounded-full border border-gray-200/50 backdrop-blur-sm">
              <button 
                onClick={() => setView('home')} 
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  view === 'home' 
                    ? 'bg-white text-indigo-600 shadow-sm' 
                    : 'text-gray-500 hover:text-indigo-600'
                }`}
              >
                Belanja
              </button>
              
              {user?.role === 'admin' && (
                <button 
                  onClick={() => setView('admin')} 
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                    view === 'admin' 
                      ? 'bg-white text-indigo-600 shadow-sm' 
                      : 'text-gray-500 hover:text-indigo-600'
                  }`}
                >
                  Dashboard
                </button>
              )}
            </div>

            {/* Tombol Kanan */}
            <div className="flex items-center gap-3">
              {user?.role !== 'admin' && (
                <>
                  <button className="p-3 text-gray-500 hover:bg-rose-50 hover:text-rose-500 rounded-2xl transition-all hidden sm:block">
                    <Heart size={22} />
                  </button>
                  <button onClick={() => setView('cart')} className="relative p-3 text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 rounded-2xl transition-all">
                    <ShoppingCart size={22} />
                    {cartCount > 0 && (
                      <span className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
                        {cartCount}
                      </span>
                    )}
                  </button>
                </>
              )}

              {user ? (
                <div className="flex items-center gap-3 pl-4 border-l border-gray-200 ml-1">
                  <div className="flex items-center gap-3 bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 pr-4 pl-1 py-1 rounded-full transition-all cursor-pointer shadow-sm">
                    <img src={user.avatar} alt="User" className="w-8 h-8 rounded-full border border-white shadow-sm" />
                    <span className="text-sm font-bold text-gray-700 hidden sm:block">{user.name}</span>
                  </div>
                  <button onClick={handleLogout} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all" title="Logout">
                    <LogOut size={20} />
                  </button>
                </div>
              ) : (
                <Button onClick={() => setView('login')} variant="primary" className="px-6 py-2.5 rounded-full text-sm shadow-indigo-500/20">
                  Masuk Akun
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Konten Utama */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {view === 'home' && renderHome()}
        {view === 'cart' && renderCart()}
        {view === 'checkout' && renderCheckout()}
        {view === 'success' && renderSuccess()}
        {view === 'login' && renderLogin()}
        {view === 'admin' && renderAdmin()}
      </main>

      {/* Footer Modern */}
      <footer className="bg-white border-t border-gray-200 mt-20 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-indigo-600 p-2 rounded-lg"><Package className="text-white w-5 h-5" /></div>
                <span className="font-bold text-xl">TokoNusantara</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Platform e-commerce masa depan yang menghadirkan produk kurasi terbaik untuk gaya hidup modern Anda.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Layanan</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Bantuan</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Cara Pembelian</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Pengembalian Barang</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6">Tentang Kami</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Cerita Kami</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Karir</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6">Berlangganan</h4>
              <p className="text-xs text-gray-400 mb-4">Dapatkan info promo terbaru langsung ke inbox Anda.</p>
              <div className="flex gap-2">
                <input placeholder="Email Anda" className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg text-sm w-full outline-none focus:border-indigo-500" />
                <button className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition-colors"><ArrowRight size={18} /></button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Toko Nusantara. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span className="hover:text-indigo-600 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-indigo-600 cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Toast Notification Modern */}
      {toast && (
        <div className="fixed top-24 right-6 bg-white/90 backdrop-blur-md text-gray-800 px-6 py-4 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4 animate-fade-in-down z-[100] max-w-sm">
          <div className="bg-emerald-100 p-2 rounded-full text-emerald-600">
            <CheckCircle size={20} />
          </div>
          <div>
            <h4 className="font-bold text-sm">Notifikasi</h4>
            <p className="text-sm text-gray-500">{toast}</p>
          </div>
          <button onClick={() => setToast(null)} className="text-gray-400 hover:text-gray-600"><X size={16}/></button>
        </div>
      )}
    </div>
  );
}