const inputs = document.querySelectorAll("input");

inputs.forEach((i) => {
  ["change", "mousemove"].forEach((evt) => {
    i.addEventListener(evt, (e) => {
      const suffix = e.target.dataset.sizing || "";
      document.documentElement.style.setProperty(
        `--${e.target.name}`,
        `${e.target.value}${suffix}`
      );
    });
  });
});
