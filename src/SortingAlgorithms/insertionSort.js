export function getInsertionAnimation(arr){
    const anime = [];
    if(arr.length <= 1) return arr;
    insertionSort(arr, anime);
    return anime;
}

function insertionSort(arr, anime){
    for(let i = 1; i < arr.length; i++){
        let idx = i - 1;
        let temp = arr[i];
        anime.push([i,idx]);
        anime.push([i,idx]);
        anime.push([i,temp]);
        while(idx >= 0 && arr[idx] > temp){
            anime.push([idx,idx+1]);
            anime.push([idx,idx+1]);
            anime.push([idx+1, arr[idx]]);
            arr[idx + 1] = arr[idx];
            idx--;
        }
        anime.push([idx+1,i]);
        anime.push([idx+1,i]);
        anime.push([idx+1, temp]);
        arr[idx + 1] = temp;
    }
}