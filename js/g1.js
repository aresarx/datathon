///////////////////Graficas

		var ctx = $("#graficoUno");

		var data = {
		    labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
		    datasets: [
		        {
		            label: "Alimentación",
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(255, 99, 132, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)',
		                'rgba(255,99,132,1)',
		                'rgba(255,99,132,1)',
		                'rgba(255,99,132,1)',
		                'rgba(255,99,132,1)',
		                'rgba(255,99,132,1)',
		                'rgba(255,99,132,1)'
		            ],
		            borderWidth: 1,
		            data: [6063302,5540766,5463407,5753753,6839052,8576944,106336],
		        },
		        {
		            label: "Auto",
		            backgroundColor: [
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(54, 162, 235, 0.2)'
		            ],
		            borderColor: [
		                'rgba(54, 162, 235, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(54, 162, 235, 1)'
		            ],
		            borderWidth: 1,
		            data: [1212363,1406296,1578111,1517038,1841905,439190,39876],
		        },
		        {
		            label: "Belleza",
		            backgroundColor: [
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(255, 206, 86, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255, 206, 86, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(255, 206, 86, 1)'
		            ],
		            borderWidth: 1,
		            data: [717041,751243,885764,934641,1031380,617057,50268],
		        },
		        {
		            label: "Hogar",
		            backgroundColor: [
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(75, 192, 192, 0.2)'
		            ],
		            borderColor: [
		                'rgba(75, 192, 192, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(75, 192, 192, 1)'
		            ],
		            borderWidth: 1,
		            data: [1324141,1339017,1359566,1319981,1369577,1021742,239523],
		        },{
		            label: "Moda",
		            backgroundColor: [
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(153, 102, 255, 0.2)'
		            ],
		            borderColor: [
		                'rgba(153, 102, 255, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(153, 102, 255, 1)'
		            ],
		            borderWidth: 1,
		            data: [4850525,5192604,5506787,5666964,6118666,8541185,2643278],
		        },{
		            label: "Ocio",
		            backgroundColor: [
		                'rgba(255, 159, 64, 0.2)',
		                'rgba(255, 159, 64, 0.2)',
		                'rgba(255, 159, 64, 0.2)',
		                'rgba(255, 159, 64, 0.2)',
		                'rgba(255, 159, 64, 0.2)',
		                'rgba(255, 159, 64, 0.2)',
		                'rgba(255, 159, 64, 0.2)'

		            ],
		            borderColor: [
		                'rgba(255, 159, 64, 1)',
		                'rgba(255, 159, 64, 1)',
		                'rgba(255, 159, 64, 1)',
		                'rgba(255, 159, 64, 1)',
		                'rgba(255, 159, 64, 1)',
		                'rgba(255, 159, 64, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1,
		            data: [2867086,2822093,2806156,2784380,2845168,2443938,1268795],
		        },{
		            label: "Restauración",
		            backgroundColor: [
		                'rgba(12, 105, 255, 0.2)',
		                'rgba(12, 105, 255, 0.2)',
		                'rgba(12, 105, 255, 0.2)',
		                'rgba(12, 105, 255, 0.2)',
		                'rgba(12, 105, 255, 0.2)',
		                'rgba(12, 105, 255, 0.2)',
		                'rgba(12, 105, 255, 0.2)'
		            ],
		            borderColor: [
		                'rgba(12, 105, 255, 1)',
		                'rgba(12, 105, 255, 1)',
		                'rgba(12, 105, 255, 1)',
		                'rgba(12, 105, 255, 1)',
		                'rgba(12, 105, 255, 1)',
		                'rgba(12, 105, 255, 1)',
		                'rgba(12, 105, 255, 1)'
		            ],
		            borderWidth: 1,
		            data: [1524516,1752776,1938147,2152783,2867951,4424977,4180361],
		        },{
		            label: "Salud",
		            backgroundColor: [
		                'rgba(35,35,35, 0.2)',
		                'rgba(35,35,35, 0.2)',
		                'rgba(35,35,35, 0.2)',
		                'rgba(35,35,35, 0.2)',
		                'rgba(35,35,35, 0.2)',
		                'rgba(35,35,35, 0.2)',
		                'rgba(35,35,35, 0.2)'
		            ],
		            borderColor: [
		                'rgba(35,35,35,1)',
		                'rgba(35,35,35,1)',
		                'rgba(35,35,35,1)',
		                'rgba(35,35,35,1)',
		                'rgba(35,35,35,1)',
		                'rgba(35,35,35,1)',
		                'rgba(35,35,35,1)'
		            ],
		            borderWidth: 1,
		            data: [3095637,3260322,3372041,3139040,2847899,1193923,212291],
		        },{
		            label: "Tecnología",
		            backgroundColor: [
		                'rgba(255, 81, 220, 0.2)',
		                'rgba(255, 81, 220, 0.2)',
		                'rgba(255, 81, 220, 0.2)',
		                'rgba(255, 81, 220, 0.2)',
		                'rgba(255, 81, 220, 0.2)',
		                'rgba(255, 81, 220, 0.2)',
		                'rgba(255, 81, 220, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255, 81, 220, 1)',
		                'rgba(255, 81, 220, 1)',
		                'rgba(255, 81, 220, 1)',
		                'rgba(255, 81, 220, 1)',
		                'rgba(255, 81, 220, 1)',
		                'rgba(255, 81, 220, 1)',
		                'rgba(255, 81, 220, 1)'
		            ],
		            borderWidth: 1,
		            data: [1105065,1060060,1066497,1070782,1181055,1088975,357610],
		        }
		    ]
		};

		var myBarChart = new Chart(ctx, {
		    type: 'bar',
		    data: data,
		    options: {
		        scales: {
		            xAxes: [{
		                stacked: true
		            }],
		            yAxes: [{
		                stacked: true
		            }]
		        }
		    }
		});