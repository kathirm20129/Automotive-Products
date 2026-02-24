import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, ArrowUpDown, ShoppingCart, ChevronDown, Star } from 'lucide-react';

const breadcrumbs = [
    { label: "Каталог оригинальных запчастей", to: "/catalog" },
    { label: "Audi", to: "#" },
    { label: "Поиск по параметрам Audi", to: "#" },
    { label: "Запчасти Audi Q5", to: "#" },
    { label: "Шайба пламегасящей форсунки дизельной", to: null },
];

const mainParts = [
    {
        supplier: "BMW",
        supplierId: "33208609838",
        rating: 4,
        trusted: true,
        rows: [
            { name: "Прокладка, крышка головки цилиндра", qty: "1 шт.", days: "1 дн.", price: "56 564 ₽", count: 1, highlighted: false, badge: null },
            { name: "Кольцо уплотнительное кл крышки", qty: "3 шт.", days: "2 дн.", price: "62 567 ₽", count: 2, highlighted: true, badge: "Дилер" },
            { name: "Автозапчасти/Сальник вала", qty: "5 шт.", days: "3 дн.", price: "78 560 ₽", count: 1, highlighted: false, badge: null },
        ],
        summary: "от 1 дн.",
        summaryPrice: "от 52 560 ₽",
        moreOffers: 9,
    }
];

const analogueParts = [
    {
        supplier: "BMW",
        supplierId: "33208609838",
        trusted: true,
        rows: [
            { name: "Прокладка уплотнительная крышки ГБЦ", qty: "1 шт.", days: "1 дн.", price: "56 564 ₽", count: 1, highlighted: false, badge: null },
            { name: "Прокладка гбц vag 3.0tdi 12-", qty: "3 шт.", days: "2 дн.", price: "62 567 ₽", count: 2, highlighted: true, badge: "Дилер" },
            { name: "Кольцо уплотнительное 37*13мм AUDI, VW 2010-", qty: "5 шт.", days: "3 дн.", price: "78 560 ₽", count: 1, highlighted: false, badge: null },
        ],
        summary: "от 1 дн.",
        summaryPrice: "от 52 560 ₽",
        moreOffers: 9,
    }
];

