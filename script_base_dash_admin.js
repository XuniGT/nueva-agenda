document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const menuIcon = document.getElementById("menu-open");
  const sidebar = document.getElementById("sidebar");
  const menuLabel = document.getElementById("menu-label");
  const menuLinks = document.querySelectorAll(".menu a");

menuBtn.addEventListener("click", () => {
  const isClosed = sidebar.classList.toggle("closed");
  menuIcon.classList.toggle("active", !isClosed);
});
  // Cerrar menú al hacer clic en cualquier enlace del menú
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuIcon.classList.remove("active");
      sidebar.classList.add("closed");
    });
  });
});