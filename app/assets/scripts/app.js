window.onload = function() {

    document.getElementById("claim").addEventListener("click", function() {
        document.querySelectorAll("input").forEach(item => {
            item.classList.add("submitted");
            item.removeAttribute("placeholder");
        });
    });
}