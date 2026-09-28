@echo off
setlocal
title Start modern web frameworks

cd /d "%~dp0"

echo ============================================
echo Starting all 6 applications...
echo ============================================
echo.
echo Initial   : http://localhost:8000
echo AngularJS : http://localhost:8001
echo Angular   : http://localhost:4200
echo React     : http://localhost:5173
echo Vue       : http://localhost:5174
echo Svelte    : http://localhost:5175
echo.

rem Static applications
start "Initial" cmd /k "cd /d ""%~dp0initial"" && npx --yes http-server@14.1.1 . -p 8000 -o"
start "AngularJS" cmd /k "cd /d ""%~dp0angularJS"" && npx --yes http-server@14.1.1 . -p 8001 -o"

rem Framework development servers
start "Angular" cmd /k "cd /d ""%~dp0angular"" && npm start -- --open --port 4200"
start "React" cmd /k "cd /d ""%~dp0react"" && npm run dev -- --open --port 5173 --strictPort"
start "Vue" cmd /k "cd /d ""%~dp0vue"" && npm run dev -- --open --port 5174 --strictPort"
start "Svelte" cmd /k "cd /d ""%~dp0svelte"" && npm run dev -- --open --port 5175 --strictPort"

echo All start commands have been launched.
echo Close the opened terminal windows to stop the servers.
echo.
pause
