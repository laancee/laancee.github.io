document.getElementById("colorButton").addEventListener("click", function() {
    let resume = document.getElementById("resume");
    let button = document.getElementById("colorButton");
    
    const colors = ["#f7d1d1", "pink", "lightgreen", "yellow", "orange", "gold", "lightblue"];
    
    let currentColor = resume.style.backgroundColor;
    let currentIndex = colors.indexOf(currentColor);
    if (currentIndex === -1) {
      currentIndex = 0;
    }
    let nextColor = colors[(currentIndex + 1) % colors.length];
    resume.style.backgroundColor = nextColor;
    button.style.backgroundColor = nextColor;
});
