import React, { useState } from 'react';
import { Star, ShoppingCart, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import prodBrakeRed from '../assets/product_brake_red.png';
import prodTire from '../assets/product_tire.png';
import prodBrakeDrilled from '../assets/product_1.png';
import prodBrakePads from '../assets/product_brake_pads.png';
import prodGenesisOil from '../assets/product_genesis_oil.png';
import oilBottles from '../assets/oil_bottles.png';

// Product sets per section
const automaolaProducts = [
    { id: 1, name: "Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.", sku: "Артикул: 153789", price: "2 334 ₽", oldPrice: "2 864 ₽", rating: 4.0, reviews: 51, image: prodBrakeRed },
    { id: 2, name: "Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.", sku: "Артикул: 153789", price: "2 334 ₽", oldPrice: "2 864 ₽", rating: 4.0, reviews: 51, image: prodTire },
    { id: 3, name: "Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.", sku: "Артикул: 153789", price: "2 334 ₽", oldPrice: "2 864 ₽", rating: 4.0, reviews: 51, image: prodBrakeDrilled },
];

const recommendedProducts = [
    { id: 1, name: "Genesis TITAN FD 5W-40, 1 л. Масло моторное.", sku: "Артикул: 153789", price: "2 334 ₽", oldPrice: "2 864 ₽", rating: 4.0, reviews: 51, image: prodGenesisOil },
    { id: 2, name: "Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.", sku: "Артикул: 153789", price: "2 334 ₽", oldPrice: "2 864 ₽", rating: 4.0, reviews: 51, image: prodBrakeRed },
    { id: 3, name: "Тормозной диск с колодками, комплект.", sku: "Артикул: 153789", price: "2 334 ₽", oldPrice: "2 864 ₽", rating: 4.0, reviews: 51, image: prodBrakePads },
    { id: 4, name: "Шина летняя 205/55 R16, 1 шт.", sku: "Артикул: 153789", price: "2 334 ₽", oldPrice: "2 864 ₽", rating: 4.0, reviews: 51, image: prodTire },
];

const frequentProducts = [
    { id: 1, name: "Тормозной диск с колодками, комплект.", sku: "Артикул: 153789", price: "2 334 ₽", oldPrice: "2 864 ₽", rating: 4.0, reviews: 51, image: prodBrakePads },
    { id: 2, name: "Шина летняя 205/55 R16, 1 шт.", sku: "Артикул: 153789", price: "2 334 ₽", oldPrice: "2 864 ₽", rating: 4.0, reviews: 51, image: prodTire },
    { id: 3, name: "Genesis TITAN FD 5W-40, 1 л. Масло моторное.", sku: "Артикул: 153789", price: "2 334 ₽", oldPrice: "2 864 ₽", rating: 4.0, reviews: 51, image: prodGenesisOil },
    { id: 4, name: "Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.", sku: "Артикул: 153789", price: "2 334 ₽", oldPrice: "2 864 ₽", rating: 4.0, reviews: 51, image: prodBrakeRed },
];

const productsBySection = {
    "Автомасла": automaolaProducts,
    "Рекомендуем": recommendedProducts,
    "Часто продаваемые": frequentProducts,
};

const StarRating = ({ rating, reviews }) => (
    <div className="flex items-center gap-1.5">
        <div className="flex">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    size={13}
                    className={i < Math.round(rating) ? "text-[#FF7A00] fill-[#FF7A00]" : "text-[#DEE2E6] fill-[#DEE2E6]"}
                />
            ))}
        </div>
        <span className="text-[13px] font-bold text-[#1A1B1E]">{rating}</span>
        <span className="text-[13px] text-[#ADB5BD]">({reviews})</span>
    </div>
);

const ProductCard = ({ product }) => (
    <div className="bg-white border border-[#E9ECEF] rounded-[24px] p-5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group flex flex-col">
        <Link to="/product" className="aspect-square mb-4 overflow-hidden flex items-center justify-center p-3 bg-[#FAFAFA] rounded-[16px] block cursor-pointer">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
        </Link>
        <div className="space-y-2 flex-1 flex flex-col">
            <p className="text-[12px] text-[#ADB5BD] font-medium">{product.sku}</p>
            <StarRating rating={product.rating} reviews={product.reviews} />
            <Link to="/product" className="font-semibold text-[#1A1B1E] text-[14px] leading-snug line-clamp-2 flex-1 hover:text-[#6C5DD3] transition-colors cursor-pointer block">
                {product.name}
            </Link>
            <div className="flex items-center justify-between pt-3 mt-auto">
                <div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-[22px] font-black text-[#1A1B1E]">{product.price}</span>
                        <span className="text-[13px] text-[#ADB5BD] line-through">{product.oldPrice}</span>
                    </div>
                </div>
                <button className="w-9 h-9 rounded-xl border border-[#E9ECEF] text-[#6C5DD3] flex items-center justify-center hover:bg-[#6C5DD3] hover:text-white hover:border-[#6C5DD3] transition-all active:scale-95">
                    <ShoppingCart size={18} />
                </button>
            </div>
        </div>
    </div>
);

const SectionProducts = ({ title, showAllText = "Все товары" }) => {
    const isAutomaolaSection = title === "Автомасла";
    const products = productsBySection[title] || recommendedProducts;

    return (
        <section className="max-w-[1240px] mx-auto px-4 py-6">
            {/* Section Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-[28px] font-black text-[#1A1B1E] tracking-tight">{title}</h2>
                <button className="flex items-center gap-2 text-[#1A1B1E] px-5 py-2.5 rounded-xl font-bold text-[14px] hover:bg-[#F1F3F5] transition-all group border border-[#E9ECEF]">
                    {showAllText}
                    <ChevronRight size={17} className="text-[#6C5DD3] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Product Grid */}
            <div className={`grid gap-5 ${isAutomaolaSection ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}`}>
                {/* Promo Card – only for Автомасла */}
                {isAutomaolaSection && (
                    <div className="bg-gradient-to-br from-[#7B6FD8] to-[#5B4EC8] rounded-[24px] p-7 flex flex-col justify-between text-white relative overflow-hidden group min-h-[400px]">
                        <div className="relative z-10">
                            <h3 className="text-[26px] font-black leading-tight">
                                Автомасла №1 <br />
                                от официальных <br />
                                дилеров
                            </h3>
                        </div>
                        {/* Oil bottles image */}
                        <div className="absolute bottom-0 left-0 right-0 h-[220px] pointer-events-none">
                            <img
                                src={oilBottles}
                                alt="Oil Bottles"
                                className="w-full h-full object-contain object-bottom transition-transform group-hover:scale-110 duration-700"
                            />
                        </div>
                        {/* Orange accent */}
                        <div className="absolute -bottom-8 right-0 w-40 h-40 bg-[#FF7A00] rounded-full opacity-20 blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
                    </div>
                )}

                {/* Product Cards */}
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default SectionProducts;
