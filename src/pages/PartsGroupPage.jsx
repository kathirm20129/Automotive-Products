import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Search, Plus, Minus } from 'lucide-react';

const breadcrumbs = [
    { label: "Каталоги оригинальных запчастей", to: "/catalog" },
    { label: "Audi", to: "/catalog" },
    { label: "Поиск по параметрам Audi", to: "/catalog" },
    { label: "Запчасти Audi 80/90/Avant", to: null },
];

const categories = [
    {
        id: 1,
        name: "Двигатель",
        expanded: true,
        children: [
            {
                id: 11,
                name: "Блок картер",
                active: true,
                children: [
                    { id: 111, name: "Вал балансирный, промежуточный" },
                    { id: 112, name: "Вентиляция" },
                    { id: 113, name: "Гильза цилиндра" },
                ],
            },
        ],
    },
    { id: 2, name: "Детали для ТО", expanded: false, children: [] },
    { id: 3, name: "Детали кузова", expanded: false, children: [], highlighted: true },
    { id: 4, name: "Детали салона", expanded: false, children: [] },
    { id: 5, name: "Дополнительное оборудование", expanded: false, children: [] },
    { id: 6, name: "Отопление / кондиционирование", expanded: false, children: [] },
    { id: 7, name: "Рулевое управление", expanded: false, children: [] },
    { id: 8, name: "Система выхлопа", expanded: false, children: [] },
    { id: 9, name: "Система охлаждения", expanded: false, children: [] },
    { id: 10, name: "Топливная система", expanded: false, children: [] },
    { id: 11, name: "Тормозная система", expanded: false, children: [] },
    { id: 12, name: "Трансмиссия", expanded: false, children: [] },
];

const PartsGroupPage = () => {
    const [openIds, setOpenIds] = useState(new Set([1, 11]));
    const [search, setSearch] = useState('');

    const toggle = (id) => {
        setOpenIds(prev => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    const filtered = search.trim()
        ? categories.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
        : categories;

    return (
        <main className="max-w-[1240px] mx-auto px-4 py-8 min-h-screen">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 flex-wrap mb-5">
                {breadcrumbs.map((crumb, idx) => (
                    <React.Fragment key={idx}>
                        {idx > 0 && <ChevronRight size={13} className="text-[#ADB5BD] shrink-0" />}
                        {crumb.to ? (
                            <Link to={crumb.to} className="text-[12px] text-[#6B7280] hover:text-[#6C5DD3] transition-colors">
                                {crumb.label}
                            </Link>
                        ) : (
                            <span className="text-[12px] text-[#1A1B1E] font-medium">{crumb.label}</span>
                        )}
                    </React.Fragment>
                ))}
            </nav>

            {/* Page Title */}
            <h1 className="text-[26px] font-black text-[#1A1B1E] mb-7 tracking-tight">
                Запчасти Audi Audi 80/90/Avant
            </h1>

            {/* Main White Card */}
            <div className="bg-white border border-[#E9ECEF] rounded-[20px] p-6">
                {/* Search */}
                <div className="relative mb-6 max-w-sm">
                    <input
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Поиск по имени группы"
                        className="w-full bg-[#F8F9FA] border border-[#E9ECEF] rounded-xl px-4 py-2.5 pr-10 text-[14px] outline-none focus:border-[#6C5DD3] transition-colors placeholder:text-[#ADB5BD]"
                    />
                    <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#ADB5BD]" />
                </div>

                {/* Category List */}
                <div className="space-y-0 divide-y divide-[#F1F3F5]">
                    {filtered.map((cat) => {
                        const isOpen = openIds.has(cat.id);
                        const hasChildren = cat.children && cat.children.length > 0;

                        return (
                            <div key={cat.id}>
                                {/* Top-level Category Row */}
                                <div
                                    className={`flex items-center gap-3 py-3 cursor-pointer group select-none`}
                                    onClick={() => hasChildren && toggle(cat.id)}
                                >
                                    {/* +/- icon */}
                                    <div className="w-5 h-5 shrink-0 flex items-center justify-center">
                                        {hasChildren ? (
                                            isOpen
                                                ? <Minus size={14} className="text-[#ADB5BD] group-hover:text-[#6C5DD3] transition-colors" />
                                                : <Plus size={14} className="text-[#ADB5BD] group-hover:text-[#6C5DD3] transition-colors" />
                                        ) : (
                                            <Plus size={14} className="text-[#E9ECEF]" />
                                        )}
                                    </div>

                                    {/* Name */}
                                    {cat.highlighted ? (
                                        <span className="text-[14px] font-semibold text-white bg-[#6C5DD3] px-4 py-1 rounded-full leading-tight">
                                            {cat.name}
                                        </span>
                                    ) : (
                                        <span className={`text-[14px] ${hasChildren ? 'font-semibold text-[#1A1B1E]' : 'text-[#1A1B1E]'} group-hover:text-[#6C5DD3] transition-colors`}>
                                            {cat.name}
                                        </span>
                                    )}
                                </div>

                                {/* Sub-categories (level 2) */}
                                {isOpen && hasChildren && (
                                    <div className="ml-8 pb-1">
                                        {cat.children.map((child) => {
                                            const isChildOpen = openIds.has(child.id);
                                            const hasGrandchildren = child.children && child.children.length > 0;

                                            return (
                                                <div key={child.id}>
                                                    <div
                                                        className="flex items-center gap-3 py-2 cursor-pointer group select-none"
                                                        onClick={() => hasGrandchildren && toggle(child.id)}
                                                    >
                                                        <div className="w-4 h-4 shrink-0 flex items-center justify-center">
                                                            {isChildOpen
                                                                ? <Minus size={12} className="text-[#6C5DD3]" />
                                                                : <Plus size={12} className="text-[#ADB5BD] group-hover:text-[#6C5DD3] transition-colors" />
                                                            }
                                                        </div>
                                                        <span className={`text-[14px] font-semibold leading-tight
                                                            ${child.active ? 'text-[#6C5DD3]' : 'text-[#1A1B1E] group-hover:text-[#6C5DD3] transition-colors'}
                                                        `}>
                                                            {child.name}
                                                        </span>
                                                    </div>

                                                    {/* Grandchildren (level 3) */}
                                                    {isChildOpen && hasGrandchildren && (
                                                        <div className="ml-7 pb-1">
                                                            {child.children.map((grandchild) => (
                                                                <Link
                                                                    key={grandchild.id}
                                                                    to="/product"
                                                                    className="block py-2 text-[13px] text-[#6C5DD3] hover:text-[#5A4BB1] hover:underline transition-colors leading-tight"
                                                                >
                                                                    {grandchild.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default PartsGroupPage;
