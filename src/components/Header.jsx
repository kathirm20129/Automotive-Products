import logoImg from '../assets/Logo.png';
import { Search, MapPin, Phone, User } from 'lucide-react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className="w-full bg-white font-sans">
            {/* Top Row */}
            <div className="max-w-[1240px] mx-auto px-4 py-4 flex items-center justify-between gap-6">
                {/* Logo */}
                <div className="flex items-center gap-3 shrink-0 cursor-pointer group">
                    <img
                        src={logoImg}
                        alt="ONER.RU Logo"
                        className="w-10 h-10 object-contain transition-transform group-hover:scale-105"
                    />
                    <span className="text-[28px] font-black italic tracking-tighter text-[#6C5DD3] leading-none uppercase">
                        ONER.RU
                    </span>
                </div>

                {/* Search Bar */}
                <div className="flex-1 max-w-[480px]">
                    <div className="relative flex items-center bg-[#F1F3F5] rounded-xl border border-transparent focus-within:border-[#6C5DD3] transition-all">
                        <input
                            type="text"
                            placeholder="Введите номер запчасти или VIN"
                            className="w-full bg-transparent px-5 py-3.5 outline-none text-[14px] text-[#1A1B1E] placeholder:text-[#ADB5BD]"
                        />
                        <div className="pr-5">
                            <Search size={22} className="text-[#6C5DD3] cursor-pointer hover:scale-110 transition-transform" />
                        </div>
                    </div>
                </div>

                {/* Info Icons */}
                <div className="flex items-center gap-8 shrink-0">
                    {/* Location */}
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <MapPin size={20} className="text-[#6C5DD3] group-hover:-translate-y-0.5 transition-transform" />
                        <span className="text-[14px] font-medium text-[#1A1B1E] group-hover:text-[#6C5DD3] transition-colors">Санкт-Петербург</span>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <Phone size={20} className="text-[#6C5DD3] group-hover:rotate-12 transition-transform" />
                        <span className="text-[14px] font-bold text-[#1A1B1E] group-hover:text-[#6C5DD3] transition-colors leading-none">+7 (347) 229-46-45</span>
                    </div>

                    {/* Login */}
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <User size={20} className="text-[#6C5DD3] group-hover:scale-110 transition-transform" />
                        <span className="text-[14px] font-medium text-[#1A1B1E] group-hover:text-[#6C5DD3] transition-colors">Вход / Регистрация</span>
                    </div>
                </div>
            </div>

            {/* Navigation & Cart Row */}
            <Navbar />
        </header>
    );
};

export default Header;
