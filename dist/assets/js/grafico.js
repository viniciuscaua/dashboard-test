try {
    const counter = document.querySelectorAll('.counter-value');
    const speed = 2500;

    counter.forEach(counter_value => {
        const updateCount = () => {
            const target = +counter_value.getAttribute('data-target');
            const count = +counter_value.innerText;

            var inc = target / speed;

            if (inc < 1) {
                inc = 1;
            }

            if (count < target) {
                counter_value.innerText = (count + inc).toFixed(0);
                setTimeout(updateCount, 1);
            } else {
                counter_value.innerText = target;
            }
        };

        updateCount();
    });
} catch (err) {

}

try {
    const tobii = new Tobii()
} catch (err) {

}

try {
    ClassicEditor
        .create(document.querySelector('#editor'))
        .catch(error => {
            console.error(error);
        });
} catch (err) {

}

(function () {
    'use strict'

    if (document.getElementsByClassName('needs-validation').length > 0) {
        var forms = document.querySelectorAll('.needs-validation')

        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
    }
})()

try {
    var options = {
        chart: {
            height: 360,
            type: 'area',
            width: '100%',
            stacked: true,
            toolbar: {
                show: false,
                autoSelected: 'zoom'
            },
        },
        colors: ['#2f55d4', '#2eca8b'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: [1.5, 1.5],
            dashArray: [0, 4],
            lineCap: 'round',
        },
        grid: {
            padding: {
                left: 0,
                right: 0
            },
            strokeDashArray: 3,
        },
        markers: {
            size: 0,
            hover: {
                size: 0
            }
        },
        series: [{
            name: 'Feitas',
            data: [0, 100, 40, 110, 60, 140, 55, 130, 65, 180, 75, 115],
        }, {
            name: 'Não feitas',
            data: [0, 45, 10, 75, 35, 94, 40, 115, 30, 105, 65, 110],
        }],
        xaxis: {
            type: 'month',
            categories: ['01/06', '02/06', '03/06', '04/06', '05/06', '06/06', '07/06', '08/06', '09/06', '10/06', '11/06', '12/06'],
            axisBorder: {
                show: true,
            },
            axisTicks: {
                show: true,
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: .8,
                opacityFrom: 0.3,
                opacityTo: 0.2,
                stops: [0, 80, 100]
            }
        },

        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
        legend: {
            position: 'bottom',
            offsetY: 0,
        },
    }

    var chart = new ApexCharts(
        document.querySelector("#dashboard"),
        options
    );

    chart.render();
} catch (error) {

}
