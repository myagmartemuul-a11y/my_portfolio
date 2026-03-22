const lines = [
    "> root@tT3ng3r: ~# access_granted",
    "> starting_secure_session... [OK]",
    "> ---------------------------------",
    "> whoami",
    "  NAME: Temuul",
    "  ROLE: Cyber Security Researcher / Pentester",
    "  STATUS: Active - Ethical Hacking & Research",
    "> cat about_me.txt",
    "  I focus on identifying vulnerabilities, network ",
    "  defense, and building a secure digital world.",
    "> ---------------------------------",
    "> fetch_social_links --all",
    "> visit_htb_profile --active"
];

const output = document.getElementById('output');
const links = document.getElementById('links');

let lineIdx = 0;
let charIdx = 0;

function typeEffect() {
    if (lineIdx < lines.length) {
        if (charIdx < lines[lineIdx].length) {
            // innerHTML биш append ашиглах нь XSS-ээс хамгаална
            output.append(lines[lineIdx].charAt(charIdx));
            charIdx++;
            setTimeout(typeEffect, 30); // Хурдан шивнэ
        } else {
            output.append("\n");
            lineIdx++;
            charIdx = 0;
            setTimeout(typeEffect, 200);
        }
    } else {
        // Процесс дуусахад холбоосуудыг харуулж, автоматаар доош гүйлгэнэ
        if (links) {
            links.style.display = 'flex';
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    if (output) output.textContent = '';
    typeEffect();
});
