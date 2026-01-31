"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

const TableOfContents = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSection = '';
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 0 && rect.bottom >= 0) {
                    currentSection = section.id;
                    
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const sections = [
        { id: 'main', title: 'introduction' },
        { id: 'experience', title: 'experience' },
        { id: 'projects', title: 'projects' },
        { id: 'organizations', title: 'organizations' },
    ];

    return (
        <div className="fixed top-1/4 left-8 w-48 rounded-md bg-white/70 p-4 shadow-lg backdrop-blur-md text-center">
            <ul className="space-y-2">
            {sections.map((section) => (
                    <li key={section.id}>
                        <Link
                            href={`#${section.id}`}
                            className={`block p-2 rounded-md ${
                                activeSection === section.id
                                    ? 'text-blue-500 font-bold' // Highlight active section
                                    : 'text-gray-500 hover:text-blue-400' // Default style for inactive sections
                            }`}
                        >
                            {section.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TableOfContents;
