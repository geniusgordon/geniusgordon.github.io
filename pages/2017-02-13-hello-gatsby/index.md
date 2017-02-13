---
title: Hello Gatsby
date: "2017-02-13"
path: "/2017-02-13-hello-gatsby/"
featuredImage: "https://i.imgur.com/R3RjKw2.png"
---

每次都說要寫個小blog簡單紀錄自己學習的東西

最後都是不了了之

這次大概也是QQ吧

<!--more-->

## Static Site Generator

之前有用過 [Jekyll](https://github.com/jekyll/jekyll) 跟 [Hexo](https://github.com/hexojs/hexo)

這次用的是用最新潮 ~~Hype~~ 的 React 寫的 [Gatsby](https://github.com/gatsbyjs/gatsby)

我是在 React Conf 2016 的一個 Lightning Talk 看到他的

@[youtube](RFkNRKL6ZoE)

最近要重新開始寫 Blog 的時候就想說來用看看

用起來感覺超爽

引用一下官網的 Why use Gatsby:

1. **No-refresh page transitions**
  
  用 React 寫的 Blog 直接就是一個 SPA，瀏覧文章換頁的時候不會像傳統 Web 一樣要重 Load 頁面，非常流暢

2. **The awesome React.js component model**

  可以用 React Component 寫 Blog，真的潮 ~~Hype~~

3. **Live editing on every part of your site. Dramatically speed development.**

  最重要的是，Webpack 的 hot reload，在寫文章跟改樣式的時候都可以存檔時自動刷新，超爽

## Setup

1. 安裝 Gatsby `npm install -g gatsby`
2. 建立 Blog `gatsby new [name] [starter]`

Starter 就是別人寫好的 Gatsby Template，官方也有提供一些:

* [Simple blog](https://github.com/gatsbyjs/gatsby-starter-blog)
* [Simple documentation site](https://github.com/gatsbyjs/gatsby-starter-documentation)

3. 進到 blog 裡面跑 `gatsby develop` 他會在 [localhost:8000](localhost:8000) 跑開發版的 Blog，就可以開始爽用 hot reload 來寫東西 
4. 要發佈的時候跑 `gatsby build` 他會把所有東西編好放在 `public/` 底下，然後可以用 `gatsby serve-build` 來測試

## Structure

* `config.toml`: Blog 的設定檔，可以用 `import { config } from 'config'` 拿到
* `pages/`: 這個資料夾底下的東西都會變成 Blog 的頁面，除了檔名底線開頭的以外，而 `_template` 會變成同一層目錄頁面的模板
* (optional) `gatsby-browser.js` 可以監聽一些事件:
  * Export `onRouteUpdate` function 可以監聽 React Router，像是拿來觸發 Google Analytics

## 結語

基本上就是這樣

希望用了一個這麼爽的 static site generator

我就可以養成寫 Blog 的習慣QQ

*[SPA]: Single Page Application
