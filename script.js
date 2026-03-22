// --- High-Speed Secure Terminal Script ---
// Compliance: No unsafe-inline, No innerHTML (XSS Protection)

const lines = [
    "> root@temuul: ~# access_granted",
    "> session_status: secure [OK]",
    "> ---------------------------------",
    "> whoami",
    "  NAME: Temuul",
    "  ROLE: Cyber Security Researcher / Student",
    "  SKILLS: Pentesting, Network Security, Linux",
    "> cat about_me.txt",
    "  I focus on vulnerability research and ethical hacking.",
    "  Constantly learning to stay ahead of digital threats.",
    "> ---------------------------------",
    "> systemctl list-units --type=social_links",
    "> STATUS: All links active."
];

const output = document.getElementById('output');
const links = document.getElementById('links');
const cursor = document.getElementById('cursor');

function displayInstantly() {
    if (!output) return;

    // Бүх текстийг нэг дор нэгтгэж харуулах (textContent ашиглаж XSS-ээс сэргийлнэ)
    output.textContent = lines.join('\n');

    // Курсорыг нууж, холбоосуудыг шууд харуулах
    if (cursor) cursor.style.display = 'none';
    if (links) {
        links.style.display = 'flex';
        links.style.opacity = '1';
    }
}

// Хуудас ачаалагдахад шууд ажиллуулна
window.addEventListener('DOMContentLoaded', displayInstantly);
