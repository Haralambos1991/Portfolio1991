//Load Google Charts//
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

// Right now i will draw the chart and i will set the corechart value

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ["Task", "Hours per day"],
        ["Coder", 18],
        ["Designer", 6],
    ]);

    // I will add a title and i will set the height and the width of the chart//
    var options = {
        title: "My personal Experience",
        is3D: "true",
        width: 230,
        height: 150,
    };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(
        document.getElementById("piechart")
    );
    chart.draw(data, options);
}
