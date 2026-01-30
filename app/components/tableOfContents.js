'use client';

import { useState, useEffect, useRef, use } from 'react';
import Link from 'next/link';

const TableOfContents = () => {
    const [activeSection, setActiveSection] = useState(null);
    const observerRef = useRef(null);
    const sections = [
        { id: 'hero', title: 'Introduction' },
    ];

    useEffect(() => {
        if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
            observerRef.current = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            // Update active section when a section comes into view
                            setActiveSection(entry.target.id);
                        }
                    });
                },
                {
                    root: null, // observe the viewport
                    rootMargin: '0px',
                    threshold: 0.5, // trigger when 50% of the section is visible
                }
            );
            sections.forEach((sectionData) => {
                const section = document.getElementById(sectionData.id);
                if (section) {
                    observerRef.current?.observe(section);
                }
            });
        }

        return () => {
            // Cleanup the observer on component unmount
            observerRef.current?.disconnect();
        };
    }, []);

    return (
        <nav className="fixed top-1/8 left-8 w-48 rounded-md bg-white/70 p-4 shadow-lg backdrop-blur-md">
            <ul className="space-y-2">
                {sections.map((section) => (
                    <li key={section.id}>
                        <Link
                            href={`#${section.id}`}
                            className={`block p-2 rounded-md ${
                                activeSection === section.id
                                    ? 'text-white-500'
                                    : 'text-gray-500 hover:text-blue-400'
                            }`}
                        >
                            {section.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents;
