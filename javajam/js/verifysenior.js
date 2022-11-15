var age;

age = prompt("Enter your age:")
if (age >= 65) {
    output = "* Free Friday Coffee and Biscuit Night for Seniors! Come get your 'Jam' on! *" 
    document.getElementById('verify').style.color = 'maroon';
    document.getElementById('verify').style.fontVariantCaps = 'large-caps';
} else {
    output = "Enjoy Great Music, Make Great Friends and Even Greater Memories!"
}

document.getElementById("verify").innerHTML = output;