// Safe DOM ready
document.addEventListener("DOMContentLoaded", function () {
  // Typing animation (guarded)
  const target = document.getElementById("typing-text");
  const texts = [
    "Welcome to My ML Portfolio",
    "Zubaida Bibi | Full Stack ML Developer",
    "Let's Build with Data! 💻📊"
  ];
  if (target) {
    let count = 0, index = 0;
    (function type() {
      const text = texts[count % texts.length];
      target.textContent = text.slice(0, ++index);
      if (index === text.length) { count++; index = 0; setTimeout(type, 1400); }
      else { setTimeout(type, 90); }
    })();
  }

  // AOS (only if available)
  if (window.AOS && typeof AOS.init === "function") {
    AOS.init();
  }

  // Chatbot toggle
  const launcher = document.getElementById("chatbot-launcher");
  const frame = document.getElementById("chatbot-frame");
  if (launcher && frame) {
    launcher.addEventListener("click", () => {
      const isOpen = frame.style.display === "block";
      frame.style.display = isOpen ? "none" : "block";
      frame.setAttribute("aria-hidden", isOpen ? "true" : "false");
    });
  }
});
