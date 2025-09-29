# Git操作指南

由于终端编码问题，请按照以下步骤手动操作：

## 1. 初始化Git仓库（如果还没有初始化）

```bash
git init
```

## 2. 添加远程仓库

```bash
git remote add origin https://github.com/100759/CV.git
```

## 3. 检查远程仓库是否添加成功

```bash
git remote -v
```

## 4. 添加所有文件到暂存区

```bash
git add .
```

## 5. 提交更改

```bash
git commit -m "Initial commit: 个人简历网站"
```

## 6. 推送到远程仓库

```bash
git push -u origin main
```

## 如果遇到问题

### 问题1：如果main分支不存在
```bash
git branch -M main
git push -u origin main
```

### 问题2：如果远程仓库已存在内容
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### 问题3：如果推送被拒绝
```bash
git push -f origin main
```

## 推荐使用方式

1. **使用VS Code的集成终端**：
   - 打开VS Code
   - 按 `Ctrl + `` 打开终端
   - 在终端中执行上述命令

2. **使用Git Bash**：
   - 右键项目文件夹
   - 选择"Git Bash Here"
   - 执行上述命令

3. **使用命令提示符**：
   - 按 `Win + R`，输入 `cmd`
   - 切换到项目目录：`cd "C:\Users\Administrator\Desktop\cn简历"`
   - 执行上述命令

## 项目文件说明

项目包含以下主要文件：
- `package.json` - 项目配置和依赖
- `src/` - 源代码目录
  - `components/` - React组件
  - `App.tsx` - 主应用组件
  - `main.tsx` - 应用入口
- `index.html` - HTML模板
- `tailwind.config.js` - Tailwind CSS配置
- `vite.config.ts` - Vite构建配置

## 后续操作

推送成功后，您可以：
1. 在GitHub上查看代码
2. 设置GitHub Pages部署
3. 邀请协作者
4. 创建Issues和Pull Requests

## 部署到GitHub Pages

1. 在GitHub仓库设置中启用Pages
2. 选择部署源为main分支
3. 设置构建命令：`npm run build`
4. 设置输出目录：`dist`
5. 访问生成的URL查看网站
