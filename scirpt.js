document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const people = document.getElementById('people').value;

    const confirmationMessage = `
        <p>Thank you, ${name}!</p>
        <p>Your reservation for ${people} people on ${date} at ${time} has been confirmed.</p>
    `;

    document.getElementById('confirmation').innerHTML = confirmationMessage;
});

function showHome() {
    setActiveSection('home');
}

function showMenu() {
    setActiveSection('menu');
}

function showReservation() {
    setActiveSection('reservation');
}

function setActiveSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    document.getElementById(sectionId).classList.add('active');
}
