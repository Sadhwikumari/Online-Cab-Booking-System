
const cabRates = {
    Mini: 12,
    Sedan: 16,
    SUV: 20
};



function calculateFare() {

    const cabType = document.getElementById("cabType").value;
    const distance = Number(document.getElementById("distance").value);

    if (cabType === "") {
        alert("Please select a cab type.");
        return;
    }

    if (!distance || distance <= 0) {
        alert("Please enter a valid distance.");
        return;
    }

    const rate = cabRates[cabType];

    const baseFare = 50;
    const fare = baseFare + (distance * rate);

    document.getElementById("fare").innerText =
        "₹" + fare.toFixed(0);
}




function bookRide() {

    const pickup = document.getElementById("pickup").value.trim();
    const drop = document.getElementById("drop").value.trim();
    const cabType = document.getElementById("cabType").value;
    const distance = Number(document.getElementById("distance").value);

    // Validation

    if (pickup === "") {
        alert("Please enter pickup location.");
        return;
    }

    if (drop === "") {
        alert("Please enter drop location.");
        return;
    }

    if (pickup.toLowerCase() === drop.toLowerCase()) {
        alert("Pickup and drop locations cannot be same.");
        return;
    }

    if (cabType === "") {
        alert("Please select a cab.");
        return;
    }

    if (!distance || distance <= 0) {
        alert("Please enter valid distance.");
        return;
    }


    

    const rate = cabRates[cabType];
    const baseFare = 50;
    const fare = baseFare + (distance * rate);


    

    const bookingId =
        "CR" + Math.floor(10000 + Math.random() * 90000);


    
    const booking = {

        bookingId: bookingId,
        pickup: pickup,
        drop: drop,
        cabType: cabType,
        distance: distance,
        fare: fare,
        status: "Confirmed"

    };


    

    localStorage.setItem(
        "latestBooking",
        JSON.stringify(booking)
    );


    

    alert(
        "Ride booked successfully!\n\n" +
        "Booking ID: " + bookingId +
        "\nCab: " + cabType +
        "\nFare: ₹" + fare.toFixed(0)
    );


    

    window.location.href = "booking-confirmation.html";
}