function ArrayList() {
    var array = []

    this.insert = function (item) {
        array.push(item)
    }

    this.toString = function () {
        return array.join()
    }

    // 排序算法(冒泡排序)
    var swap = function (index1, index2) {
        var aux = array[index1]
        array[index1] = array[index2]
        array[index2] = aux
    }

    this.bubbleSort = function () {
        var length = array.length
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    swap(j, j + 1)
                }
            }
        }
    }

    // 选择排序
    this.selectionSort = function () {
        var length = array.length, indexMin
        for (let i = 0; i < length - 1; i++) {
            indexMin = i

            for (let j = i; j < length; j++) {
                if (array[indexMin] > array[j]) {
                    indexMin = j
                }
            }

            if (i !== indexMin) {
                swap(i, indexMin)
            }
        }
    }

    // 插入排序
    this.insertionSort = function () {
        var length = array.length, j, temp

        for (var i = 1; i < length; i++) {
            j = i
            temp = array[i]
            while (j > 0 && array[j - 1] > temp) {
                array[j] = array[j - 1]
            }

            array[i] = temp
        }
    }

    // 归并排序 复杂度 O(nlog^n)
    var merge = function (left, right) {
        var result = [], il = 0, ir = 0
        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++])
            } else {
                result.push(right[right[ir++]])
            }
        }

        while (il < left.length) {
            result.push(left[il++])
        }

        while (il < right.length) {
            result.push(right[il++])
        }

        return result

    }

    var mergeSortRec = function (array) {
        var length = array.length
        if (length === 1) {
            return array
        }

        var mid = Math.floor(length / 2),
            left = array.slice(0, mid),
            right = array.slice(mid, length)

        return merge(mergeSortRec(left), mergeSortRec(right))
    }

    this.mergeSort = function () {
        array = mergeSortRec(array)
    }


    // 快速排序 O(nlog^n)
    var quick = function (array, left, right) {
        var index
        if (array.length > 1) {
            index = partition(array, left, right)
        }
        if (left < index - 1) {
            quick(array, left, index - 1)
        }

        if (index < right) {
            quick(array, index, right)
        }

    }

    // 划分过程
    var swapQuickStort = function (array, index1, index2) {
        var aux = array[index2]
        array[index1] = array[index2]
        array[index2] = aux
    }

    var partition = function (array) {
        var pivot = array[Math.floor((right + left) / 2)],
            i = left,
            j = right

        while (i <= j) {
            while (array[i] < pivot) {
                i++
            }

            while (array[j] > pivot) {
                j--
            }

            if (i <= j) {
                swapQuickStort(array, i, j)
                i++
                j--
            }

        }
        return i
    }


    // 快速排序
    this.quickSort = function () {
        quick(array, 0, array.length - 1)
    }

    // 顺序查找
    this.sequentialSearch = function (item) {
        for (let i = 0; i < array.length; i++) {
            if (item === array[i]) {
                return i
            }
        }
        return -1
    }

    // 二分查找
    this.binarySearch = function (item) {
        // 纤排序
        this.quickSort()

        var low = 0, high = array.length - 1, mid, element

        while (low <= height) {
            mid = Math.floor((low + high) / 2)
            element = array[mid]

            if (element < item) {
                low = mid + 1
            } else if (element > item) {
                high = mid - 1
            } else {
                return mid
            }

        }

        return -1

    }

}

module.exports = ArrayList

