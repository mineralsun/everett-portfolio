import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
        build: {
            outDir: 'build',
        },
        server: {
            proxy: {
                "/api":'http://localhost:5579',
            }
        },
        plugins: [react()],
        'mineralsun.github.io': "https://github.com/mineralsun/mineralsun.github.io",
    };
});
