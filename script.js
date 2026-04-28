// Character String
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*_-+=,:;.?/";

// DOM Elements
const passwordEls = [1, 2, 3, 4, 5, 6].map(i => document.getElementById(`password_${i}_el`));

// Easter Egg Tracking
let click_times = [];

function check_spam() {
    const now = Date.now();
    click_times.push(now);
    click_times = click_times.filter(t => now - t < 2000);
    if (click_times.length >= 7) {
        click_times = [];
        show_easter_egg();
    }
}

function show_easter_egg() {
    const egg = document.getElementById("easter_egg");
    const skeleton = document.getElementById("skeleton");
    if (!egg || !skeleton) return;
    egg.style.display = "block";
    skeleton.style.animation = "none";
    skeleton.offsetHeight;
    skeleton.style.animation = "run_across 3s linear forwards";
    setTimeout(() => { egg.style.display = "none"; }, 3000);
}

// Contact Form
function submit_form(event) {
    event.preventDefault();
    const result = document.getElementById("form_result");
    result.textContent = "Message sent! Thanks for reaching out.";
    result.className = "form_success";
    document.getElementById("contact_form").reset();
}

// Generate a Single Character
function generate_a_char() {
    return characters[Math.floor(Math.random() * characters.length)];
}

// Generate Passwords
function generate_password(length) {
    if (!passwordEls[0]) return;
    check_spam();
    passwordEls.forEach(el => {
        el.textContent = Math.random() < 0.01
            ? "$ucce$$"
            : Array.from({ length }, generate_a_char).join("");
    });
}
