let array = [];
let speed = 50; 


document.getElementById('sortingSpeed').addEventListener('input', function() {
    speed = this.value; 
});


function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function resetArray() {
    let arraySize = document.getElementById('arraySize').value;
    
    arraySize = Math.min(arraySize, 50);

    array = [];
    const arrayContainer = document.getElementById('arrayContainer');
    arrayContainer.innerHTML = '';

    for (let i = 0; i < arraySize; i++) {
        array[i] = Math.floor(Math.random() * 300) + 5;
        const arrayBar = document.createElement('div');
        arrayBar.style.height = `${array[i]}px`;
        arrayBar.classList.add('array-bar');
        
     
        const numberSpan = document.createElement('span');
        numberSpan.textContent = array[i];
        arrayBar.appendChild(numberSpan);

        arrayContainer.appendChild(arrayBar);
    }
}


async function bubbleSort() {
    const bars = document.querySelectorAll('.array-bar');
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            bars[j].style.backgroundColor = '#FF4949';
            bars[j + 1].style.backgroundColor = '#FF4949';
            await new Promise(resolve =>
                setTimeout(resolve, 200 - speed) 
            );
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
                bars[j].style.height = `${array[j]}px`;
                bars[j].querySelector('span').textContent = array[j]; 
                bars[j + 1].style.height = `${array[j + 1]}px`;
                bars[j + 1].querySelector('span').textContent = array[j + 1]; 
            }
            bars[j].style.backgroundColor = '#4CAF50';
            bars[j + 1].style.backgroundColor = '#4CAF50';
        }
        bars[array.length - 1 - i].style.backgroundColor = '#00FFFF';
    }
}

async function insertionSort() {
    const bars = document.querySelectorAll('.array-bar');
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        bars[i].style.backgroundColor = '#FF4949';
        await new Promise(resolve =>
            setTimeout(resolve, 200 - speed) 
        );
        while (j >= 0 && array[j] > key) {
            swap(array, j, j + 1);
            bars[j].style.height = `${array[j]}px`;
            bars[j].querySelector('span').textContent = array[j]; 
            bars[j + 1].style.height = `${array[j + 1]}px`;
            bars[j + 1].querySelector('span').textContent = array[j + 1]; 
            j--;
        }
        bars[i].style.backgroundColor = '#4CAF50';
    }
}

async function selectionSort() {
    const bars = document.querySelectorAll('.array-bar');
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            bars[j].style.backgroundColor = '#FF4949';
            await new Promise(resolve =>
                setTimeout(resolve, 200 - speed) 
            );
            if (array[j] < array[minIndex]) {
                bars[minIndex].style.backgroundColor = '#4CAF50';
                minIndex = j;
            } else {
                bars[j].style.backgroundColor = '#4CAF50';
            }
        }
        swap(array, i, minIndex);
        bars[i].style.height = `${array[i]}px`;
        bars[i].querySelector('span').textContent = array[i]; 
        bars[minIndex].style.height = `${array[minIndex]}px`;
        bars[minIndex].querySelector('span').textContent = array[minIndex]; 
        bars[minIndex].style.backgroundColor = '#4CAF50';
    }
}


