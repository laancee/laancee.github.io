document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".day-btn");
    const box = document.querySelector(".box");

    const colors = [
        "#feb5b5", // Monday
        "#3EB489", // Tuesday
        "#C8A2C8", // Wednesday
        "#00FF00", // Thursday
        "#BDB76B", // Friday
        "#00FFFF", // Saturday
        "#FFBF00"  // Sunday
    ];

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const color = colors[index]; 
            box.style.backgroundColor = color; 

            box.style.transform = "translate(-50%, -100px)";
            box.style.opacity = "0";

            setTimeout(() => {
                box.style.backgroundColor = color; 
                box.style.transform = "translate(-50%, 50px)";
                box.style.opacity = "1";
            }, 300);
        });
    });
});
