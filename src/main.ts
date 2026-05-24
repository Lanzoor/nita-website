export namespace NITAWebsite {
    export function loadCSS(href: string) {
        try {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            document.head.appendChild(link);
            console.info(`successfully injected <link> tag for ${href}
if the styles somehow don't load, please ensure that the correct CSS file is injected`);
        } catch (error) {
            console.error(`failed to inject <link> tag for ${href}:\n\t`, error, `\nthis may cause weird styles when components are loaded`);
        }
    }
}
