import React from 'react';
import { ChevronRight } from 'lucide-react';
import oilBottles from '../assets/oil_bottles.png';
import bannerTire from '../assets/banner_tire.png';
import bannerBrake from '../assets/product_brake_red.png';

const banners = [
    {
        title: "Genesis Motor Oils",
        buttonText: "Shop Now",
        color: "bg-[#EEF2FF]",
        btnColor: "bg-[#6C5DD3] text-white",
        image: oilBottles,
        accent: "bg-[#FF7A00]"
    },
    {
        title: "Winter Tires on Sale",
        buttonText: "Browse",
        color: "bg-[#F8F9FA]",
        btnColor: "bg-[#6C5DD3] text-white",
        image: bannerTire,
        accent: "bg-[#FF7A00]"
    },
    {
        title: "Maintenance Parts",
        buttonText: "View All",
        color: "bg-[#EEF2FF]",
        btnColor: "bg-[#6C5DD3] text-white",
        image: bannerBrake,
        accent: "bg-[#FF7A00]"
    }
];

const MiniBanner = ({ banner }) => (
    <div className={`${banner.color} rounded-[32px] p-8 min-h-[220px] flex items-center justify-between group cursor-pointer relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1`}>
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center gap-6 w-[55%]">
            <h3 className="text-[26px] font-black leading-tight text-[#1A1B1E]">{banner.title}</h3>
            <button className={`${banner.btnColor} w-fit px-8 py-3 rounded-xl font-bold flex items-center gap-2 text-[15px] hover:scale-105 transition-all shadow-md active:scale-95 group/btn`}>
                {banner.buttonText}
                <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
        </div>

        {/* Decorative Image */}
        <div className="absolute right-0 bottom-0 w-[55%] h-full flex items-end justify-end p-2 pointer-events-none">
            {/* Orange Accent Circle */}
            <div className={`absolute -right-4 bottom-0 w-32 h-32 ${banner.accent} rounded-full opacity-20 blur-2xl group-hover:scale-150 transition-transform duration-700`}></div>

            <img
                src={banner.image}
                className="relative z-10 w-full h-full object-contain object-bottom scale-110 group-hover:scale-125 transition-transform duration-700 drop-shadow-[-10px_20px_30px_rgba(0,0,0,0.1)]"
                alt={banner.title}
            />
        </div>
    </div>
);

const MiniBanners = () => {
    return (
        <section className="max-w-[1240px] mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {banners.map((banner, idx) => (
                    <MiniBanner key={idx} banner={banner} />
                ))}
            </div>
        </section>
    );
};

export default MiniBanners;
