///////////////////Graficas

		var ctx2 = $("#graficoDos");

		var data = {
		    labels: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
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
		            data: [0],
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
		            data: [0],
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
		            data: [0],
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
		            data: [0],
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
		            data: [0],
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
		            data: [0],
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
		            data: [0],
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
		            data: [0],
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
		            data: [0],
		        }
		    ]
		};

		var myBarChart2 = new Chart(ctx2, {
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