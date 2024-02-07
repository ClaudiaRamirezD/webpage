const header = document.querySelector(".navbar");

window.onscroll = function () {
    var top = window.scrollY;
    if (top >= 100) {
        header.classList.add("navbarDark");
        setNavbarDarkStyles();
    } else {
        header.classList.remove("navbarDark");
        resetNavbarStyles();
    }
};

function setNavbarDarkStyles() {
    const navbarBrand = document.querySelector(".navbar-brand");

    // Set styles for .navbar-brand
    if (navbarBrand) {
        navbarBrand.style.color = "#8EC7D2";
    }
}

function resetNavbarStyles() {
    const navbarBrand = document.querySelector(".navbar-brand");

    // Reset styles for .navbar-brand
    if (navbarBrand) {
        navbarBrand.style.color = "white";
    }
}

document.getElementById('emailButton').addEventListener('click', function () {
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    var subject = document.getElementById('subjectInput').value;
    var comment = document.getElementById('commentInput').value;

    // Form validation
    if (!name || !email || !subject || !comment) {
        alert("Please fill out all required fields.");
        return;
    }

    // Create the email body with form data
    var emailBody = 'Name: ' + name + '\nEmail: ' + email + '\nSubject: ' + subject + '\nProject Details: ' + comment;

    // Create a "mailto" link with the email address and subject
    var mailtoLink = 'mailto:clau8812@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(emailBody);

    // Open the default email client with the mailto link
    window.location.href = mailtoLink;
});
