function updateKatexSpans() {
  document.querySelectorAll("span.katex").forEach(span => {
    span.setAttribute("dir", "ltr");
  });
}

const observer = new MutationObserver(updateKatexSpans);
observer.observe(document.body, { childList: true, subtree: true });

updateKatexSpans();
