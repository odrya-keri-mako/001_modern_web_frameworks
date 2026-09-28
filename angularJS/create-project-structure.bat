@echo off

mkdir assets 2>nul
mkdir assets\image 2>nul
mkdir assets\image\icon 2>nul

mkdir css 2>nul

mkdir html 2>nul
mkdir html\components 2>nul
mkdir html\layouts 2>nul
mkdir html\pages 2>nul

mkdir js 2>nul

if not exist css\app.css type nul > css\app.css
if not exist css\header.css type nul > css\header.css
if not exist css\home.css type nul > css\home.css
if not exist css\page1.css type nul > css\page1.css
if not exist css\page2.css type nul > css\page2.css

if not exist html\layouts\root.html type nul > html\layouts\root.html
if not exist html\components\footer.html type nul > html\components\footer.html
if not exist html\components\header.html type nul > html\components\header.html
if not exist html\pages\home.html type nul > html\pages\home.html
if not exist html\pages\page1.html type nul > html\pages\page1.html
if not exist html\pages\page2.html type nul > html\pages\page2.html

if not exist js\app.js type nul > js\app.js

echo Project structure created.
pause