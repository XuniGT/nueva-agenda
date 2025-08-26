document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const menuIcon = document.getElementById("menu-open");
  const sidebar = document.getElementById("sidebar");
  const menuLinks = document.querySelectorAll(".menu a");

  // Toggle sidebar al hacer clic en el botón hamburguesa
  menuBtn.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("open");
    menuIcon.classList.toggle("active", isOpen);
  });

  // (Opcional) Cerrar sidebar al hacer clic en un link
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("open");
      menuIcon.classList.remove("active");
    });
  });
});
