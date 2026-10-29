import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        landscaping: resolve(__dirname, 'landscaping.html'),
        snowRemoval: resolve(__dirname, 'snow-removal.html'),
        lawncare: resolve(__dirname, 'lawncare.html'),
        treePruning: resolve(__dirname, 'tree-pruning.html'),
        asphaltRepair: resolve(__dirname, 'asphalt-repair.html'),
        treeRemoval: resolve(__dirname, 'tree-removal.html'),
        gutterCleaning: resolve(__dirname, 'gutter-cleaning.html'),
        windowCleaning: resolve(__dirname, 'window-cleaning.html'),
        linePainting: resolve(__dirname, 'parking-lot-line-painting.html')
      }
    }
  }
});
