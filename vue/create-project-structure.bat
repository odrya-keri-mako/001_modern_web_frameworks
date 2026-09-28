@echo off

mkdir src\components\header 2>nul
mkdir src\components\footer 2>nul
mkdir src\composables 2>nul

mkdir src\pages\home 2>nul
mkdir src\pages\page1 2>nul
mkdir src\pages\page2 2>nul

if not exist src\components\header\Header.vue type nul > src\components\header\Header.vue
if not exist src\components\footer\Footer.vue type nul > src\components\footer\Footer.vue

if not exist src\composables\useCommon.ts type nul > src\composables\useCommon.ts

if not exist src\pages\home\Home.vue type nul > src\pages\home\Home.vue
if not exist src\pages\page1\Page1.vue type nul > src\pages\page1\Page1.vue
if not exist src\pages\page2\Page2.vue type nul > src\pages\page2\Page2.vue

if not exist src\index.css type nul > src\index.css

echo Project structure created.
pause