@echo off
setlocal
title Build modern web frameworks

cd /d "%~dp0"

echo ============================================
echo Building framework applications
echo ============================================

call :build angular
if errorlevel 1 goto :error

call :build react
if errorlevel 1 goto :error

call :build vue
if errorlevel 1 goto :error

call :build svelte
if errorlevel 1 goto :error

echo.
echo ============================================
echo All applications built successfully.
echo ============================================
pause
exit /b 0

:build
echo.
echo --------------------------------------------
echo Building %~1...
echo --------------------------------------------

pushd "%~dp0%~1"
call npm run build
set "RESULT=%ERRORLEVEL%"
popd

if not "%RESULT%"=="0" exit /b %RESULT%
exit /b 0

:error
echo.
echo ============================================
echo Build failed.
echo Check the error message above.
echo ============================================
pause
exit /b 1
