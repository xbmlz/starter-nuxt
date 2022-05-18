## 创建项目

### 简介

[Nuxt 3 - The Hybrid Vue Framework (nuxtjs.org)](https://v3.nuxtjs.org/)

Build your next application with Vue 3 and experience hybrid rendering, powerful data fetching and new features. Nuxt 3 is an open source framework making web development simple and powerful.

- SPA应用：也就是单页应用，这些多是在客户端的应用，不能进行SEO优化（搜索引擎优化）。
- SSR应用：在服务端进行渲染，渲染完成后返回给客户端，每个页面有独立的URL，对SEO友好。

### 新特性

- 更轻量：以现代浏览器为基础的情况下，服务器部署和客户端产物最多减小75倍。
- 更快：用动态服务端代码来优化冷启动。
- Hybird：增量动态生成和其他高级模式现在都成为可能。
- Suspense: 导航前后可在任何组件中获取数据。
- Composition API : 使用Composition API 和 Nuxt3的composables 实现真正的可复用性。
- Nuxt CLI ： 权限的零依赖体验，助你轻松搭建项目和集成模块。
- Nuxt Devtools ：专属调试工具，更多的信息和快速修复，在浏览器中高效工作。
- Nuxt Kit ：全新的基于 TypeScript 和跨版本兼容的模块开发。
- Webpack5 ： 更快的构建速度和更小的构建包，并且零配置。
- Vite：用Vite作为你的打包器，体验轻量级的快速HMR。
- Vue3 ： 完全支持Vue3语法，这一点特别关键。
- TypeScript：由原生TypeScript和ESM构成，没有额外配置步骤。

### 初始化项目

```Bash
# 初始化
npx nuxi init nuxt-starter

cd nuxt-starter

# 安装依赖
pnpm install --shamefully-hoist

# 运行项目
pnpm run dev -- -o

```

![](https://secure2.wostatic.cn/static/xADygXjJk9Vdfo69NpCsa9/image.png)

打开浏览器 [http://localhost:3000](http://localhost:3000)

![](https://secure2.wostatic.cn/static/sCL9uZFGCP6oZkZeeoPpDK/image.png)

### 目录结构

默认目录结构

```Bash
- .nuxt               // 自动生成的目录，用于展示结果
- node_modules        // 项目依赖包存放目录
- .gitignore          // Git的配置目录，比如一些文件不用Git管理就可以在这个文件中配置
- app.vue             // 项目入口文件，你可以在这里配置路由的出口
- nuxt.config.ts      // nuxt项目的配置文件 ，这个里边可以配置Nuxt项目的方法面面
- package-lock.json   // 锁定安装时包的版本，以保证其他人在 npm install时和你保持一致
- package.json        // 包的配置文件和项目的启动调式命令配置
- README.md           // 项目的说明文件
- tsconfig.json       // TypeScript的配置文件

```

新增常用目录

```Bash
- pages               // 开发的页面目录
- components          // 组件目录
- assets              // 静态资源目录
- layouts             // 项目布局目录
```

- **.nuxt**  执行`dev`时生成的目录
- **.output** 执行`build`时生成的目录
- **assets** 用户添加 webpack或者vite打包时得资源保健
    - 样式文件（css、scss等等）
    - 字体文件
- **components** nuxt会自动导入此文件夹下的组件，在页面中可直接引用
    - [https://v3.nuxtjs.org/guide/directory-structure/components](https://v3.nuxtjs.org/guide/directory-structure/components)
- **composables** nuxt会自动导入vue中的组合式API
    - [https://v3.nuxtjs.org/guide/directory-structure/composables](https://v3.nuxtjs.org/guide/directory-structure/composables)
- **layouts** nuxt提供了一种可定制的布局框架
    - [https://v3.nuxtjs.org/guide/directory-structure/layouts](https://v3.nuxtjs.org/guide/directory-structure/layouts)
- **middleware** nuxt提供了一种可定制的路由中间件框架，可定制路由策略
    - [https://v3.nuxtjs.org/guide/directory-structure/middleware](https://v3.nuxtjs.org/guide/directory-structure/middleware)
- **pages** 文件路由，默认路由为index.vue，页面支持`.vue`,`.js`,`.jsx`or`.tsx`
    - [https://v3.nuxtjs.org/guide/directory-structure/pages](https://v3.nuxtjs.org/guide/directory-structure/pages)
- **plugins** 插件目录，nuxt将自动注册插件
- **public** 网站根目录
- **server** 服务端路由

### 完善项目

删除`app.vue` 中的`NuxtWelcome` 组件，新增 `<NuxtPage />`

```HTML
<template>
  <div>
    <NuxtPage />
  </div>
</template>

```

新增`pages/index.vue`

```HTML
<template>
  <div>
    <h1>Index Page</h1>
  </div>
</template>

<script setup>
import {} from "vue";
</script>

<style scoped></style>

```

浏览器打开 [http://localhost:3000](http://localhost:3000)

![](https://secure2.wostatic.cn/static/ajwCD9KdHXneVASW4mtKdM/image.png)

## 集成 windicss

### 介绍

[https://windicss.org/](https://windicss.org/)

Next generation utility-first CSS framework.

### 安装

```Bash
pnpm add nuxt-windicss -D
```

### 使用

修改`nuxt.config.ts`如下

```TypeScript
import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  buildModules: [
    'nuxt-windicss',
  ],
})
```

新增`windi.config.ts`文件

```TypeScript
import { defineConfig } from "windicss/helpers";

export default defineConfig({
  preflight: false,
  extract: {
    include: ["**/*.{vue,html,jsx,tsx}"],
    exclude: ["node_modules", ".git"],
  },
});

```

修改`pages/index.vue`如下

```Vue
<template>
  <div>
    <h1 class="text-red-600">Index Page</h1>
  </div>
</template>

<script setup>
import {} from "vue";
</script>

<style scoped></style>

```

浏览器打开[http://localhost:3000/](http://localhost:3000/)，效果如下

![](https://secure2.wostatic.cn/static/r5SqGUf2fCjKa2otrSUmqU/image.png)



