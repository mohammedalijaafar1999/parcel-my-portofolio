// vite.config.js
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
const { resolve } = require("path");

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      entry: "main.js",
      inject: {
        data: {
          nav: `<nav class="menu">
          <div class="menu__item">
            <a href="/" class="menu__item-link">Home</a>
            <div class="marquee">
              <div class="marquee__inner-wrap">
                <div class="marquee__inner" aria-hidden="true">
                  <span>Frank Tower</span>
                  <div
                    class="marquee__img"
                    style="background-image: url(https://picsum.photos/300/200)"
                  ></div>
                  <span>Dom Dom</span>
                  <div
                    class="marquee__img"
                    style="background-image: url(https://picsum.photos/300/200)"
                  ></div>
                  <span>Santa Maria</span>
                  <div
                    class="marquee__img"
                    style="background-image: url(https://picsum.photos/300/200)"
                  ></div>
                  <span>Big Molly</span>
                  <div
                    class="marquee__img"
                    style="background-image: url(https://picsum.photos/300/200)"
                  ></div>
                  <!-- <span>Frank Tower</span>
                  <div
                    class="marquee__img"
                    style="background-image: url(https://picsum.photos/300/200)"
                  ></div>
                  <span>Dom Dom</span>
                  <div
                    class="marquee__img"
                    style="background-image: url(https://picsum.photos/300/200)"
                  ></div>
                  <span>Santa Maria</span>
                  <div
                    class="marquee__img"
                    style="background-image: url(https://picsum.photos/300/200)"
                  ></div>
                  <span>Big Molly</span>
                  <div
                    class="marquee__img"
                    style="background-image: url(https://picsum.photos/300/200)"
                  ></div> -->
                </div>
                <!--/marquee__inner-->
              </div>
              <!--/marquee__inner-wrap-->
            </div>
            <!--/marquee-->
          </div>
          <!--/menu__item-->
          <div class="menu__item">
            <a href="/Work.html" class="menu__item-link">Work</a>
            <div class="marquee">
              <div class="marquee__inner-wrap">
                <div class="marquee__inner" aria-hidden="true">
                  <span>Frank Tower</span>
                  <div
                    class="marquee__img"
                    style="background-image: url(https://picsum.photos/300/200)"
                  ></div>
                  <span>Dom Dom</span>
                  <div
                    class="marquee__img"
                    style="background-image: url(https://picsum.photos/300/200)"
                  ></div>
                  <span>Santa Maria</span>
                  <div
                    class="marquee__img"
                    style="background-image: url(https://picsum.photos/300/200)"
                  ></div>
                  <span>Big Molly</span>
                  <div
                    class="marquee__img"
                    style="background-image: url(https://picsum.photos/300/200)"
                  ></div>
                  <!-- <span>Frank Tower</span>
                  <div
                    class="marquee__img"
                    style="background-image: url(https://picsum.photos/300/200)"
                  ></div>
                  <span>Dom Dom</span>
                  <div
                    class="marquee__img"
                    style="background-image: url(https://picsum.photos/300/200)"
                  ></div>
                  <span>Santa Maria</span>
                  <div
                    class="marquee__img"
                    style="background-image: url(https://picsum.photos/300/200)"
                  ></div>
                  <span>Big Molly</span>
                  <div
                    class="marquee__img"
                    style="background-image: url(https://picsum.photos/300/200)"
                  ></div> -->
                </div>
                <!--/marquee__inner-->
              </div>
              <!--/marquee__inner-wrap-->
            </div>
            <!--/marquee-->
          </div>
          <!--/menu__item-->
          <!-- ... -->
        </nav>
        <!--/menu-->`,
        },
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        admin: resolve(__dirname, "admin/index.html"),
      },
    },
  },
});
