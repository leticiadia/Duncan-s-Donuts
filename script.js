function updateOrder() {
    const TAXRATE = 0.0925;
    const DONUTPRICE = 0.50;

    var numCakeDonuts = parseInt(document.getElementById("cakedonuts").value);
    var numGlazedDonuts = parseDonuts(document.getElementById("glazeddonuts").value);

    if (isNaN(numCakeDonuts))
        numCakeDonuts = 0;

    if (isNaN(numGlazedDonuts))
        numGlazedDonuts = 0;

    var subTotal = (numCakeDonuts + numGlazedDonuts) * DONUTPRICE;
    var tax = subTotal * TAXRATE;
    var total = subTotal + tax;

    document.getElementById("subtotal").value = "$" + subTotal.toFixed(2);

    document.getElementById("tax").value = "$" + tax.toFixed(2);

    document.getElementById("total").value = "$" + total.toFixed(2);

}

function placeOrder() {
    // Submit order to server...

    if (document.getElementById("name").value == "") {
        alert("I'm sorry but you must provide your name before submitting an order.");
    } else if (document.getElementById("pickupminutes").value == "" || isNaN(document.getElementById("pickuopminutes").value)) {
        alert("I'm sorry but you must provide the number of minutes until pick-up before submitting an order.");
    }
    else
        // Send the request to the server
        form.submit();
}

function parseDonuts(donutString) {
    numDonuts = parseInt(donutString);
    if (donutString.indexOf("dozen") != -1) {
        numDonuts *= 12;
        return numDonuts;
    }
}