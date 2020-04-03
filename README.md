### js 数据结构和算法实现

    本项目为js的数据结构和算法的练习，source，test， leecode分别为 实现 数据结构的类/ 测试demo /leecode刷题详解

### 数组
    js原生支持Array的数据结构，并且自带了一些方法

    ```
        push, pop, shift , unshift , indexOf , slice, concat, splice, valueOf , toString
    ```

    迭代器函数(函数式编程)
    ```
        every, some, forEach, map , sort, filter, reduce
    ```
    em: sort 迭代器函数的使用

### 栈

    栈是一种遵从后进先出(LIFO)原则的有序集合

    使用数组实现栈的规则，实现栈的基本方法（入栈，出栈，查找，清除）

    ```
        push ， pop， peek， isEmpty， clear， size
    ```

    em: 十进制的进制转换

### 队列

    队列是一种遵从先进先出(FIFO)原则的有序集合

    使用数组实现栈的规则，实现栈的基本方法（入队，出队，查找，清除）

    ```
        enqueue, dequeue, front, isEmpty, size
    ```

    em: 优先队列/循环队列的实现

### 链表

    链表的元素存在指针关系

    单向链表(单指针)/ 双向链表（双指针）/ 循环链表

    ```
        append， insert， removeAt，  remove， isEmpty， size， toString ， getHead
    ```
    em： 循环链表的实现

### 集合

    集合是由一组无序且唯一(即不能重复)的项组成的， 使用Map实现

    ```
        in hasOwnProperty 的区别

        add， remove， has， clear， size

        交/并/差
        intersection， union， difference

    ```

### 字典

    字典中，我们用[键，值]的形式来存储数据（基于Map实现）

    ```
        set, removem, has, get, clear, size, keys, values

    ```

### 散列表

    HashMap类， 也是字典的一种

    为了处理key（HashCode）冲突的问题， 使用了两种方法， 分离链接（separateChaining）和 线性探查（linearProbing）

    ```
        put remove get

        // 更加好的散列函数

        var djb2HashCode = function(key) {
            var hash = 5381
            for (let i = 0; i < key.length; i++) {
                hash = hash*33 + key.charCodeAt(i)           
            }

            return hash % 1013
        } 
        
    ```

### 树（非顺序数据结构）
    二叉树和二叉搜索树（BST）bi
    目前只研究二叉搜索树，只允许左边节点存储小的值， 在右侧节点存储大的值

    ```
        insert， search，max， min， remove
        inOrderTraverseNode（中序遍历）， 从最小到最大的顺序访问所有节点
        preOrderTraverse (先序遍历) ，以优先于后代节点的顺序访问每个节点的
        postOrderTraverse（后续遍历），先访问节点的后代节点，再访问节点本身。
    ```


### 图

    实现方法：邻接矩阵，邻接表， 关联矩阵， 此处使用邻接矩阵实现

    ```
        addVertex, addEdge, toString, BFS, DFS
    ```
算法 | 数据结构 |  描述  
-|-|-
深度优先搜索 | 栈  | 通过将顶点存入栈中，顶点是沿着路径被探索的，存在新的相邻顶点就去访问 |  
广度优先搜索 | 队列 | 通过将顶点存入队列中（在第4章中学习过），最先入队列的顶点先被探索 |



### 排序和搜索算法

    多种排序方式的实现

    ```
        bubbleSort, selectionSort, insertionSort, mergeSort, quickSort
    ```
    
    查找方式： 顺序查找和二分查找

    ```
        sequentialSearch, binarySearch
    ```
    

### 算法补充知识
    递归函数
    recursiveFunction 

    动态规划（最少找零问题实现）

    贪心算法