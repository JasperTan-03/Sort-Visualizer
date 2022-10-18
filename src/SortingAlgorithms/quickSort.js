export function getQuickAnimation(arr){
const anime = [];
if (arr.length <= 1) return arr;
quickSort(arr, 0, arr.length-1, anime);
return anime;
} 

function quickSort(arr, low, high, anime){
    // if (low < high){
    //     let pivot = partition(arr, low, high, anime);
    //     quickSort(arr, low, pivot-1, anime);
    //     quickSort(arr,pivot+1, high, anime);
    // }

    if (arr.length > 1){
        let pivot = partition(arr, low, high, anime);
        if (low < pivot - 1){
            quickSort(arr,low, pivot-1, anime);
        }
        if (pivot < high){
            quickSort(arr, pivot, high, anime);
        }
    }
}

function partition(arr, low, high, anime){
    // let pivot = arr[high];
    // let i = (low - 1);
    // for (let j = low; j <= high-1; j++){
    //     if (arr[j] < pivot){
    //         i ++;
    //         anime.push([i, j]);
    //         anime.push([i, j]);
    //         anime.push([i, arr[j], j, arr[i]]);
    //         let temp = arr[i];
    //         arr[i] = arr[j];
    //         arr[j] = temp;
    //     }
    // }
    // i++;
    // anime.push([i, i]);
    // anime.push([i, i]);
    // anime.push([i, arr[high], high, arr[i]]);
    // let temp = arr[high];
    // arr[high] = arr[i];
    // arr[i] = temp;
    // return i;

    let pivot   = arr[Math.floor((high + low) / 2)], //middle element
    i       = low, //left pointer
    j       = high; //right pointer
    while (i <= j) {
        anime.push([i,j]);
        anime.push([i,j]);
        anime.push([i,arr[i], j, arr[j]]);

        while (arr[i] < pivot) {
            i++;
            anime.push([i,j]);
            anime.push([i,j]);
            anime.push([i,arr[i], j, arr[j]]);
        }
        while (arr[j] > pivot) {
            j--;
            anime.push([i,j]);
            anime.push([i,j]);
            anime.push([i,arr[i], j, arr[j]]);
        }
        if (i <= j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            anime.push([i,j]);
            anime.push([i,j]);
            anime.push([i,arr[i], j, arr[j]]);
            i++;
            j--;
            // anime.push([i,j]);
            // anime.push([i,j]);
            // anime.push([i,arr[i], j, arr[j]]);
        }
    }
    return i;
}