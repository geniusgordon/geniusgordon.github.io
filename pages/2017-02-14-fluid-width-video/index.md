---
title: Fluid Width Video
date: 2017-02-14
path: /2017-02-14-fluid-width-video/
featuredImage: https://i.imgur.com/n2IZyte.png
---

昨天發完文用手機看發現影片長寬沒有 Responsive

今天趕緊來修一下

發現有一些小事情要注意

<!--more-->

通常在網頁裡放影片有兩種方法

```html
<video width="400" height="300" ... ></video>
<iframe width="400" height="300" ... ></iframe>
```

但是這樣直接把長寬寫死就不 Responsive

很容易跟上面那張圖一樣影片凸出去

這兩種嵌影片的方式分別有不同的做法

## \<video\>

用 `<video>` 的話非常簡單

可以直接用百分比設定

高度就會根據 video source 等比例自動縮放

```css
video {
  width: 100%;
  height: auto;
}
```
## \<iframe\>

嵌入 Youtube 之類的影片通常是用 `<iframe>`

`<iframe>` 不會隨著內容物縮放長寬

所以如果用跟剛剛一樣的方式設定就會變成這樣

![iframe](https://i.imgur.com/5ovTTT9.png)

解決辦法就是在 iframe 外面包一層 div

然後把 div 設定成有 Responsive 的 16:9

再讓 iframe 隨著他縮放

```html
<div class="video-wrapper">
  <iframe src="..."></iframe>
</div>
```

```css
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

## References

- Css Tricks: [Fluid Width Video](https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php)
- Bootstrap: [Responsive Embed](https://getbootstrap.com/components/#responsive-embed)