const PartTable = ({ groups }) => {
    const [counts, setCounts] = useState({});

    const getCount = (groupIdx, rowIdx, def) => counts[`${groupIdx}-${rowIdx}`] ?? def;
    const setCount = (groupIdx, rowIdx, val) => {
        setCounts(prev => ({ ...prev, [`${groupIdx}-${rowIdx}`]: Math.max(1, val) }));
    };

    return (
        <div className="border border-[#E9ECEF] rounded-[16px] overflow-hidden bg-white">
            {/* Column Headers */}
            <div className="grid grid-cols-[2fr_4fr_1.5fr_1fr_2fr_auto] gap-4 px-6 py-3 bg-[#F8F9FA] border-b border-[#E9ECEF] text-[12px] font-semibold text-[#ADB5BD]">
                <div className="flex items-center gap-1">Производитель и номер <ArrowUpDown size={12} /></div>
                <div className="flex items-center gap-1">Описание <ArrowUpDown size={12} /></div>
                <div className="flex items-center gap-1">Наличие <ArrowUpDown size={12} /></div>
                <div className="flex items-center gap-1">Срок <ArrowUpDown size={12} /></div>
                <div className="flex items-center gap-1">Цена <ArrowUpDown size={12} /></div>
                <div className="w-24"></div>
            </div>

            {groups.map((group, gIdx) => (
                <div key={gIdx}>
                    {/* Supplier Row */}
                    <div className="grid grid-cols-[2fr_4fr_1.5fr_1fr_2fr_auto] gap-4 px-6 py-3 border-b border-[#F1F3F5] items-center bg-white">
                        <div className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-2">
                                <span className="text-[13px] font-black text-[#1A1B1E]">{group.supplier}</span>
                                {group.trusted && (
                                    <span className="text-[10px] bg-[#FF7A00]/10 text-[#FF7A00] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">Рейтинг продаж</span>
                                )}
                            </div>
                            <div className="flex items-center gap-1">
                                <a href="#" className="text-[12px] text-[#6C5DD3] hover:underline">{group.supplierId}</a>
                                <span className="flex items-center gap-0.5 text-[12px] text-[#FF7A00]">
                                    <Star size={11} className="fill-current" />
                                    <span className="font-bold">4/5</span>
                                </span>
                            </div>
                        </div>
                        <div className="text-[13px] text-[#6B7280] col-span-4 font-medium">Надёжный поставщик</div>
                        <div></div>
                    </div>

                    {/* Part Rows */}
                    {group.rows.map((row, rIdx) => (
                        <div
                            key={rIdx}
                            className={`grid grid-cols-[2fr_4fr_1.5fr_1fr_2fr_auto] gap-4 px-6 py-3.5 border-b border-[#F1F3F5] items-center transition-colors
                                ${row.highlighted ? 'bg-[#FFF8F0]' : 'bg-white hover:bg-[#FAFAFA]'}
                            `}
                        >
                            <div></div>
                            <div className="flex items-center gap-2">
                                <span className="text-[13px] text-[#1A1B1E]">{row.name}</span>
                                {row.badge && (
                                    <span className="text-[10px] bg-[#FF7A00] text-white font-bold px-2 py-0.5 rounded-full shrink-0">{row.badge}</span>
                                )}
                            </div>
                            <div className="text-[13px] text-[#1A1B1E] font-medium">{row.qty}</div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-[#27AE60] shrink-0"></div>
                                <span className="text-[13px] text-[#1A1B1E]">{row.days}</span>
                            </div>
                            <div className="text-[14px] font-bold text-[#1A1B1E]">{row.price}</div>
                            <div className="flex items-center gap-1">
                                <div className="flex items-center border border-[#E9ECEF] rounded-xl overflow-hidden">
                                    <button
                                        onClick={() => setCount(gIdx, rIdx, getCount(gIdx, rIdx, row.count) - 1)}
                                        className="w-7 h-8 text-[#6C5DD3] font-bold text-lg hover:bg-[#F1F3F5] transition-colors flex items-center justify-center"
                                    >−</button>
                                    <span className="w-7 h-8 text-[13px] font-bold text-[#1A1B1E] flex items-center justify-center border-x border-[#E9ECEF]">
                                        {getCount(gIdx, rIdx, row.count)}
                                    </span>
                                    <button
                                        onClick={() => setCount(gIdx, rIdx, getCount(gIdx, rIdx, row.count) + 1)}
                                        className="w-7 h-8 text-[#6C5DD3] font-bold text-lg hover:bg-[#F1F3F5] transition-colors flex items-center justify-center"
                                    >+</button>
                                </div>
                                <button className="w-8 h-8 rounded-xl border border-[#E9ECEF] text-[#6C5DD3] flex items-center justify-center hover:bg-[#6C5DD3] hover:text-white hover:border-[#6C5DD3] transition-all active:scale-95">
                                    <ShoppingCart size={15} />
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Summary + Expand Row */}
                    <div className="grid grid-cols-[2fr_4fr_1.5fr_1fr_2fr_auto] gap-4 px-6 py-3 items-center bg-white border-b border-[#F1F3F5] last:border-b-0">
                        <div></div>
                        <button className="flex items-center gap-1 text-[13px] text-[#6C5DD3] font-semibold hover:underline w-fit">
                            Ещё {group.moreOffers} предложений <ChevronDown size={15} />
                        </button>
                        <div></div>
                        <div className="text-[13px] text-[#6B7280]">{group.summary}</div>
                        <div className="text-[13px] text-[#6B7280]">{group.summaryPrice}</div>
                        <div></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const ProductDetailPage = () => {
    return (
        <main className="max-w-[1240px] mx-auto px-4 py-8 min-h-screen">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 flex-wrap mb-6">
                {breadcrumbs.map((crumb, idx) => (
                    <React.Fragment key={idx}>
                        {idx > 0 && <ChevronRight size={14} className="text-[#ADB5BD] shrink-0" />}
                        {crumb.to && idx < breadcrumbs.length - 1 ? (
                            <Link to={crumb.to} className="text-[12px] text-[#6B7280] hover:text-[#6C5DD3] transition-colors">
                                {crumb.label}
                            </Link>
                        ) : (
                            <span className="text-[12px] text-[#1A1B1E] font-medium">{crumb.label}</span>
                        )}
                    </React.Fragment>
                ))}
            </nav>

            {/* Part Header */}
            <div className="mb-8">
                <h1 className="text-[28px] font-black text-[#1A1B1E] tracking-tight mb-1">
                    BOSCH F 00V P01 008
                </h1>
                <p className="text-[14px] text-[#6B7280]">
                    Шайба пламегасящая форсунки дизельной AUDI Q7 4M/4L 3.0/6.0 TDI 06–. TOUAREG 7P5
                </p>
            </div>

            {/* Section — Запрашиваемый номер */}
            <div className="mb-10">
                <div className="flex items-center justify-between mb-5">
                    <h2 className="text-[20px] font-black text-[#1A1B1E]">Запрашиваемый номер</h2>
                    <a href="#" className="flex items-center gap-1.5 text-[13px] text-[#6C5DD3] hover:underline font-medium">
                        <MapPin size={14} />
                        Выбрать пункт выдачи заказов на карте
                    </a>
                </div>
                <PartTable groups={mainParts} />
            </div>

            {/* Section — Аналоги для номера */}
            <div className="mb-10">
                <div className="flex items-center justify-between mb-5">
                    <h2 className="text-[20px] font-black text-[#1A1B1E]">Аналоги для номера</h2>
                </div>
                <PartTable groups={analogueParts} />
            </div>
        </main>
    );
};

export default ProductDetailPage;
