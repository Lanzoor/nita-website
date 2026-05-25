import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { NITAWebsite } from '@/main';

// @ts-ignore
import '@/components/navigation/Navigation.css';

NITAWebsite.loadCSS('/out/components/navigation/Navigation.css');

export type SupportedLangs = 'english' | 'japanese';

export function TopPanelRoot({ lang = 'english' }: { lang: SupportedLangs }) {
    const isEnglish = lang === 'english';

    const [langDisplay, setLangDisplay] = useState(false);

    const index = isEnglish ? '/index.html' : '/jp/index.html';

    const langText = `${langDisplay ? '▲' : '▼'} ${isEnglish ? 'Language' : '言語'}`;

    return (
        <div id="top-panel">
            <img src="/assets/nippon_initial_teaching_alphabet.png" />

            <nav>
                <a
                    className="plain col red"
                    href={index}
                >
                    {isEnglish ? 'Home' : 'ホーム'}
                </a>

                <a
                    className="plain col green"
                    href={`${index}#videos`}
                >
                    {isEnglish ? 'Videos' : '動画'}
                </a>

                <a
                    className="plain col yellow"
                    href={`${index}#connections`}
                >
                    {isEnglish ? 'Connections' : 'リンク'}
                </a>

                <a
                    className="plain col blue"
                    href="/scripts"
                >
                    {isEnglish ? 'Scripts' : '台本'}
                </a>
            </nav>

            <button onClick={() => setLangDisplay((prev) => !prev)}>
                {langText}

                {langDisplay && (
                    <div id="language-dropdown">
                        <button
                            className={`language ${isEnglish ? 'current' : ''}`}
                            onClick={() => window.location.replace('/index.html')}
                        >
                            <img src="/assets/countries/united-states.svg" />
                            English
                        </button>
                        <button
                            className={`language ${!isEnglish ? 'current' : ''}`}
                            onClick={() => window.location.replace('/jp/index.html')}
                        >
                            <img src="/assets/countries/japan.svg" />
                            日本語
                        </button>
                    </div>
                )}
            </button>
        </div>
    );
}

export function BottomNavigationRoot({ lang = 'english' }: { lang: SupportedLangs }) {
    return (
        <section id="bottom-navigation">
            <div id="project-info">
                <h1>Nippon Initial Teaching Alphabet project</h1>

                <p>The Nippon Initial Teaching Alphabet project is a project aiming to teach Japanese kids English through the Initial Teaching Alphabet.</p>

                <footer>
                    © 2026 <b>The Nippon Initial Teaching Alphabet project</b>
                    <br />A website built by <a href="https://www.lanzoor.dev">Lanzoor</a> with ♡
                </footer>
            </div>

            <div id="navigation">
                <nav className="navigation-group">
                    <div className="small-header">HOME</div>

                    <a href="/">Home</a>
                </nav>
            </div>
        </section>
    );
}

export function loadRoots(lang: SupportedLangs = 'english') {
    document.addEventListener('DOMContentLoaded', () => {
        let root = document.createElement('div');
        root.id = 'top-panel-root';

        document.body.insertBefore(root, document.querySelector('main')!);
        createRoot(root).render(<TopPanelRoot lang={lang} />);

        root = document.createElement('div');
        root.id = 'bottom-navigation-root';

        document.body.appendChild(root);
        createRoot(root).render(<BottomNavigationRoot lang={lang} />);
    });
}
