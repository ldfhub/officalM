import { defineConfig } from "umi";

export default defineConfig({
  define: {
    'process.env.ENV': 'dev',
    'process.env.apiUrl': 'http://localhost:3301'
  },
  proxy: {
    '/api': {
      'target': 'http://127.0.0.1:3300',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  }
})
