import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
   build: {
    lib: {
      entry: 'lib/index.ts',
      name: 'Buzzly',
      fileName: 'Buzzly',
    },
    rollupOptions: {
     
      external: ['react','react-dom','react/jsx-runtime'],
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
    tailwindcss(),
  ],
  
})