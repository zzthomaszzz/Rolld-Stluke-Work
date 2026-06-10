
function sendEmail(){

    const parBbqChicken = 12;
    const parLemongrassChicken = 12;
    const parLemongrassBeef = 6;
    const parPorkNCrackling = 4;

    const recipientEmail = "\x74\x68\x6f\x6d\x61\x73\x6e\x67\x75\x79\x65\x6e\x38\x35\x30\x33\x40\x67\x6d\x61\x69\x6c\x2e\x63\x6f\x6d";
    const recipientSubject = "Ordering";

    const currentBbqChicken = parseInt(document.getElementById('userBbqChicken').value);
    const currentLemongrassChicken = parseInt(document.getElementById('userLemongrassChicken').value);
    const currentLemongrassBeef = parseInt(document.getElementById('userLemongrassBeef').value);
    const currentPorkNCrackling = parseInt(document.getElementById('userPorkNCrackling').value);

    const requiredBbqChicken = parBbqChicken - currentBbqChicken;
    const requiredLemongrassChicken = parLemongrassChicken - currentLemongrassChicken;
    const requiredLemongrassBeef = parLemongrassBeef - currentLemongrassBeef;
    const requiredPorkNCrackling = parPorkNCrackling - currentPorkNCrackling;

    let emailBody = "Hi,\n\nHere is the order list:\n\n";
    let hasItemsToOrder = false;

    if (requiredBbqChicken > 0) {
        emailBody += `• BBQ Chicken: ${requiredBbqChicken}\n`;
        hasItemsToOrder = true;
    }
    if (requiredLemongrassChicken > 0) {
        emailBody += `• Lemongrass Chicken: ${requiredLemongrassChicken}\n`;
        hasItemsToOrder = true;
    }
    if (requiredLemongrassBeef > 0) {
        emailBody += `• Lemongrass Beef: ${requiredLemongrassBeef}\n`;
        hasItemsToOrder = true;
    }
    if (requiredPorkNCrackling > 0) {
        emailBody += `• Pork & Crackling: ${requiredPorkNCrackling}\n`;
        hasItemsToOrder = true;
    }

    if (!hasItemsToOrder) {
        alert("All stock levels are full. No order needed!");
        return;
    }

    emailBody += "\nThank you!";

    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(recipientSubject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;
}

