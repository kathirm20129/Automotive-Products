import React from 'react';
import categoryImg from '../assets/categoryimg.png';
import {
    Disc,
    Settings,
    Warehouse,
    Square,
    Wrench,
    Wind,
    Droplet,
    FlaskConical,
    CircleDot,
    Battery,
    Lightbulb,
    BarChart3,
    ArrowRight
} from 'lucide-react';

const categories = [
    { icon: Disc, name: "Original Parts", count: "730 products" },
    { icon: Settings, name: "Aftermarket Parts", count: "278 products" },
    { icon: Warehouse, name: "Parts for VAZ, GAZ, KAMAZ", count: "730 products" },
    { icon: Square, name: "Body Parts", count: "730 products" },
    { icon: Wrench, name: "Maintenance Parts", count: "730 products", isActive: true },
    { icon: Wind, name: "Auto Glass", count: "730 products" },
    { icon: Droplet, name: "Motor Oils", count: "730 products" },
    { icon: FlaskConical, name: "Auto Chemicals", count: "730 products" },
    { icon: CircleDot, name: "Wheels & Rims", count: "730 products" },
    { icon: Battery, name: "Batteries", count: "730 products" },
    { icon: Lightbulb, name: "Auto Bulbs", count: "730 products" },
];

const CategoryGrid = () => {
    return (
        <section className="max-w-[1240px] mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white rounded-[32px] overflow-hidden border border-[#E9ECEF] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)]">
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className={`p-9 flex items-center gap-6 border-[#F1F3F5] transition-all cursor-pointer group relative
              ${idx % 3 !== 2 ? 'lg:border-r' : ''} 
              ${idx < 9 ? 'border-b' : ''}
              ${cat.isActive ? 'z-10 shadow-[0_15px_40px_-20px_rgba(108,93,211,0.2)] bg-white transform px-[37px] py-[37px]' : 'hover:bg-[#FDFDFD]'}
            `}
                    >
                        <div className={`shrink-0 transition-transform group-hover:scale-110 ${cat.isActive ? 'text-[#6C5DD3]' : 'text-[#6C5DD3]'}`}>
                            <cat.icon size={36} strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className={`font-bold text-[16px] mb-1 transition-colors ${cat.isActive ? 'text-[#6C5DD3]' : 'text-[#1A1B1E] group-hover:text-[#6C5DD3]'}`}>
                                {cat.name}
                            </h3>
                            <p className="text-[#ADB5BD] text-[13px] font-medium tracking-wide leading-none">{cat.count}</p>
                        </div>
                    </div>
                ))}

                {/* Suppliers Link */}
                <div className="p-9 flex items-center justify-between bg-[#2D3436] text-white cursor-pointer group relative overflow-hidden h-full min-h-[140px]">
                    {/* Background Image Asset */}
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                        <img
                            src={categoryImg}
                            alt="Suppliers Background"
                            className="w-full h-full object-cover opacity-60"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] to-transparent opacity-80"></div>

                    <div className="flex items-center gap-6 relative z-10 w-full pr-12">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20 backdrop-blur-sm">
                            <BarChart3 size={28} />
                        </div>
                        <h3 className="font-bold text-[20px] tracking-tight truncate">For Suppliers</h3>
                    </div>

                    <div className="absolute right-9 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0 relative z-10 group-hover:bg-[#6C5DD3] group-hover:translate-x-1 transition-all duration-300 backdrop-blur-md border border-white/30 shadow-lg">
                        <ArrowRight size={24} className="text-white" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoryGrid;
