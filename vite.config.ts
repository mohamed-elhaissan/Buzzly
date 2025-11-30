import {defineConfig} from 'vite'
import tailwindcss from '@tailwindcss/vite'
import dts from "vite-plugin-dts";
import {resolve} from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
    build: {
        sourcemap: false,
        lib: {
            entry: resolve(__dirname, 'src/lib/index.ts'),
            name: 'Buzzly',
            fileName: 'Buzzly',
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime', 'tailwindcss'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react/jsx-runtime': 'jsxRuntime',
                },
            },
        },
    },
    plugins: [
        dts({
            rollupTypes: true,
            tsconfigPath: "./tsconfig.app.json",
        }),
        react(),
        tailwindcss(),
    ],

})