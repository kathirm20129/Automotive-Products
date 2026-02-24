import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import product1 from '../assets/product_1.png';

const products = [
    {
        id: 1,
        name: "Ventilated Brake Disc",
        sku: "SKU: 12345678",
        price: "$28",
        oldPrice: "$38",
        rating: 4.8,
        reviews: 12,
        image: product1
    },
    {
        id: 2,
        name: "Battery 60Ah 540A",
        sku: "SKU: 87654321",
        price: "$66",
        oldPrice: "$75",
        rating: 4.5,
        reviews: 8,
        image: product1
    },
    {
        id: 3,
        name: "Synthetic Oil Filter",
        sku: "SKU: 11223344",
        price: "$10",
        oldPrice: "$14",
        rating: 4.9,
        reviews: 24,
        image: product1
    },
    {
        id: 4,
        name: "Platinum Spark Plugs (Set of 4)",
        sku: "SKU: 55667788",
        price: "$22",
        oldPrice: "$29",
        rating: 4.7,
        reviews: 15,
        image: product1
    }
];

const ProductCard = ({ product }) => (
    <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-xl transition-all duration-300 group cursor-pointer relative">
        <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 p-4"
            />
        </div>

        <div className="flex items-center gap-1 mb-2">
            <Star size={14} className="fill-secondary text-secondary" />
            <span className="text-xs font-bold text-navy">{product.rating}</span>
            <span className="text-xs text-gray-400">({product.reviews} reviews)</span>
        </div>

        <h3 className="font-bold text-navy text-sm mb-1 line-clamp-2 h-10 group-hover:text-primary transition-colors">
            {product.name}
        </h3>
        <p className="text-[10px] text-gray-400 mb-4">{product.sku}</p>

        <div className="flex items-end justify-between">
            <div>
                <span className="text-gray-400 text-xs line-through block italic">{product.oldPrice}</span>
                <span className="text-xl font-black text-navy">{product.price}</span>
            </div>
            <button className="bg-primary text-white p-2.5 rounded-lg hover:bg-blue-700 transition-all shadow-md active:scale-90">
                <ShoppingCart size={20} />
            </button>
        </div>

        {/* Badge */}
        <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">
            -%
        </div>
    </div>
);

const ProductGrid = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h2 className="text-2xl font-black text-navy uppercase tracking-tight">Popular Products</h2>
                    <div className="h-1 w-12 bg-primary mt-1"></div>
                </div>
                <button className="text-primary font-bold text-sm hover:underline">
                    View All
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;
