dots();
function dots() {
  const dot1 = document.getElementById("dot1");
  const dot2 = document.getElementById("dot2");
  const dot3 = document.getElementById("dot3");

  dot1.style.display = "none";
  dot2.style.display = "none";
  dot3.style.display = "none";

  setTimeout(() => {
    dot1.style.display = "inline";
    setTimeout(() => {
      dot2.style.display = "inline";
      setTimeout(() => {
        dot3.style.display = "inline";
        setTimeout(() => {
          dots();
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}
