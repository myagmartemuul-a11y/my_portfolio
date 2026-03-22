// --- Professional Secure Terminal Script ---
// Content Security Policy (CSP) compliant - No inline scripts allowed.

const lines = [
    "> root@temuul: ~# access_granted",
    "> starting_secure_session... [OK]",
    "> initializing_identity_protocol...",
    "> ---------------------------------",
    "> whoami",
    "  NAME: Temuul",
    "  ROLE: Cyber Security Researcher / Pentester",
    "  STATUS: Active - Ethical Hacking & Research",
    "> cat about_me.txt",
    "  I am a security researcher focused on identifying",
    "  vulnerabilities, network defense, and ethical hacking.",
    "  Dedicated to building a more secure digital world.",
    "> ---------------------------------",
    "> fetch_social_links --all",
    "> loading_assets..."
];

const output = document.getElementById('output');
const links = document.getElementById('links');
const cursor = document.getElementById('cursor');

let lineIdx = 0;
let charIdx = 0;

/**
 * Аюулгүй байдлын үүднээс innerHTML-ийг шууд ашиглахаас илүү 
 * textContent эсвэл Node-оор дамжуулах нь XSS-ээс сэргийлнэ.
 */
function typeEffect() {
    if (lineIdx < lines.length) {
        if (charIdx < lines[lineIdx].length) {
            // Шинэ тэмдэгт нэмэх
            output.append(lines[lineIdx].charAt(charIdx));
            charIdx++;
            setTimeout(typeEffect, 40);
        } else {
            // Шинэ мөр рүү шилжих
            output.append("\n");
            lineIdx++;
            charIdx = 0;
            setTimeout(typeEffect, 300);
        }
    } else {
        // Процесс дуусахад курсорыг нууж, холбоосуудыг идэвхжүүлэх
        if (cursor) cursor.style.display = 'none';
        if (links) {
            links.style.display = 'flex';
            links.style.opacity = '1';
        }
    }
}

// DOM бүрэн ачаалсны дараа эхлүүлэх
window.addEventListener('DOMContentLoaded', () => {
    // Хэрэв өмнө нь ямар нэгэн текст байвал цэвэрлэх
    if (output) output.textContent = '';
    typeEffect();
});
