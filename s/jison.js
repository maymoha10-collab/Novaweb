<script>
const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

menuBtn.onclick = function () {
  sideMenu.classList.toggle("active");
  overlay.classList.toggle("active");
};

overlay.onclick = function () {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
};
</script>