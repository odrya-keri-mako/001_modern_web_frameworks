@echo off

mkdir src\components\header 2>nul
mkdir src\components\footer 2>nul

mkdir src\pages\home 2>nul
mkdir src\pages\page1 2>nul
mkdir src\pages\page2 2>nul

mkdir src\state 2>nul

if not exist src\components\header\Header.svelte type nul > src\components\header\Header.svelte
if not exist src\components\footer\Footer.svelte type nul > src\components\footer\Footer.svelte

if not exist src\pages\home\Home.svelte type nul > src\pages\home\Home.svelte
if not exist src\pages\page1\Page1.svelte type nul > src\pages\page1\Page1.svelte
if not exist src\pages\page2\Page2.svelte type nul > src\pages\page2\Page2.svelte

if not exist src\state\common.svelte.ts type nul > src\state\common.svelte.ts

if not exist src\routes.ts type nul > src\routes.ts

echo Project structure created.
pause