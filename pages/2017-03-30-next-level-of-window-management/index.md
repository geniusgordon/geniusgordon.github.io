---
title: Next Level of Window Management
date: 2017-03-30
path: /2017-03-30-next-level-of-window-management/
featuredImage: https://i.imgur.com/DtjbjrI.png
---

平常沒事會逛 Reddit 的 [unixporn](https://www.reddit.com/r/unixporn/)，看看大家都怎麼客製化自己的 linux dekstop

發現很多人都會用 [i3](https://i3wm.org/) - 一個視窗管理神器

最近想說來用看看，不用還好，用了直接進入了 Linux Geek 的新境界

<!--more-->

## Window Manager

i3 是一種 window manager，先來紹介一下 window manager 是什麼

Window manager 簡稱 wm，就跟字面上的意思一樣是負責管理視窗的東西，主要可以分成兩種

**Compositing Window Manager**

![Messy Desktop](https://i.imgur.com/eKEZkV8.png)

常見的視窗管理都是這類的，桌面像桌子，視窗像紙一樣重疊擺在桌上

**Tiling Window Manager**

![Oranized drawer](https://i.imgur.com/f3ccPE5.png)

Tiling window manager 不重疊視窗，把畫面分成一格一格的，比較像桌子的抽屜


## Why Tiling Window Manager?

寫程式的人常常需要一邊開編輯器一邊開瀏覽器查東西，可能還要開很多有的沒有的東西

像我在寫 react-native 的時候就需要開
- Android emulator
- Chrome
- 一個 Terminal 開 vim、一個 dev server、一個看 log
- 有時候可能還要開一個 Redux Debugger

如果在加上一些通訊軟體 (Messenger、Line、Telegram、Slack)

視窗一多，桌面的視窗很容易就變的亂亂的

雖然 terminal 的部分可以用 tmux 處理

gnome 也有 workspace 可以開多個桌面

但是傳統的 window manager 常常會需要自己移動跟縮放視窗避免他們擋到別人

有時候還是會覺得用起來卡卡的

Tiling window manager 就可以很輕鬆的排版視窗，然後用各種快截鍵做高效率的操作

用起來大概就像最上面那張圖一樣

## i3

我第一個接觸的 tiling wm，其他的還沒試過，無法做比較

分享一下自己的[設定](https://github.com/geniusgordon/dotfiles)跟客製化的東西

很多都是參考 unixporn 上面分享的，目前還在持續改進中

## Status bar

i3 的 status bar 用了他自己的 [i3bar protocol](https://i3wm.org/docs/i3bar-protocol.html)

做法是在 i3 config 裡設定
```
bar {
  status_command <command>
}
```

那個 command 要 output 一個 infinite json array, 最簡單的例子如下

```json
[
  [{"full_text": " 17: 10"}, {"full_text": "  89%"}],
  [{"full_text": " 17: 11"}, {"full_text": "  88%"}],
  [{"full_text": " 17: 12"}, {"full_text": "  87%"}],
  ...
```

他就會把他顯示在 status bar 上

![i3bar example](https://i.imgur.com/pfBri9v.png)

所以可以自己寫一個 script，寫任何你想要顯示在 status bar 上面的東西

我用了 [i3blocks](https://github.com/vivien/i3blocks) 來輔助設定，他可以搭配一個 config file，比較好管理自己寫的 script

我的目前長這樣，還滿普通的

![i3blocks](https://i.imgur.com/bMwz9Fi.png)

## Notification

用了 i3 就不會有像 Gnome, Ubuntu Unity 那種預設的通知泡泡

雖然沒有別人幫你做好的東西，要自己設定，但這是缺點也是優點，就是可以自由的客製化

我用的是 [dunst](https://github.com/dunst-project/dunst)，他滿容易設定的，目前長這樣，也是滿普通的

![dunst](https://i.imgur.com/l1gQKyp.png)

還有一些 icon 問題沒處理，像上面這個 telegram 就只有顯示系統預設的 icon

## Lock Screen

這個我還沒設定完，目前在用 i3 官方的 [i3lock](https://github.com/i3/i3lock)

我還有看到一些別人擴充 i3lock 做的東西，像是 [i3lock-fancy](https://github.com/meskarune/i3lock-fancy) 把桌面變模糊來當背景

![i3lock-fancy](https://raw.githubusercontent.com/meskarune/i3lock-fancy/master/screenshot.png)

不過他的 script 跑的有點慢，我就沒用了

## 結語

我覺得 i3 跟 arch linux 還有 vim 有點像，都是不好上手，但是用了之後會很爽

入坑 i3，又 Geek 了一個階層呢
