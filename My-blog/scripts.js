// Change background color when button clicked (on index.html)
const colorBtn = document.getElementById("colorBtn");
if (colorBtn) {
  colorBtn.addEventListener("click", () => {
    // Toggle background color between white and light yellow
    document.body.style.backgroundColor =
      document.body.style.backgroundColor === "lightyellow"
        ? "#fafafa"
        : "lightyellow";
  });
}

// Like button functionality on blog.html
const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const countSpan = btn.nextElementSibling;
    let count = parseInt(countSpan.textContent);
    count++;
    countSpan.textContent = count;

    // Optional: Save likes count in localStorage
    const articleTitle = btn.parentElement.querySelector("h2").textContent;
    localStorage.setItem(articleTitle, count);
  });
});

// Load likes from localStorage on blog page
document.addEventListener("DOMContentLoaded", () => {
  likeButtons.forEach((btn) => {
    const articleTitle = btn.parentElement.querySelector("h2").textContent;
    const savedCount = localStorage.getItem(articleTitle);
    if (savedCount) {
      btn.nextElementSibling.textContent = savedCount;
    }
  });
});
