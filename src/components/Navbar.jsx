import React from 'react';
import { ShoppingCart, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="w-full bg-white border-b border-[#F1F3F5]">
            <div className="max-w-[1240px] mx-auto px-4 py-3 flex items-center justify-between">
                {/* Left side: Catalog and Nav Links */}
                <div className="flex items-center gap-3 min-w-0 flex-1">
                    {/* Catalog Button */}
                    <button className="shrink-0 bg-[#6C5DD3] text-white px-6 py-3 rounded-xl flex items-center gap-3 font-bold text-[14px] hover:bg-[#5A4BB1] transition-all active:scale-95 shadow-sm">
                        <LayoutGrid size={18} />
                        All Categories
                    </button>

                    {/* Navigation Links */}
                    <ul className="flex items-center gap-0 overflow-hidden">
                        <li>
                            <a href="#" className="px-3 py-2.5 rounded-xl text-[13px] font-bold text-[#1A1B1E] hover:text-[#6C5DD3] hover:bg-[#F8F9FA] transition-all whitespace-nowrap">
                                Maintenance Parts
                            </a>
                        </li>
                        <li>
                            <a href="#" className="px-3 py-2.5 rounded-xl text-[13px] font-bold text-[#1A1B1E] hover:text-[#6C5DD3] hover:bg-[#F8F9FA] transition-all whitespace-nowrap">
                                Motor Oils
                            </a>
                        </li>
                        <li>
                            <Link to="/catalog" className="px-3 py-2.5 rounded-xl text-[13px] font-bold bg-[#F1F3F5] text-[#1A1B1E] transition-all whitespace-nowrap hover:text-[#6C5DD3]">
                                Original Parts
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="px-3 py-2.5 rounded-xl text-[13px] font-bold text-[#1A1B1E] hover:text-[#6C5DD3] hover:bg-[#F8F9FA] transition-all whitespace-nowrap">
                                Aftermarket Parts
                            </a>
                        </li>
                        <li>
                            <a href="#" className="px-3 py-2.5 rounded-xl text-[13px] font-bold text-[#1A1B1E] hover:text-[#6C5DD3] hover:bg-[#F8F9FA] transition-all whitespace-nowrap">
                                Bulbs
                            </a>
                        </li>
                        <li>
                            <a href="#" className="px-3 py-2.5 rounded-xl text-[13px] font-bold text-[#1A1B1E] hover:text-[#6C5DD3] hover:bg-[#F8F9FA] transition-all whitespace-nowrap">
                                Batteries
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Right side: Cart */}
                <button className="flex items-center gap-3 bg-[#F1F3F5] px-6 py-3 rounded-xl hover:bg-[#E9ECEF] transition-all group active:scale-95">
                    <div className="relative">
                        <ShoppingCart size={22} className="text-[#6C5DD3] group-hover:-translate-y-0.5 transition-transform" />
                        <span className="absolute -top-2.5 -right-2.5 bg-[#FF6B35] text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                            5
                        </span>
                    </div>
                    <span className="font-bold text-[#1A1B1E] text-[15px]">Cart</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
