@echo off

mkdir src\context 2>nul
if not exist src\context\CommonContext.tsx type nul > src\context\CommonContext.tsx

mkdir src\components\header 2>nul
mkdir src\components\footer 2>nul

mkdir src\pages\home 2>nul
mkdir src\pages\page1 2>nul
mkdir src\pages\page2 2>nul

if not exist src\components\header\Header.tsx type nul > src\components\header\Header.tsx
if not exist src\components\header\Header.module.css type nul > src\components\header\Header.module.css

if not exist src\components\footer\Footer.tsx type nul > src\components\footer\Footer.tsx

if not exist src\pages\home\Home.tsx type nul > src\pages\home\Home.tsx
if not exist src\pages\home\Home.module.css type nul > src\pages\home\Home.module.css

if not exist src\pages\page1\Page1.tsx type nul > src\pages\page1\Page1.tsx
if not exist src\pages\page1\Page1.module.css type nul > src\pages\page1\Page1.module.css

if not exist src\pages\page2\Page2.tsx type nul > src\pages\page2\Page2.tsx
if not exist src\pages\page2\Page2.module.css type nul > src\pages\page2\Page2.module.css

echo Project structure created.
pause