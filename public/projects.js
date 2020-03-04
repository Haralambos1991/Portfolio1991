var selectBox = document.getElementById("selectNav");

selectBox.addEventListener("change", function(e) {
    var destination = e.target.value;
    console.log(e.target.value);
    if (destination !== "projects") {
        window.location.href = destination;
    }
});

window.onload = function() {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Desktop Search Engine Market Share - 2016",
        },
        data: [
            {
                type: "pie",
                startAngle: 240,
                yValueFormatString: '##0.00"%"',
                indexLabel: "{label} {y}",
                dataPoints: [
                    { y: 79.45, label: "Google" },
                    { y: 7.31, label: "Bing" },
                    { y: 7.06, label: "Baidu" },
                    { y: 4.91, label: "Yahoo" },
                    { y: 1.26, label: "Others" },
                ],
            },
        ],
    });
    chart.render();
};
