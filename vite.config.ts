import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server:{
    open:true,
    proxy: {
      '/proxy': {
        target: 'https://m.umu.cn', // 接口的域名
        secure: true, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        rewrite: path => path.replace(/^\/proxy/, ''),
        configure: (proxy, _options) => {
          proxy.on('proxyRes', (proxyRes, req, res) => {
               
          var cookies = proxyRes.headers['set-cookie'];
          var cookieRegex = /domain=umu.cn;?/;
          
          if (cookies) {
              var newCookie = cookies.map(function(cookie) {
              if (cookieRegex.test(cookie)) {
                    return cookie.replace(cookieRegex, '');
              }
              return cookie;
            });

          delete proxyRes.headers['set-cookie'];
          proxyRes.headers['set-cookie'] = newCookie;
          }
      });
      }
      },
    }
  }
})
