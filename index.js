function bubbleSort(arr) {
    var i,
        j;
    var len = arr.length;

    var isSwapped = false;

    for (i = 0; i < len; i++) {

        isSwapped = false;

        for (j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }

        if (! isSwapped) {
            break;
        }
    }
    return arr;
}


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var randomizeButton = document.getElementById("random");
var solveButton = document.getElementById("solve");

let randomSetArray,
    sortedArray = [];

output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

function generateRandomArray(length) {
    let arr = Array.from({
        length
    }, () => Math.floor(Math.random() * 1000));
    return arr;
}


randomizeButton.onclick = function () {
    randomSetArray = generateRandomArray(slider.value);
    console.log(randomSetArray);

};

function isCanvasBlank(canvas) {
    var blank = document.createElement('canvas');
    blank.width = canvas.width;
    blank.height = canvas.height;

    blank.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    return canvas.toDataURL() == blank.toDataURL();
}
solveButton.onclick = function () {
    sortedArray = bubbleSort(randomSetArray);

    const canvas = document.getElementById("canvas");
    var chartExist = Chart.getChart("canvas"); 
    if (chartExist != undefined) 
        chartExist.destroy();
    
    new Chart(canvas, {
        type: 'bar',
        data: {
            labels: sortedArray,
            datasets: [
                {
                    labels: sortedArray,
                    data: sortedArray,
                    backgroundColor: [
                    "#b91d47",
                    "#00aba9",
                    "#2b5797",
                    "#e8c3b9",
                    "#1e7145"
                ]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                }
            }
        }
    });


};
