const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
menuBtn.addEventListener("click", function(e) {
    e.preventDefault();
    sidebar.classList.toggle("active");
});
