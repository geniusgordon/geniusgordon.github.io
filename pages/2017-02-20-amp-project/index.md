---
title: AMP project
date: 2017-02-20
path: /2017-02-20-amp-project/
featuredImage: https://i.imgur.com/lqxEEtF.png
---

最近用 Google Search 的時候很常看到搜尋結果有一個 <span style="display: inline-block; width: 20px; height: 20px; line-height: 20px; text-align: center; border-radius: 50%; color: white; background-color: black">⚡</span> AMP 的標記

前一陣子好奇查了一下發現是拿來加速手機瀏覽網頁的東西

<!--more-->

然後又剛好看到 geniustanley 大大的這篇 [blog](https://geniustanley.github.io/2017/02/20/Google-AMP-1/)

就想說來動手玩看看

## What is AMP?

AMP 簡單分成三個部份

### AMP HTML

用他[規定](https://www.ampproject.org/docs/reference/spec)好的方式來寫 HTML

像是使用 AMP 自訂的 tag ，如 `<amp-img>`

然後跟其他方法結合來達到 performance 的提昇

### AMP JS

[AMP JS library](https://github.com/ampproject/amphtml/tree/master/src) 裡面實做了各種 [AMP 加速的方法](https://www.ampproject.org/learn/how-amp-works/)

像是 lazy-loaded resources

如果用了 `<amp-img>` 他只會先抓使用者可見範圍裡面的圖

這樣可以用最快的時間產生最少需要的畫面

讓使用者感受到更少的畫面延遲

### Google AMP Cache

看到 Cache 這個字就是跟快有關係

[Google AMP Cache](https://developers.google.com/amp/cache/) 會把合格的 AMP 網頁用 cdn 的方式存起來

總之就是更快

### AMP-ify

看完 AMP 的介紹之後就是要動手把自己的 Blog AMP-ify 一下

Google 了一下發現 Gatsby 社群裡有人已經寫了一個小小的 [script](https://github.com/chiedo/gatsby-amp-starter-blog/blob/master/ampify.js) 把網頁轉 AMP

我就拿來做了一點小修改 (`amp-img` 的 layout 跟 `<a href>` 的連結)

然後套用在自己的 Blog

大概經過半小時的努力

終於讓我的 Blog 在 Google Search 的時候也會有潮潮的閃電啦

![AMP](https://i.imgur.com/f4sPDUn.png)

## References

- AMP: [What is AMP](https://www.ampproject.org/learn/about-amp/)
- Geniustanley: [Google AMP](https://geniustanley.github.io/2017/02/20/Google-AMP-1/)
- Gastby AMP Starter: [ampify.js](https://github.com/chiedo/gatsby-amp-starter-blog/blob/master/ampify.js)
