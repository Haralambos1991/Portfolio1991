var selectBox = document.getElementById("selectNav");

selectBox.addEventListener("change", function(e) {
    var destination = e.target.value;
    console.log(e.target.value);
    if (destination !== "projects") {
        window.location.href = destination;
    }
});
