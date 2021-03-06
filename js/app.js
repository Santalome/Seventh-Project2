const alertBanner = document.querySelector(".alert");
const bannerHtml = `<div class="alert-banner">
        <p class="alert-banner-text"><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class="alert-banner-close"><strong onclick="hide(alertBanner);">x</strong></p>
        </div >`;

alertBanner.innerHTML = bannerHtml;
alertBanner.addEventListener('click', (e) => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alert.style.display = "none"
    }
})

const trafficCanvas = document.querySelector("#traffic-chart");
const dailyCanvas = document.getElementById("daily-chart");
const mobileCanvas = document.getElementById("mobile-chart");
const trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [500, 1000, 1500, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
            2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

const trafficOptions = {
    aspectRatio: 4,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});


const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 7
    }]
};
const dailyOptions = {
    aspectRatio: 2,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
}

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});



const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
}

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

function hide(obj){
    obj.style.display = 'none';
}

const submitBtn = document.querySelector(".button-primary");

const validate = (e) => {
    e.preventDefault();
    const username = document.querySelector("#userField");
    const usertextarea = document.querySelector("#messageField");
    if (username.value === "") {
        alert("Please enter your username.");
        username.focus();
        return false;
    }
    if (usertextarea.value === "") {
        alert("Please enter your message.");
        usertextarea.focus();
        return false;
    }
    alert("Message sent.");
    return true;
}

submitBtn.addEventListener('click', validate);
