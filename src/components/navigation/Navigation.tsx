import React, { useState, useEffect } from 'react';
import { NITAWebsite } from '@/main';

// @ts-ignore
import '@/components/navigation/Navigation.css';

NITAWebsite.loadCSS('/out/components/navigation/Navigation.css');

export function TopPanelRoot({ lang = 'english' }: { lang: 'english' | 'japanese' }) {
    const isEnglish = lang === 'english';

    const [langDisplay, setLangDisplay] = useState(false);

    const index = isEnglish ? '/index.html' : '/jp/index.html';
    const oppositeIndex = !isEnglish ? '/index.html' : '/jp/index.html';

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
