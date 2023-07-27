function bubbleSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

function quickSort(arr = []) {
    const len = arr.length;
    if (len <= 1) {
        return arr;
    }

    const mid = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < len; i++) {
        if (arr[i] < mid) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), mid, ...quickSort(right)];
}

function selectionSort(arr = []) {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] > arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

function quickSortObj(arr = []) {
    const len = arr.length;
    if (len <= 1) {
        return arr;
    }

    const mid = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < len; i++) {
        if (arr[i].name > mid.name) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), mid, ...quickSort(right)];
}

function bubbleSortObj(arr) {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j].name < arr[j + 1].name) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

let numbers = [7, 1, 9, 6, 4, 8, 2, 5, 3];

//numbers.sort((a, b) => a > b ? -1 : 1); // min > max
//numbers.sort((a, b) => a - b); // min > max

//console.log(numbers);


let students = [
    { id: 5, name: 'Eduardo' },
    { id: 1, name: 'Barbara' },
    { id: 3, name: 'Genesis' },
    { id: 4, name: 'Rick' },
    { id: 2, name: 'Ryan' },
    { id: 6, name: 'Alexis' },
];

const result = bubbleSort([...numbers]);
console.log("numbers:", numbers);
console.log("bubble:", result);

const result2 = quickSort([...numbers]);
console.log("numbers:", numbers);
console.log("quick:", result2);

const result3 = selectionSort([...numbers]);
console.log("numbers:", numbers);
console.log("selection:", result3);

const result4 = quickSortObj([...students]);
console.log("students:", students);
console.log("Quick Sort Obj:", result4);



