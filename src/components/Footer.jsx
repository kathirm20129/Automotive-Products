import React from 'react';
import { MessageSquare } from 'lucide-react';

const navLinks = [
    {
        title: "Company Menu",
        links: ["About Oner", "Details & Information", "News", "Careers", "For Suppliers", "Contact Us"],
    },
    {
        title: "Catalogs",
        links: ["Original Parts", "Aftermarket Parts", "Maintenance Parts", "Motor Oils", "Batteries", "Sale"],
    },
    {
        title: "Help",
        links: ["FAQ", "Online Consultation", "Order Payment", "Order Delivery", "Returns", "Forgot Password"],
    },
    {
        title: "Products & Brands",
        links: ["Brand List", "Popular Products", "Warehouse Stock"],
    },
];

const Footer = () => {
    return (
        <footer className="bg-[#2B2B3D] text-white">
            {/* Main Footer Body */}
            <div className="max-w-[1240px] mx-auto px-4 pt-14 pb-10">
                <div className="flex flex-col lg:flex-row gap-10 justify-between">

                    {/* Navigation Columns */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 flex-1">
                        {navLinks.map((col) => (
                            <div key={col.title}>
                                <h4 className="text-[15px] font-bold text-white mb-5 tracking-tight">{col.title}</h4>
                                <ul className="space-y-3">
                                    {col.links.map((link) => (
                                        <li key={link}>
                                            <a
                                                href="#"
                                                className="text-[13px] text-[#9B9BAE] hover:text-white transition-colors leading-snug block"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Right Card — Consultation + Status */}
                    <div className="lg:w-[240px] shrink-0 flex flex-col gap-4">
                        {/* Online Consultation Card */}
                        <div className="bg-[#3A3A52] rounded-2xl px-5 py-4 flex items-center gap-4 border border-white/5 hover:border-white/10 transition-all cursor-pointer group">
                            <div className="w-10 h-10 rounded-xl bg-[#6C5DD3] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <MessageSquare size={18} className="text-white" />
                            </div>
                            <div>
                                <p className="text-[14px] font-bold text-white leading-tight">Online Consultation</p>
                                <p className="text-[12px] text-[#9B9BAE] mt-0.5">Ask us anything</p>
                            </div>
                        </div>

                        {/* Service Status */}
                        <div className="flex items-start gap-3 px-1">
                            <div className="relative mt-1 shrink-0">
                                <div className="w-2.5 h-2.5 bg-[#27AE60] rounded-full"></div>
                                <div className="absolute inset-0 bg-[#27AE60] rounded-full animate-ping opacity-40"></div>
                            </div>
                            <p className="text-[13px] text-[#9B9BAE] leading-snug">
                                Service is operating in <span className="text-white font-semibold">normal mode</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-[1240px] mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-5">
                    {/* Copyright */}
                    <p className="text-[12px] text-[#6B6B80] whitespace-nowrap">
                        Copyright © ООО «Oner.ru» 2021. All rights reserved.
                    </p>

                    {/* Payment Methods */}
                    <div className="flex items-center gap-3">
                        <span className="text-[12px] text-[#6B6B80] mr-1">We accept payment</span>
                        {/* VISA */}
                        <div className="h-8 px-3 bg-white rounded-md flex items-center justify-center">
                            <span className="text-[#1A1F71] font-black text-[14px] italic tracking-tight">VISA</span>
                        </div>
                        {/* Mastercard */}
                        <div className="h-8 px-2 bg-white rounded-md flex items-center justify-center gap-1">
                            <div className="w-5 h-5 bg-[#EB001B] rounded-full"></div>
                            <div className="w-5 h-5 bg-[#F79E1B] rounded-full -ml-2 opacity-90"></div>
                        </div>
                        {/* МИР */}
                        <div className="h-8 px-3 bg-white rounded-md flex items-center justify-center">
                            <span className="text-[#006A4E] font-black text-[13px]">MIR</span>
                        </div>
                    </div>

                    {/* Legal Links */}
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-[12px] text-[#6B6B80] hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="text-[12px] text-[#6B6B80] hover:text-white transition-colors">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
