function sendMail(contactForm) {
    emailjs.send("service_8jzchbj", "restaurant-finder", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("Success", response);
        },
        function(error) {
            console.log("Error", error);
        }
    );
    return false;  
}