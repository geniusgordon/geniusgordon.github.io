---
title: Styling in Gatsby
date: 2017-02-16
path: /styling-in-gatsby/
---

應該有些人有發現

之前一進 Blog 的時候樣式會先跑掉過一下才渲染出來

前幾天把這個問題修掉了

<!--more-->

這算是一個 Server Side Render (SSR) 跟 Styling 問題

## Server Side Render

普通的 React App 通常只有一個很小的 html

所有的東西都是前端跑 javascript 用 React 生出來的

所以在跑 javascript 之前頁面會是空白的

Server Side Render 就是先在 server 上把 React 跑出來的東西存成 html 送出去

這樣在跑 javascript 之前就已經有東西顯示在頁面上了

要做 SSR 是因為如果頁面都是用 javascript 產生的

搜尋引擎可能會看不懂，就沒辦法做 SEO

## Styling

React 做 styling 的方式有好幾種

- inline style:

```javascript
const Content = () => <div style={{ padding: 10 }} />
```

- 直接用 css:

```css
.content {
  padding: 10px;
}
```

```javascript
const Content = () => <div className="content" />
```

- 用 css module:

```css
.content {
  padding: 10px;
}
```

```javascript
import styles from './styles.css';

const Content = () => <div className={styles.content} />
```

- 用 javascript 處理 style

由於大家在寫 CSS 遇到許多問題，像是 Global namespace

就有人提出了 CSS in JS 的 solution

可以參考這個 [slides](https://speakerdeck.com/vjeux/react-css-in-js)

比較紅的 library 有 [aphrodite](https://github.com/Khan/aphrodite), [Glamor](https://github.com/threepointone/glamor/), [radium](https://github.com/FormidableLabs/radium), [styled-components](https://github.com/styled-components/styled-components)

目前看起來 styled-compoents 是我比較喜歡的方法

這是那個作者的 talk，滿不錯的整理了各種 React Styling 的方法

@[youtube](19gqsBc_Cx0)

## SSR + Styling

在做 SSR 的時候，有些人會把 style 從 javascript 裡拉出來

因為就像前面提到的，這樣在 javascript 執行之前就可以看到樣式了

像是 webpack 有一個插件 [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)

他會把所有的 `import styles from './styles.css' 集合起來存成一個檔案

另外各種 CSS in JS 的方法也都有各自處理的方式

像 aphrodite 跟 glamor 的 api 就滿像的 ~~跟本一樣吧~~

```javascript
import { StyleSheetServer } from 'aphrodite';

const { html, css } = StyleSheetServer.renderStatic(() =>
  ReactDOMServer.renderToString(<App/>));
```

```javascript
import { renderStatic } from 'glamor/server'

const { html, css, ids } = renderStatic(() =>
  ReactDOMServer.renderToString(<App/>));
```

styled-components 的 SSR 目前還沒有 public api

跟據這個 [issue](https://github.com/styled-components/styled-components/issues/124) 會在 v2 的時候出來

~~作者去年 12月說一月初會發佈，一月說二月初會發佈~~

目前只能用 issue 裡提到的 workaround

```javascript
import styleSheet from 'styled-components/lib/models/StyleSheet'

/* before each render */
styleSheet.flush()

/* after each render */
styleSheet.rules().map(rule => rule.cssText).join('\n')
```

## Styling in Gatsby

講完這些就可以輕鬆解決我之前頁面剛載入時樣式會跑掉的問題了

因為 Gatsby 有用 extract-text-webpack-plugin

而我用了 styled-components 一開始沒對 SSR 做處理

所以頁面載入時就會先渲染他有 extract 到的一些基本樣式

然後在 javascript 跑起來之後 React 才會把剩下的樣式加進去

解決方式就是上一個段落講的那樣
