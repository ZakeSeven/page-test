// Script do Menu
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('nav ul li a.active').classList.remove('active');
        this.classList.add('active');
    });
});

// Script do Slider
const tabsBox = document.querySelector(".tabs-box"),
    allTabs = tabsBox.querySelectorAll(".tab"),
    arrowIcons = document.querySelectorAll(".icon i");

let isDragging = false;

const handleIcons = () => {
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    arrowIcons[0].parentElement.style.display = tabsBox.scrollLeft > 0 ? "flex" : "none";
    arrowIcons[1].parentElement.style.display = tabsBox.scrollLeft < maxScrollableWidth ? "flex" : "none";
};

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let scrollAmount = icon.id === "left" ? -340 : 340;
        tabsBox.scrollLeft += scrollAmount;
        handleIcons(); 
    });
});

allTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabsBox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
    });
});

const dragging = (e) => {
    if (!isDragging) return;
    tabsBox.classList.add("dragging");
    tabsBox.scrollLeft -= e.movementX;
    handleIcons();
};

const dragStop = () => {
    isDragging = false;
    tabsBox.classList.remove("dragging");
    handleIcons();
};

tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

handleIcons(); 


