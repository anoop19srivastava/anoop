@echo off
cd /d "%~dp0"
set PATH=C:\Program Files\nodejs;%PATH%
echo =======================================================
echo Push React Project to GitHub: anoop19srivastava/anoop
echo =======================================================
echo.
set /p TOKEN="Enter your GitHub Personal Access Token (PAT): "
node push-with-token.mjs %TOKEN%
echo.
pause
