'use client'

import { Fragment, useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Home from '../Home/Home'
import { Link } from 'react-router-dom'
import style from './navBar.module.css'

const navigation = {
    categories: {
        en: [
            {
                id: 'women',
                name: 'Women',
                featured: [
                    {
                        name: 'New Arrivals',
                        href: '#',
                        imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                        imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                    },
                    {
                        name: 'Basic Tees',
                        href: '#',
                        imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                        imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                    },
                ],
                sections: [
                    {
                        id: 'clothing',
                        name: 'Clothing',
                        items: [
                            { name: 'Tops', href: '#' },
                            { name: 'Dresses', href: '#' },
                            { name: 'Pants', href: '#' },
                            { name: 'Denim', href: '#' },
                            { name: 'Sweaters', href: '#' },
                            { name: 'T-Shirts', href: '#' },
                            { name: 'Jackets', href: '#' },
                            { name: 'Activewear', href: '#' },
                            { name: 'Browse All', href: '#' },
                        ],
                    },
                    {
                        id: 'accessories',
                        name: 'Accessories',
                        items: [
                            { name: 'Watches', href: '#' },
                            { name: 'Wallets', href: '#' },
                            { name: 'Bags', href: '#' },
                            { name: 'Sunglasses', href: '#' },
                            { name: 'Hats', href: '#' },
                            { name: 'Belts', href: '#' },
                        ],
                    },
                    {
                        id: 'brands',
                        name: 'Brands',
                        items: [
                            { name: 'Full Nelson', href: '#' },
                            { name: 'My Way', href: '#' },
                            { name: 'Re-Arranged', href: '#' },
                            { name: 'Counterfeit', href: '#' },
                            { name: 'Significant Other', href: '#' },
                        ],
                    },
                ],
            },
            // ... other categories for 'en'
        ],
        ar: [
            {
                id: 'women',
                name: 'نساء',
                featured: [
                    {
                        name: 'وصل حديثاً',
                        href: '#',
                        imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                        imageAlt: 'نماذج جالسة ظهرًا إلى ظهر، ترتدي تي شيرت أساسي باللونين الأسود والعظمي.',
                    },
                    {
                        name: 'تي شيرتات أساسية',
                        href: '#',
                        imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                        imageAlt: 'صورة مقربة لحزمة تي شيرت الخريف الأساسية بألوان الأبيض المائل للصفرة، والخرّدة، والزيتون، والأسود.',
                    },
                ],
                sections: [
                    {
                        id: 'clothing',
                        name: 'ملابس',
                        items: [
                            { name: 'بلوزات', href: '#' },
                            { name: 'فساتين', href: '#' },
                            { name: 'بنطلونات', href: '#' },
                            { name: 'جينز', href: '#' },
                            { name: 'سترات صوفية', href: '#' },
                            { name: 'تي شيرتات', href: '#' },
                            { name: 'معاطف', href: '#' },
                            { name: 'ملابس رياضية', href: '#' },
                            { name: 'تصفح الجميع', href: '#' },
                        ],
                    },
                    {
                        id: 'accessories',
                        name: 'إكسسوارات',
                        items: [
                            { name: 'ساعات', href: '#' },
                            { name: 'محافظ', href: '#' },
                            { name: 'حقائب', href: '#' },
                            { name: 'نظارات شمسية', href: '#' },
                            { name: 'قبعات', href: '#' },
                            { name: 'أحزمة', href: '#' },
                        ],
                    },
                    {
                        id: 'brands',
                        name: 'علامات تجارية',
                        items: [
                            { name: 'فول نيلسون', href: '#' },
                            { name: 'ماي واي', href: '#' },
                            { name: 'ري-أرانجد', href: '#' },
                            { name: 'كاونترفيت', href: '#' },
                            { name: 'شريك الحياة', href: '#' },
                        ],
                    },
                ],
            },
            // ... other categories for 'ar'
        ],
    },
    pages: {
        en: [
            { name: 'Contact Us', href: 'contactus' },
        ],
        ar: [
            { name: 'اتصل بنا', href: 'contactus' },
        ],
    },
}

export default function CurrentNav() {
    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState('en'); // 'en' for English, 'ar' for Arabic

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'ar' : 'en'));
    };

    return <>
        <div className="bg-white">
            {/* Mobile menu */}
            <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                />

                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel
                        transition
                        className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                    >
                        <div className="flex px-4 pb-2 pt-5">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Links */}
                        <TabGroup className="mt-2">
                            <div className="border-b border-gray-200">
                                <TabList className="-mb-px flex space-x-8 px-4">
                                    {navigation.categories[language].map((category) => (
                                        <Tab
                                            key={category.name}
                                            className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 no-underline data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                                        >
                                            {category.name}
                                        </Tab>
                                    ))}
                                </TabList>
                            </div>
                            <TabPanels as={Fragment}>
                                {navigation.categories[language].map((category) => (
                                    <TabPanel key={category.name} className="space-y-10 px-4 pb-8 pt-10 z-100">
                                        <div className="grid grid-cols-2 gap-x-4">
                                            {category.featured.map((item) => (
                                                <div key={item.name} className="group relative text-sm">
                                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                        <img alt={item.imageAlt} src={item.imageSrc} className="object-cover object-center" />
                                                    </div>
                                                    <a href={item.href} className="mt-6 block font-medium text-gray-900 no-underline">
                                                        <span aria-hidden="true" className="absolute inset-0 z-10" />
                                                        {item.name}
                                                    </a>
                                                    <p aria-hidden="true" className="mt-1">
                                                        Shop now
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        {category.sections.map((section) => (
                                            <div key={section.name}>
                                                <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                                                    {section.name}
                                                </p>
                                                <ul
                                                    role="list"
                                                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                    className="mt-6 flex flex-col space-y-6"
                                                >
                                                    {section.items.map((item) => (
                                                        <li key={item.name} className="flow-root">
                                                            <a href={item.href} className="-m-2 block p-2 text-gray-500 no-underline">
                                                                {item.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </TabPanel>
                                ))}
                            </TabPanels>
                        </TabGroup>

                        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                            {navigation.pages[language].map((page) => (
                                <div key={page.name} className="flow-root">
                                    <Link to={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                                        {page.name}
                                    </Link>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                            <div className="flow-root">
                                <a href="#" className="-m-2 block p-2 font-medium text-gray-900 no-underline">
                                    Sign in
                                </a>
                            </div>
                            <div className="flow-root">
                                <a href="#" className="-m-2 block p-2 font-medium text-gray-900 no-underline">
                                    Create account
                                </a>
                            </div>
                            <div className="flow-root">
                                <a href="#" className="-m-2 block p-2 font-medium text-gray-900 no-underline">
                                    My Account
                                </a>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            {/* Desktop menu */}
            <header className="relative bg-white z-1">
                <p className={style.navBar + " flex h-10 items-center justify-center indigo-600 px-4 text-sm font-medium sm:px-6 lg:px-8"}>
                    Get free delivery on orders over $100
                </p>

                <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            <button
                                type="button"
                                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <a href="#">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        alt=""
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        className="h-8 w-auto"
                                    />
                                </a>
                            </div>

                            {/* Flyout menus */}
                            <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-8">
                                    {navigation.categories[language].map((category) => (
                                        <Popover key={category.name} className="flex">
                                            {({ open }) => (
                                                <>
                                                    <div className="relative flex">
                                                        <PopoverButton
                                                            className={`relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium text-gray-700 no-underline ${open ? 'text-indigo-600' : ''
                                                                }`}
                                                        >
                                                            {category.name}
                                                            <span
                                                                className={`absolute inset-x-0 -bottom-px h-0.5 transition duration-200 ease-out ${open ? 'bg-indigo-600' : ''
                                                                    }`}
                                                                aria-hidden="true"
                                                            />
                                                        </PopoverButton>
                                                    </div>

                                                    <PopoverPanel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                                        <div
                                                            className="absolute inset-0 top-1/2 bg-white shadow"
                                                            aria-hidden="true"
                                                        />

                                                        <div className="relative bg-white">
                                                            <div className="mx-auto max-w-7xl px-8">
                                                                <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                                        {category.featured.map((item) => (
                                                                            <div key={item.name} className="group relative text-base sm:text-sm">
                                                                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                                                    <img
                                                                                        alt={item.imageAlt}
                                                                                        src={item.imageSrc}
                                                                                        className="object-cover object-center"
                                                                                    />
                                                                                </div>
                                                                                <a href={item.href} className="mt-6 block font-medium text-gray-900 no-underline">
                                                                                    <span aria-hidden="true" className="absolute inset-0 z-10" />
                                                                                    {item.name}
                                                                                </a>
                                                                                <p aria-hidden="true" className="mt-1">
                                                                                    Shop now
                                                                                </p>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                    <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                                                        {category.sections.map((section) => (
                                                                            <div key={section.name}>
                                                                                <p id={`${section.id}-heading`} className="font-medium text-gray-900">
                                                                                    {section.name}
                                                                                </p>
                                                                                <ul role="list" aria-labelledby={`${section.id}-heading`} className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                                    {section.items.map((item) => (
                                                                                        <li key={item.name} className="flex">
                                                                                            <a href={item.href} className="hover:text-gray-800 no-underline">
                                                                                                {item.name}
                                                                                            </a>
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </PopoverPanel>
                                                </>
                                            )}
                                        </Popover>
                                    ))}
                                    {navigation.pages[language].map((page) => (
                                        <a
                                            key={page.name}
                                            href={page.href}
                                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 no-underline"
                                        >
                                            {page.name}
                                        </a>
                                    ))}
                                </div>
                            </PopoverGroup>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800 no-underline">
                                        Sign in
                                    </a>
                                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800 no-underline">
                                        Create account
                                    </a>
                                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800 no-underline">
                                        My Account
                                    </a>
                                </div>

                                {/* <div className="hidden lg:ml-8 lg:flex">
                                    <a href="#" className="flex items-center text-gray-700 hover:text-gray-800 no-underline">
                                        <img
                                            alt=""
                                            src="https://tailwindui.com/img/flags/flag-canada.svg"
                                            className="block h-auto w-5 flex-shrink-0"
                                        />
                                        <span className="ml-3 block text-sm font-medium">CAD</span>
                                    </a>
                                </div> */}

                                {/* Search */}
                                {/* <div className="flex lg:ml-6">
                                    <a href="#" className="p-2 text-gray-400 hover:text-gray-500 no-underline">
                                        <span className="sr-only">Search</span>
                                        <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
                                    </a>
                                </div> */}

                                {/* Wishlist */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <a href="#" className="group -m-2 flex items-center p-2 no-underline">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                                        </svg>

                                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                        <span className="sr-only">items in cart, view bag</span>
                                    </a>
                                </div>
                                {/* Cart */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <a href="#" className="group -m-2 flex items-center p-2 no-underline">
                                        <ShoppingBagIcon
                                            aria-hidden="true"
                                            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        />
                                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                        <span className="sr-only">items in cart, view bag</span>
                                    </a>
                                </div>
                                <button onClick={toggleLanguage} className="ml-4 p-2 text-sm font-medium text-gray-700 hover:text-gray-800">
                                    {language === 'en' ? 'عربي' : 'English'}
                                </button>
                            </div>
                        </div>
                    </div>
                </nav >
            </header >
        </div >
    </>
}
