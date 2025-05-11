function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const currentRight = window.getComputedStyle(sidebar).right;

  if (currentRight === "-250px") {
    sidebar.style.right = "0";
  } else {
    sidebar.style.right = "-250px";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // أي كود إضافي مستقبلي هون
});
