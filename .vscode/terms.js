document.getElementById("read-more-btn").addEventListener("click", function() {
    const moreTerms = document.getElementById("more-terms");
    if (moreTerms.style.display === "none") {
        moreTerms.style.display = "block";
        this.textContent = "Read Less";
    } else {
        moreTerms.style.display = "none";
        this.textContent = "Read More";
    }
});
