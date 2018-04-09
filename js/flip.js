let flip = document.querySelectorAll(".flip-container");
Array.from(flip).forEach(fbox => {
  fbox.addEventListener("click", function(event) {
    event.preventDefault();

    if (!this.classList.contains("flipped")) {
      this.classList.add("flipped");
      // this.closest(".backface").classList.add("backface--flip");
    } else {
      this.classList.remove("flipped");
    }
  });
});
