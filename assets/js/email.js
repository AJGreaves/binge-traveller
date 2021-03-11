window.onload = function () {
    /**
     * Adds a submit event listener to #contact-form
     * Sends the form data to emailjs, adds an alert to the user
     * for successful message sent, or error.
     */
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // "service_vgyq6rt" is service ID, "template_gekjfat" is the template ID
        emailjs.sendForm('service_vgyq6rt', 'template_gekjfat', this)
            .then(function () {
                // If message sent successfully, alert user and then refresh the page
                alert("Your message was sent successfully!");
                location.reload();
            }, function (error) {
                // If error with sending message, alert user with error message.
                alert("Ooops, something went wrong...", error);
            });
    });

};