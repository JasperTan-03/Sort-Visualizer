export function getSelectionAnimation(arr){
    const anime = [];
    if (arr.length <= 1){
        return arr;
    }
    selectionSort(arr, anime);
    return anime;

}

function selectionSort(arr, anime){
    for (let i = 0; i < arr.length - 1; i ++){
        let min = i;
        for (let j = i + 1; j < arr.length; j ++){
            anime.push([min,j]);
            anime.push([min, j]);
            anime.push([min, arr[min], min, arr[min]]);
            if (arr[j] < arr[min]) min = j;
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
        anime.push([min,min]);
        anime.push([min,min]);
        anime.push([i, arr[i], min, arr[min]]);
    }
}
