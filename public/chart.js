
$ (function(Chart){
var ctx = document.getElementById("mychart").getContext("2d");
var myChart = new Chart(ctx, {
    type: "pie",
    data: {
        labels: ["Coder", "Designer"],
        datasets: [
            {
                data: [25.0, 75.0],
                backgroundColor: ["#000000", "#808080"],
                borderWidth: 0.5,
                borderColor: "#ddd",
            },
        ],
    },

    options: {
        title: {
            display: true,
            text: "Experience",
            position: "top",
            fontSize: 16,
            fontColor: "#111",
            padding: 20,
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                boxWidth: 20,
                fontColor: "#111",
                padding: 15,
            },
        },
        tooltips: {
            enabled: false,
        },
        plugins: {
            datalabels: {
                color: "#111",
                textAlign: "center",
                font: {
                    lineHeight: 1.6,
                },
                formatter: function(value) {
                    return value + "%";
                },
            },
        },
    },
})

