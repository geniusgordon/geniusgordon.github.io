---
title: 字體調教心得
date: 2017-03-17
path: /2017-03-17-playing-with-fonts-configuration/
featuredImage: http://i.imgur.com/EHWNWpl.png
---

一陣子沒發文了 QQ

來分享一下最近在 Archlinux 上調教字體的小小心得

主要是設定 powerline 以及 emoji

<!--more-->

## Powerline

[Powerline](https://github.com/powerline/powerline) 是一個很炫的 theme

常用在各種 shell 的 prompt 還有 vim, tmux 的 statusline

![powerline](http://i.imgur.com/NwdBdcK.png)

其中那些三角型都是 unicode 字元    

很容易出現字體不支援的狀況

![no-powerline](http://i.imgur.com/lfWR5f4.png)

很多人的做法都是去做字體檔的[補丁](https://github.com/powerline/fonts)

如果用的是不常見的字體沒人幫做補丁就會很困擾

但我發現那個 repo 裡有一個只包含那些字元的字體 [PowerlineSymbols](https://github.com/powerline/powerline/tree/master/font)

如果系統有自己處理字型 fallback 的話應該就能正常顯示了

這樣就可以自由使用任何字體 + Powerline 了

如果沒有的話可以參考下面的 Fontconfig

## Fontconfig

[Fontconfig](https://www.freedesktop.org/wiki/Software/fontconfig/) 是一個設定字體的庫

大部分現代 Linux 裡的應用都是用這個庫來選擇及渲染字體的

他可以設定系統裡襯線、無襯線、等寬的預設字型

還可以在系統匹配字體時插入別的字體 *(ex: emoji)*

### Font Path

fontconfig 預設會在這兩個目錄底下搜尋字體檔

- /usr/share/fonts/
- ~/.local/share/fonts

可以用 `fc-list` 這個指令來查看系統中安裝了哪些字體

### Fontconfig configuration

fontconfig 主要從以下幾個路徑搜尋設定檔

- /etc/fonts/fonts.conf
- /etc/fonts/conf.d/
- ~/.fonts.conf
- ~/.fonts.conf.d/
- $XDG_CONFIG_HOME/fontconfig/fonts.conf
- $XDG_CONFIG_HOME/fontconfig/conf.d/

*`$XDG_CONFIG_HOME` 是存放使用者各種設定的目錄，預設為 `~/.config`*

*Arch Wiki 說 fontconfig 2.10.1 以後 `~/.fonts.conf` 跟 `~/.fonts.conf` deprecated 了*

Fontconfig 的設定檔使用 xml 的格式

```xml
<!-- fontconfig template -->
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>

  <!-- settings go here -->

</fontconfig>
```

詳細的文件可以用 `man fonts-conf` 來查看

這邊分享一下[我自己的設定](https://github.com/geniusgordon/dotfiles/blob/master/fonts.conf)

主要是拿來設定 emoji 的

```xml
<match>
  <test name="family"><string>sans-serif</string></test>
  <edit name="family" mode="prepend">
    <string>Noto Color Emoji</string>
  </edit>
</match>
```

這段設定的意思是

當我要使用無襯線字體 (sans-serif) 的時候

在前面插入 (prepend) Noto Color Emoji

有點像 css 在設定 font-family

```css
font-family: "Noto Color Emoji", sans-serif;
              ^^^^^^^^^^^^^^^^
      在 sans-serif 前插入 Noto Color Emoji
```

這樣一來不管在什麼地方使用到 emoji

系統都會優先使用 Noto Color Emoji 來渲染

## Color Emoji in Terminal

Linux 裡面常見的 terminal 預設都不支援有顏色的 emoji

![no-color](http://i.imgur.com/SZIGEOQ.png)

後來我在 SO 看到[這篇](http://askubuntu.com/questions/781851/use-emoji-inside-terminal)的這句話

> Color Emojis are not currently supported. Apparently there is a patched WIP version of **libcairo** that allows rendering colored emojis but it isn't stable yet.

找了一下發現 Archlinux 有人做了[這個包](https://aur.archlinux.org/packages/cairo-infinality-ultimate-with-colored-emoji/)

裝了之後他會把原本的 cairo 蓋過去

就可以有漂亮的彩色 emoji 了！

![color-emoji](http://i.imgur.com/umWKd81.png)

## References

- Github: [Powerline](https://github.com/powerline/powerline)
- Arch Wiki: [Font Configuration](https://wiki.archlinux.org/index.php/font_configuration)
- StackOverflow: [Use Emoji Inside Terminal](http://askubuntu.com/questions/781851/use-emoji-inside-terminal)
