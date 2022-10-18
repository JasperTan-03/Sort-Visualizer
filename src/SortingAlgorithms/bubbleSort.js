export function getBubbleAnimation(arr){
    const anime = [];
    if(arr.length <= 1) return arr;
    bubbleSort(arr, anime);
    return anime;
}

function swap(arr, x, y){//swap x with y
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

function bubbleSort(arr, anime){
    let length = arr.length;
    for(let i = 0; i < length - 1; i++){
        for(let j = 0; j < length - i - 1; j++){
            anime.push([j,j+1]);
            anime.push([j,j+1]);
            anime.push([j,arr[j],j+1,arr[j+1]]);
            if(arr[j] > arr[j + 1]){
                anime.push([j,j+1]);
                anime.push([j,j+1]);
                anime.push([j,arr[j+1],j+1,arr[j]]);
                swap(arr, j , j + 1);
            }
        }
    }
}