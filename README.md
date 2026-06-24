# 📷 二维码照片画廊

扫二维码 → 看照片 → 下滑浏览更多人。H5 单页，适配 Android / iOS。

## 🚀 快速开始

### 1. 调整人物数据

编辑 `data.js`，按你的需求修改人物信息：

```js
const PEOPLE_DATA = [
  {
    id: 1,                              // 编号（对应二维码 ?person=1）
    name: "小明",                        // 姓名
    photo: "photos/xiaoming.jpg",       // 照片路径
    description: "喜欢摄影和旅行",        // 简介（可为空）
    tags: ["摄影", "旅行", "咖啡"]        // 标签（可为空数组）
  },
  // ... 复制粘贴来加更多人
];
```

### 2. 准备照片

两种方式：

- **方式 A（推荐）**：把照片放到 `photos/` 文件夹，在 `data.js` 中把 `photo` 改成对应文件名
- **方式 B**：打开 `generate-photos.html`，一键生成占位图，下载后放入 `photos/` 文件夹

> 💡 如果没有照片文件也不影响 — 页面会自动用 Canvas 生成漂亮的彩色占位图。

### 3. 本地预览

直接用浏览器打开 `index.html`，加参数测试：

```
index.html                  → 不定位，从顶部开始
index.html?person=1         → 自动滚动到第 1 个人
index.html?person=2         → 自动滚动到第 2 个人
```

### 4. 生成二维码

打开 `qr-codes.html`：
1. 先在顶部输入框填入你的部署网址
2. 二维码会自动生成
3. 直接截图或用浏览器打印（每码一页 A4）

---

## 🌐 部署到 GitHub Pages（永久免费）

### 第一步：创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)，新建仓库（名字随意，如 `photo-gallery`）
2. 仓库设为 **Public**

### 第二步：上传文件

把整个项目文件夹的内容上传到仓库（拖拽即可或 git push）：

```
你的仓库/
├── index.html
├── qr-codes.html
├── data.js
├── generate-photos.html
├── photos/
│   ├── person1.jpg
│   ├── person2.jpg
│   └── person3.jpg
└── README.md
```

### 第三步：开启 Pages

1. 仓库 → Settings → Pages
2. Source 选 **Deploy from a branch** → 选 `main` 分支 → 点 Save
3. 等 1-2 分钟，页面就部署好了
4. 访问地址：`https://你的用户名.github.io/仓库名/`

### 第四步：更新二维码

1. 打开 `qr-codes.html`
2. 在顶部输入框填入：`https://你的用户名.github.io/仓库名`
3. 二维码自动更新，截图或打印即可

---

## 📱 在手机上测试

### 方法 1：直接访问
部署后手机浏览器直接打开 `https://你的用户名.github.io/仓库名/?person=1`

### 方法 2：扫码测试
1. 在电脑上打开 `qr-codes.html`
2. 用手机扫其中一个二维码
3. 页面会自动打开并定位到对应的人

### 方法 3：本地局域网测试
```bash
# 在项目目录下启动本地服务器（任选一种）
python -m http.server 8080        # Python
npx serve .                       # Node.js
```
手机和电脑在同一 WiFi 下，访问 `http://电脑IP:8080`

---

## 🔧 常见操作

| 操作 | 怎么做 |
|------|--------|
| **加人** | 在 `data.js` 里复制一段 `{...}` ，改 id/name/photo |
| **删人** | 在 `data.js` 里删掉对应那一段 |
| **换照片** | 替换 `photos/` 里的文件（保持文件名不变），或改 `data.js` 里的 `photo` 路径 |
| **加字段** | 在 `data.js` 每人加字段，在 `index.html` 渲染函数里加对应 HTML |
| **改样式** | 编辑 `index.html` 中 `<style>` 里的 CSS |
| **从 3 人扩展到 30 人** | `data.js` 粘贴 27 段配置，放 27 张照片进 `photos/`，完成 |

---

## 🛠 技术说明

- **纯静态**：HTML + CSS + JS，无框架，不依赖服务器
- **数据驱动**：所有人物信息集中在 `data.js`，改数据不改代码
- **Canvas 降级**：照片加载失败自动生成彩色占位图，不会白屏
- **QR 码**：使用 qrcodejs 库动态生成，无需预生成图片
- **适配**：iOS Safari / Android Chrome / 微信内置浏览器均已考虑

---

## 📁 文件说明

| 文件 | 作用 |
|------|------|
| `index.html` | 🎯 主画廊页（扫码后打开的页面） |
| `qr-codes.html` | 📱 二维码展示 + 打印页 |
| `data.js` | ⭐ 人物数据配置（你主要编辑的文件） |
| `generate-photos.html` | 🎨 占位照片生成工具 |
| `photos/` | 🖼 放照片的文件夹 |
