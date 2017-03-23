///////////////////Graficas

		var ctx4 = $("#graficoCuatro");

		var data = {
		    labels: ["Alimentación", "Auto", "Belleza", "Hogar", "Moda", "Ocio", "Restauración", "Salud", "Tecnología"],
		    datasets: [
		        {
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)',
						'rgba(12, 105, 255, 0.2)',
						'rgba(35,35,35, 0.2)',
						'rgba(255, 81, 220, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)',
						'rgba(12, 105, 255, 1)',
						'rgba(35,35,35, 1)',
						'rgba(255, 81, 220, 1)'
		            ],
		            borderWidth: 1,
		            data: [671157, 43566, 99569, 138795, 619617, 258888, 496198, 243341, 65226],
		        }
		    ]
		};

		var myBarChart4 = new Chart(ctx4, {
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
		        },
		        legend: {
		        	display: false
		        },
		        title: {
		            display: true,
		            text: 'Transacciones por sector'
		        }
		    }
		});

		