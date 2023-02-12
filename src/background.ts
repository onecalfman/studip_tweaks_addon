setInterval(
  () =>
    Array.from(document.getElementsByTagName("video")).forEach((vid) =>
      vid.setAttribute("controls", "true")
    ),
  200
);
