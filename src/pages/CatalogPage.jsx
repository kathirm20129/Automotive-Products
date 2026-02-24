import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

// Brands per letter exactly as in the Figma
const brandsByLetter = {
    A: [{ name: "ABARTH" }, { name: "Alfa Romeo" }, { name: "Audi", active: true }],
    B: [{ name: "BMW Motorrad" }, { name: "BMW" }, { name: "Baw" }, { name: "Buick" }],
    C: [{ name: "Cadillac" }, { name: "Chevrolet" }, { name: "Chrysler" }, { name: "Citroen" }],
    D: [{ name: "Dacia" }, { name: "Daewoo" }, { name: "Daewoo" }, { name: "Dodge" }],
    F: [{ name: "FAW" }, { name: "Fiat Professional" }, { name: "Fiat" }, { name: "Ford" }, { name: "Foton Trucks" }],
    G: [{ name: "GMC" }, { name: "Geely" }, { name: "Great Wall" }],
    H: [{ name: "Holden" }, { name: "Honda Moto" }, { name: "Honda" }, { name: "Howo" }, { name: "Hummer" }, { name: "Hyundai" }],
    J: [{ name: "Holden" }, { name: "Honda Moto" }, { name: "Honda" }, { name: "Howo" }, { name: "Hummer" }, { name: "Hyundai" }],
    K: [{ name: "ABARTH" }, { name: "Alfa Romeo" }, { name: "Audi" }],
    L: [{ name: "BMW Motorrad" }, { name: "BMW" }, { name: "Baw" }, { name: "Buick" }],
    M: [{ name: "Cadillac" }, { name: "Chevrolet" }, { name: "Chrysler" }, { name: "Citroen" }],
    N: [{ name: "Dacia" }, { name: "Daewoo" }, { name: "Daewoo" }],
    O: [{ name: "ABARTH" }, { name: "Alfa Romeo" }, { name: "Audi" }],
    P: [{ name: "BMW Motorrad" }, { name: "BMW" }, { name: "Baw" }, { name: "Buick" }],
    Q: [{ name: "Cadillac" }, { name: "Chevrolet" }, { name: "Chrysler" }, { name: "Citroen" }],
    R: [{ name: "Dacia" }, { name: "Daewoo" }, { name: "Daewoo" }],
};

// Four exact columns as in Figma
const columns = [
    ['A', 'B', 'C', 'D'],
    ['F', 'G', 'H', 'J'],
    ['K', 'L', 'M', 'N'],
    ['O', 'P', 'Q', 'R'],
];

const BrandCard = ({ letter }) => {
    const brands = brandsByLetter[letter] || [];
    return (
        <div className="bg-white border border-[#E9ECEF] rounded-[16px] p-5 hover:shadow-sm transition-all">
            <div className="flex gap-4 items-start">
                {/* Letter Badge */}
                <div className="w-9 h-9 rounded-xl bg-[#F1F0FE] flex items-center justify-center shrink-0">
                    <span className="text-[16px] font-black text-[#6C5DD3] leading-none">{letter}</span>
                </div>
                {/* Brand List */}
                <ul className="mt-1 space-y-[6px]">
                    {brands.map((brand, idx) => (
                        <li key={idx}>
                            <Link
                                to="/parts"
                                className={`text-[13px] leading-tight block transition-colors hover:text-[#6C5DD3]
                                    ${brand.active ? 'text-[#6C5DD3] font-semibold' : 'text-[#1A1B1E]'}
                                `}
                            >
                                {brand.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const CatalogPage = () => {
    const [vinQuery, setVinQuery] = useState('');
    const [bodyQuery, setBodyQuery] = useState('');

    return (
        <main className="max-w-[1240px] mx-auto px-4 py-10 min-h-screen">
            {/* Page Title */}
            <h1 className="text-[28px] font-black text-[#1A1B1E] mb-10 tracking-tight">
                Catalog of Original Auto Parts
            </h1>

            {/* Two Search Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
                {/* VIN Search */}
                <div className="bg-white rounded-[20px] border border-[#E9ECEF] p-6 shadow-sm">
                    <p className="text-[14px] font-semibold text-[#1A1B1E] mb-4">
                        Search model by VIN number:
                    </p>
                    <div className="relative">
                        <input
                            type="text"
                            value={vinQuery}
                            onChange={(e) => setVinQuery(e.target.value)}
                            placeholder="Enter VIN"
                            className="w-full bg-[#F8F9FA] border border-[#E9ECEF] rounded-xl px-4 py-3 pr-14 text-[14px] outline-none focus:border-[#6C5DD3] transition-colors placeholder:text-[#ADB5BD]"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#6C5DD3] rounded-lg flex items-center justify-center hover:bg-[#5A4BB1] transition-colors active:scale-95">
                            <Search size={16} className="text-white" />
                        </button>
                    </div>
                    <p className="text-[11px] text-[#ADB5BD] mt-2">
                        Example: WAUB5481N1N11054
                    </p>
                </div>

                {/* Body Code Search */}
                <div className="bg-white rounded-[20px] border border-[#E9ECEF] p-6 shadow-sm">
                    <p className="text-[14px] font-semibold text-[#1A1B1E] mb-4">
                        Search model by body code/number:
                    </p>
                    <div className="relative">
                        <input
                            type="text"
                            value={bodyQuery}
                            onChange={(e) => setBodyQuery(e.target.value)}
                            placeholder="Enter body code/number"
                            className="w-full bg-[#F8F9FA] border border-[#E9ECEF] rounded-xl px-4 py-3 pr-14 text-[14px] outline-none focus:border-[#6C5DD3] transition-colors placeholder:text-[#ADB5BD]"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#6C5DD3] rounded-lg flex items-center justify-center hover:bg-[#5A4BB1] transition-colors active:scale-95">
                            <Search size={16} className="text-white" />
                        </button>
                    </div>
                    <p className="text-[11px] text-[#ADB5BD] mt-2">
                        Example: AGH30-01S9H4
                    </p>
                </div>
            </div>

            {/* Alphabetical Brand Catalog */}
            <div>
                <h2 className="text-[18px] font-bold text-[#1A1B1E] mb-7">
                    Search model by manufacturer catalog:
                </h2>

                {/* 4-column layout exactly like Figma */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {columns.map((colLetters, colIdx) => (
                        <div key={colIdx} className="flex flex-col gap-4">
                            {colLetters.map((letter) => (
                                <BrandCard key={letter} letter={letter} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default CatalogPage;
