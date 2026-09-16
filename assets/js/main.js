
const modal = document.getElementById("videoModal");
const iframe = document.getElementById("videoFrame");
const closeBtn = document.querySelector(".close-modal");

// abrir modal
document.querySelectorAll(".open-modal").forEach(btn => {
    btn.addEventListener("click", () => {
        const videoUrl = btn.getAttribute("data-video");

        if (iframe && modal) {
            iframe.src = videoUrl;
            modal.style.display = "flex";
        }
    });
});

// fechar modal
if (closeBtn && modal && iframe) {
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        iframe.src = "";
    });
}

// fechar clicando fora
window.addEventListener("click", (e) => {
    if (modal && iframe && e.target === modal) {
        modal.style.display = "none";
        iframe.src = "";
    }
});

const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.1
});

elements.forEach(el => observer.observe(el));


