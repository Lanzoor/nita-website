import { createRoot } from 'react-dom/client';
import { TopPanelRoot } from '@/components/navigation/Navigation';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.createElement('div');
    root.id = 'top-panel';

    document.body.insertBefore(root, document.querySelector('main')!);
    createRoot(root).render(<TopPanelRoot lang="japanese" />);
});
