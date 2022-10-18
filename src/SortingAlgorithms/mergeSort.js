export function getMergeAnimation(arr){
    const anime = [];
    if (arr.length <= 1){
        return arr;
    }
    const cpyArr = arr.slice();
    mergeSort(arr, 0 , arr.length - 1, cpyArr, anime);
    return anime;
}

function mergeSort(arr, firstIdx, lastIdx, cpyArr, anime){
    if (firstIdx == lastIdx) return;
    const midIdx = Math.floor((lastIdx + firstIdx) / 2);
    mergeSort(cpyArr, firstIdx, midIdx, arr, anime);
    mergeSort(cpyArr, midIdx + 1, lastIdx, arr, anime);
    merge(arr, firstIdx, midIdx, lastIdx, cpyArr, anime);  
}


function merge(arr, firstIdx, midIdx, lastIdx, cpyArr, anime){
    let i = firstIdx;
    let j = firstIdx;
    let k = midIdx + 1;
    while (j <= midIdx && k <= lastIdx) {

      anime.push([j, k]);

      anime.push([j, k]);
      if (cpyArr[j] <= cpyArr[k]) {

        anime.push([i, cpyArr[j]]);
        arr[i++] = cpyArr[j++];
      } else {

        anime.push([i, cpyArr[k]]);
        arr[i++] = cpyArr[k++];
      }
    }
    while (j <= midIdx) {

      anime.push([j, j]);

      anime.push([j, j]);

      anime.push([i, cpyArr[j]]);
      arr[i++] = cpyArr[j++];
    }
    while (k <= lastIdx) {

      anime.push([k, k]);

      anime.push([k, k]);

      anime.push([i, cpyArr[k]]);
      arr[i++] = cpyArr[k++];
    }
}