export function getHeapAnimation(arr){
    const anime = [];
    if(arr.length <= 1) return arr;
    heapSort(arr, anime);
    return anime;
}
function heapify(arr, size, idx, anime){
    let largest = idx;
    let left = 2*idx + 1;
    let right = 2*idx + 2;

    if(left < size && arr[largest] < arr[left]){
        largest = left;
    }
    if(right < size && arr[largest] < arr[right]){
        largest = right;
    }
    if(largest != idx){
        anime.push([idx,largest]);
        anime.push([idx,largest]);
        anime.push([idx, arr[largest], largest, arr[idx]]);
        let temp = arr[idx];
        arr[idx] = arr[largest];
        arr[largest] = temp; 
        heapify(arr, size, largest, anime);
    }
}

function heapSort(arr, anime){
   let size = arr.length;

   for(let idx = Math.floor(size/2) - 1; idx > -1; idx--){
        heapify(arr, size, idx, anime);
   }

   for(let idx = size - 1; idx > 0; idx--){
        anime.push([0,idx]);
        anime.push([0,idx]);
        anime.push([0, arr[idx], idx, arr[0]]);
        let temp = arr[0];
        arr[0] = arr[idx];
        arr[idx] = temp;
        heapify(arr, idx, 0, anime);
   }
}