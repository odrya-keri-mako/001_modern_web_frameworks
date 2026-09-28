@echo off
setlocal
title Install modern web frameworks

cd /d "%~dp0"

echo ============================================
echo Installing dependencies
echo ============================================

call :install angular
if errorlevel 1 goto :error

call :install react
if errorlevel 1 goto :error

call :install vue
if errorlevel 1 goto :error

call :install svelte
if errorlevel 1 goto :error

echo.
echo ============================================
echo All dependencies installed successfully.
echo ============================================
pause
exit /b 0

:install
echo.
echo --------------------------------------------
echo Installing %~1...
echo --------------------------------------------

pushd "%~dp0%~1"
call npm install
set "RESULT=%ERRORLEVEL%"
popd

if not "%RESULT%"=="0" exit /b %RESULT%
exit /b 0

:error
echo.
echo ============================================
echo Installation failed.
echo Check the error message above.
echo ============================================
pause
exit /b 1
