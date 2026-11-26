// Shared script for every lesson page: diagrams (Mermaid), formulas (KaTeX), quiz helpers.
(function () {
  const dark = document.documentElement.dataset.theme === "dark" ||
    (document.documentElement.dataset.theme !== "light" && matchMedia("(prefers-color-scheme: dark)").matches);

  if (window.mermaid) { // optional: only pages that load Mermaid
    mermaid.initialize({ startOnLoad: true, theme: dark ? "dark" : "neutral", fontFamily: "system-ui, sans-serif" });
  }

  function renderMath() {
    if (window.renderMathInElement) {
      renderMathInElement(document.body, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "\\(", right: "\\)", display: false },
        ],
        throwOnError: false,
      });
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", renderMath);
  else renderMath();

  // "Show all answers" / "Hide all answers" button above the quiz
  document.addEventListener("DOMContentLoaded", function () {
    const quiz = document.querySelector(".quiz");
    if (!quiz) return;
    const tools = document.createElement("div");
    tools.className = "quiz-tools";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "Show all answers";
    btn.addEventListener("click", function () {
      const all = quiz.querySelectorAll("details");
      const open = btn.textContent.startsWith("Show");
      all.forEach((d) => (d.open = open));
      btn.textContent = open ? "Hide all answers" : "Show all answers";
    });
    tools.appendChild(btn);
    quiz.before(tools);
  });
})();
