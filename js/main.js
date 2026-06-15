// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav__toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      toggle.textContent = nav.classList.contains("open") ? "✕" : "☰";
    });
    nav.querySelectorAll(".nav__links a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.textContent = "☰";
      });
    });
  }

  // Contact form -> WhatsApp + mailto (demo; swap for a real backend before launch)
  var form = document.querySelector("#reservation");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var msg =
        "New booking/order request — Texas Backyard%0A" +
        "Name: " + encodeURIComponent(d.get("name") || "") + "%0A" +
        "Phone: " + encodeURIComponent(d.get("phone") || "") + "%0A" +
        "Guests: " + encodeURIComponent(d.get("guests") || "") + "%0A" +
        "Date/Time: " + encodeURIComponent(d.get("when") || "") + "%0A" +
        "Notes: " + encodeURIComponent(d.get("notes") || "");
      window.open("https://wa.me/35799378064?text=" + msg, "_blank");
      var ok = form.querySelector(".form-ok");
      if (ok) ok.style.display = "block";
      form.reset();
    });
  }
});
