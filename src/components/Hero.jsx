import React from 'react';
import heroImage from '../assets/hero_banner_exact.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="max-w-[1240px] mx-auto px-4 py-8">
            <div className="relative rounded-[48px] overflow-hidden group shadow-2xl">
                {/* Background Banner */}
                <div className="relative min-h-[460px] flex items-center bg-[#1A1A1A]">
                    {/* The Banner Image */}
                    <img
                        src={heroImage}
                        alt="Promo Banner"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Content Overlay */}
                    <div className="relative z-20 px-16 w-full flex flex-col justify-center h-full">
                        <h1 className="text-[44px] md:text-[56px] font-black text-white leading-tight mb-4 tracking-tight">
                            Original Motor Oils <br />
                            at a discount of <span className="inline-block bg-[#FF6B35] px-4 py-1 rounded-2xl ml-2">15%</span>
                        </h1>
                        <p className="text-white/70 text-[18px] mb-12 font-medium tracking-wide">
                            Promotion valid from June 1 to June 30, 2021
                        </p>

                        {/* Pagination Indicators */}
                        <div className="flex gap-4">
                            <div className="w-16 h-1 bg-white rounded-full"></div>
                            <div className="w-16 h-1 bg-white/30 rounded-full"></div>
                            <div className="w-16 h-1 bg-white/30 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Left Navigation Arrow */}
                <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/95 rounded-xl flex items-center justify-center shadow-lg hover:bg-white transition-all z-30 group/btn border border-black/5">
                    <ChevronLeft size={20} className="text-[#333] group-hover/btn:-translate-x-0.5 transition-transform" />
                </button>

                {/* Right Navigation Arrow */}
                <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/95 rounded-xl flex items-center justify-center shadow-lg hover:bg-white transition-all z-30 group/btn border border-black/5">
                    <ChevronRight size={20} className="text-[#333] group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
            </div>
        </section>
    );
};

export default Hero;
