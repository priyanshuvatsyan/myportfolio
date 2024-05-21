function toggleMode() {
    const body = document.body;
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');

    // Toggle the dark mode class on the body
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Toggle the visibility of the icons
    if (body.classList.contains('dark-mode')) {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }
}

// Set initial mode based on body class
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');

    if (body.classList.contains('dark-mode')) {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }
});

let respNavBtn = document.getElementById("resp-nav-btn");
function nav() {
    console.log("Triggered");
    let responsiveNavItems = document.getElementsByClassName("responsive-nav");
    
    for (let index = 0; index < responsiveNavItems.length; index++) {
        responsiveNavItems[index].style.display = "flex";
    }
    console.log("Completed");
}

/* function clear() {
    console.log("trig 1");
    let name = document.getElementById("name");
    name.textContent = "";
    console.log("trig f");
} */
function clear() {
    console.log("trig 1");
    let name = document.getElementById("name");
    if (name) {
        name.value = "";
        console.log("trig f");
    } else {
        console.error("Element with ID 'name' not found.");
    }
}
