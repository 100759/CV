@echo off
echo 正在设置Git远程仓库...
echo.

echo 1. 添加远程仓库...
git remote add origin https://github.com/100759/CV.git

echo.
echo 2. 检查远程仓库...
git remote -v

echo.
echo 3. 添加所有文件...
git add .

echo.
echo 4. 提交更改...
git commit -m "Initial commit: 个人简历网站"

echo.
echo 5. 推送到远程仓库...
git push -u origin main

echo.
echo Git设置完成！
echo 如果遇到错误，请查看Git操作指南.md文件
pause
