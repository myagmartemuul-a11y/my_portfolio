const lines = [
    "> root@temuul: access_granted",
    "> status: cybersecurity_researcher",
    "> loading_secure_modules...",
    "> nodes_ready."
];

const output = document.getElementById('output');
const links = document.getElementById('links');
const cursor = document.getElementById('cursor');
let lineIdx = 0;
let charIdx = 0;

function typeEffect() {
    if (lineIdx < lines.length) {
        if (charIdx < lines[lineIdx].length) {
            output.innerHTML += lines[lineIdx].charAt(charIdx);
            charIdx++;
            setTimeout(typeEffect, 40);
        } else {
            output.innerHTML += "\n";
            lineIdx++;
            charIdx = 0;
            setTimeout(typeEffect, 350);
        }
    } else {
        cursor.style.display = 'none';
        links.style.display = 'flex';
    }
}

// Хуудас ачаалж дуусахад эффектийг эхлүүлэх
window.addEventListener('DOMContentLoaded', typeEffect);
