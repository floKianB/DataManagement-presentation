const ctx = document.getElementById('firstChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Adventure', 'Agility', 'Cultural Influence', 'Entrepreneurship', 'Heritage', 'Movers', 'Open for Business', 'Power', 'Quality of Life', 'Social Purpose'],
        datasets: [{
            label: 'Canada',
            data: [50, 97.2, 49.3, 83.9, 30.9, 24, 83.9, 41.1, 100, 100],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
    }
});



const ctx2 = document.getElementById('secondChart').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['good job market', 'Affordable', 'Economically stable', 'Family-friendly', 'Income equality', 'Politically stable', 'Safe', 'Education system', 'Health system'],
        datasets: [{
            label: 'Quality of Life index',
            data: [100, 7.7, 99.9, 99, 61.6, 100, 96.7, 97.8, 95.9],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
    }
});


const labels = [
    '2000-2001',
    '2001-2002',
    '2002-2003',
    '2003-2004',
    '2004-2005',
    '2005-2006',
    '2006-2007',
    '2007-2008',
    '2008-2009',
    '2009-2010',
    '2010-2011',
    '2011-2012',
    '2012-2013',
    '2013-2014',
    '2014-2015',
    '2015-2016',
    '2016-2017',
    '2017-2018',
    '2018-2019',
    '2019-2020',
    '2020-2021',
];

const data = {
    labels: labels,
    datasets: [{
    label: 'Immigrants',
    backgroundColor: 'rgb(54, 162, 235, 1)',
    borderColor: 'rgb(54, 162, 235, 1)',
    data: [252527, 256405, 199170, 239083, 244578, 254374, 238125, 249622, 245289, 270581, 259110, 260036, 263101, 267924, 240763, 323192, 272707, 303325, 313601, 284157, 226203],
    }]
};

const config = {
    type: 'line',
    data: data,
    indexAxis : 0,
    options: {
        responsive: true,
    }
}

const myChart3 = new Chart(
    document.getElementById('thirdChart'),
    config
);


const data4 = {
    datasets: [{
        label: 'My First Dataset',
        data: [9910, 13678, 10930, 7984, 23730, 56100, 39083, 24482, 13949, 7852, 4384, 3720],
        backgroundColor: [
        '#FEFB01',
        '#CEFB02',
        '#87FA00',
        '#3AF901',
        '#00ED01',
        '#008000',
        '#45731E',
        '#675E24',
        '#8D472B',
        '#B13433',
        '#C82538',
        '#8b0000'
        ],
        borderColor: [
            '#0000'
        ]
    }],
    labels: [
        "0 - 4",
        "5 - 9",
        "10 - 14",
        "15 - 19",
        "20 - 24",
        "25 - 29",
        "30 - 34",
        "35 - 39",   
        "40 - 44",
        "45 - 49",
        "50 - 54",
        "55 - 59",
    ],
    showActualPercentages: true,
    fontColor: '#ffff',

};
const ctx4 = document.getElementById('fourthChart');
new Chart(ctx4, {
    data: data4,
    type: 'doughnut',
    options: {
    legend: {
        display: false,
        },
    scale: {
        display: false
        },
    responsive: true,
    title: {
        display: false,
        },
    legend: {
        display: true,
        position: "bottom",
        },
    }
});
