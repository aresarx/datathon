var tarta1 = $("#tarta1");
var tarta2 = $("#tarta2");
var tarta3 = $("#tarta3");
var tarta4 = $("#tarta4");
var tarta5 = $("#tarta5");
var tarta6 = $("#tarta6");
var tarta7 = $("#tarta7");
var tarta8 = $("#tarta8");
var tarta9 = $("#tarta9");

var datostarta1 = {
    labels: [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo"
    ],
    datasets: [
        {
            data: [115068,110255,109052,109581,107274,114277,5650],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
				'rgba(54, 162, 235, 0.8)',
				'rgba(255, 206, 86, 0.8)',
				'rgba(75, 192, 192, 0.8)',
				'rgba(153, 102, 255, 0.8)',
				'rgba(255, 159, 64, 0.8)',
				'rgba(12, 105, 255, 0.8)'
            ],
            hoverBackgroundColor: [
                'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(12, 105, 255, 1)'
            ]
        }]
};

var mitarta1 = new Chart(tarta1,{
    type: 'pie',
    data: datostarta1,
    options: {
        title: {
            display: true,
            text: 'Alimentación: transacciones por dia'
        }
    }
});

var datostarta2 = {
    labels: [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo"
    ],
    datasets: [
        {
            data: [7111,7732,8305,8062,9021,3126,209],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
				'rgba(54, 162, 235, 0.8)',
				'rgba(255, 206, 86, 0.8)',
				'rgba(75, 192, 192, 0.8)',
				'rgba(153, 102, 255, 0.8)',
				'rgba(255, 159, 64, 0.8)',
				'rgba(12, 105, 255, 0.8)'
            ],
            hoverBackgroundColor: [
                'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(12, 105, 255, 1)'
            ]
        }]
};

var mitarta2 = new Chart(tarta2,{
    type: 'pie',
    data: datostarta2,
    options: {
        title: {
            display: true,
            text: 'Auto: transacciones por dia'
        }
    }
});

var datostarta3 = {
    labels: [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo"
    ],
    datasets: [
        {
            data: [13775,14591,17482,18734,20933,12931,1123],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
				'rgba(54, 162, 235, 0.8)',
				'rgba(255, 206, 86, 0.8)',
				'rgba(75, 192, 192, 0.8)',
				'rgba(153, 102, 255, 0.8)',
				'rgba(255, 159, 64, 0.8)',
				'rgba(12, 105, 255, 0.8)'
            ],
            hoverBackgroundColor: [
                'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(12, 105, 255, 1)'
            ]
        }]
};

var mitarta3 = new Chart(tarta3,{
    type: 'pie',
    data: datostarta3,
    options: {
        title: {
            display: true,
            text: 'Belleza: transacciones por dia'
        }
    }
});

var datostarta4 = {
    labels: [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo"
    ],
    datasets: [
        {
            data: [21235,21756,22293,22124,23258,21180,6949],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
				'rgba(54, 162, 235, 0.8)',
				'rgba(255, 206, 86, 0.8)',
				'rgba(75, 192, 192, 0.8)',
				'rgba(153, 102, 255, 0.8)',
				'rgba(255, 159, 64, 0.8)',
				'rgba(12, 105, 255, 0.8)'
            ],
            hoverBackgroundColor: [
                'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(12, 105, 255, 1)'
            ]
        }]
};

var mitarta4 = new Chart(tarta4,{
    type: 'pie',
    data: datostarta4,
    options: {
        title: {
            display: true,
            text: 'Hogar: transacciones por dia'
        }
    }
});

var datostarta5 = {
    labels: [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo"
    ],
    datasets: [
        {
            data: [80176,85783,90830,92602,97647,121986,50593],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
				'rgba(54, 162, 235, 0.8)',
				'rgba(255, 206, 86, 0.8)',
				'rgba(75, 192, 192, 0.8)',
				'rgba(153, 102, 255, 0.8)',
				'rgba(255, 159, 64, 0.8)',
				'rgba(12, 105, 255, 0.8)'
            ],
            hoverBackgroundColor: [
                'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(12, 105, 255, 1)'
            ]
        }]
};

var mitarta5 = new Chart(tarta5,{
    type: 'pie',
    data: datostarta5,
    options: {
        title: {
            display: true,
            text: 'Moda: transacciones por dia'
        }
    }
});

var datostarta6 = {
    labels: [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo"
    ],
    datasets: [
        {
            data: [36387,37271,40294,37885,39357,42369,25325],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
				'rgba(54, 162, 235, 0.8)',
				'rgba(255, 206, 86, 0.8)',
				'rgba(75, 192, 192, 0.8)',
				'rgba(153, 102, 255, 0.8)',
				'rgba(255, 159, 64, 0.8)',
				'rgba(12, 105, 255, 0.8)'
            ],
            hoverBackgroundColor: [
                'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(12, 105, 255, 1)'
            ]
        }]
};

var mitarta6 = new Chart(tarta6,{
    type: 'pie',
    data: datostarta6,
    options: {
        title: {
            display: true,
            text: 'Ocio: transacciones por dia'
        }
    }
});

var datostarta7 = {
    labels: [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo"
    ],
    datasets: [
        {
            data: [48170,52795,58133,62614,77682,101429,95375],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
				'rgba(54, 162, 235, 0.8)',
				'rgba(255, 206, 86, 0.8)',
				'rgba(75, 192, 192, 0.8)',
				'rgba(153, 102, 255, 0.8)',
				'rgba(255, 159, 64, 0.8)',
				'rgba(12, 105, 255, 0.8)'
            ],
            hoverBackgroundColor: [
                'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(12, 105, 255, 1)'
            ]
        }]
};

var mitarta7 = new Chart(tarta7,{
    type: 'pie',
    data: datostarta7,
    options: {
        title: {
            display: true,
            text: 'Restauración: transacciones por dia'
        }
    }
});

var datostarta8 = {
    labels: [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo"
    ],
    datasets: [
        {
            data: [42401,43443,44005,42531,38876,24090,7995],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
				'rgba(54, 162, 235, 0.8)',
				'rgba(255, 206, 86, 0.8)',
				'rgba(75, 192, 192, 0.8)',
				'rgba(153, 102, 255, 0.8)',
				'rgba(255, 159, 64, 0.8)',
				'rgba(12, 105, 255, 0.8)'
            ],
            hoverBackgroundColor: [
                'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(12, 105, 255, 1)'
            ]
        }]
};

var mitarta8 = new Chart(tarta8,{
    type: 'pie',
    data: datostarta8,
    options: {
        title: {
            display: true,
            text: 'Salud: transacciones por dia'
        }
    }
});

var datostarta9 = {
    labels: [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo"
    ],
    datasets: [
        {
            data: [10623,10425,10426,10493,10805,9291,3163],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
				'rgba(54, 162, 235, 0.8)',
				'rgba(255, 206, 86, 0.8)',
				'rgba(75, 192, 192, 0.8)',
				'rgba(153, 102, 255, 0.8)',
				'rgba(255, 159, 64, 0.8)',
				'rgba(12, 105, 255, 0.8)'
            ],
            hoverBackgroundColor: [
                'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(12, 105, 255, 1)'
            ]
        }]
};

var mitarta9 = new Chart(tarta9,{
    type: 'pie',
    data: datostarta9,
    options: {
        title: {
            display: true,
            text: 'Tecnología: transacciones por dia'
        }
    }
});