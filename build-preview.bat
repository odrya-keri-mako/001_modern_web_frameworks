@echo off
setlocal
title Preview built applications

cd /d "%~dp0"

echo ============================================
echo Checking build output...
echo ============================================

if not exist "%~dp0angular\dist\angular\browser\index.html" (
  echo ERROR: Angular build not found.
  echo Run build.bat first.
  goto :error
)

if not exist "%~dp0react\dist\index.html" (
  echo ERROR: React build not found.
  echo Run build.bat first.
  goto :error
)

if not exist "%~dp0vue\dist\index.html" (
  echo ERROR: Vue build not found.
  echo Run build.bat first.
  goto :error
)

if not exist "%~dp0svelte\dist\index.html" (
  echo ERROR: Svelte build not found.
  echo Run build.bat first.
  goto :error
)

echo.
echo ============================================
echo Starting all 6 applications...
echo ============================================
echo.
echo Initial   : http://localhost:8000
echo AngularJS : http://localhost:8001
echo Angular   : http://localhost:8002
echo React     : http://localhost:8003
echo Vue       : http://localhost:8004
echo Svelte    : http://localhost:8005
echo.

rem Static applications
start "Initial preview" cmd /k "cd /d ""%~dp0initial"" && npx --yes http-server@14.1.1 . -p 8000 -o"
start "AngularJS preview" cmd /k "cd /d ""%~dp0angularJS"" && npx --yes http-server@14.1.1 . -p 8001 -o"

rem Built Angular application
start "Angular preview" cmd /k "cd /d ""%~dp0angular"" && npx --yes http-server@14.1.1 dist/angular/browser -p 8002 -o"

rem Vite production previews
start "React preview" cmd /k "cd /d ""%~dp0react"" && npm run preview -- --open --port 8003 --strictPort"
start "Vue preview" cmd /k "cd /d ""%~dp0vue"" && npm run preview -- --open --port 8004 --strictPort"
start "Svelte preview" cmd /k "cd /d ""%~dp0svelte"" && npm run preview -- --open --port 8005 --strictPort"

echo All preview commands have been launched.
echo Close the opened terminal windows to stop the servers.
echo.
pause
exit /b 0

:error
echo.
echo Preview was not started.
pause
exit /b 1
