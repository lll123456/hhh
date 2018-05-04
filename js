这周主要看了函数部分其中包括高阶函数、闭包等。然后就是看了箭头函数和generator（生成器）。
JavaScript与C/C++的差别
1.javascript的函数是一个对象，它可以赋给变量
var abs =function(x){
};
2.javas中调用函数时允许传入任意个参数，传入的参数比定义少时，其他参数将收到undefined，计算结果为NAN。c/c++中只能传入与形参列表一致的参数。
3.JavaScript中提供arguments，它只在函数中起作用，指向当前函数的调用者传入的所有参数，它类似array但它不是一个array。
4.reset参数，保存对于的参数，使用方法
function foo(a, b, ...rest) {
}
使用与arguments不同的地方是，argumen不用在参数列表中列出。
5.JavaScript中函数可以嵌套。
6.JavaScript中函数定义
function foo() {
    var x = 'Hello, ' + y;
    console.log(x);
    var y = 'Bob';
}
不会报错，因为JavaScript会把所有申明变量‘提升’到函数顶部，但是console.log显示Hello, undefined，它不会提升变量y的赋值。JavaScript引擎看到的代码相当于：
function foo() {
    var y; // 提升变量y的申明，此时y为undefined
    var x = 'Hello, ' + y;
    console.log(x);
    y = 'Bob';
}
如果是在c/c++中，这段代码会编译错误。
7.JavaScript中默认一个全局作用域window。全局变量会绑定到window上，不同的JavaScript文件如果使用了相同的全局变量，或者定义了相同名字的顶层函数，都会造成命名冲突，并且很难被发现。减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中。
8.JavaScript中交换变量值，可以不需要中间变量，使用它的解析赋值，这是c/c++中没有的。
var x=1, y=2;
[x, y] = [y, x]
9.map（）方法定义在array中，它是一个高阶函数。
使用方法：arr.map（pow）;
arr是一个数组，pow是一个函数名
map的作用就是把arr中的元素都执行pow（）这个函数，然后再返回结果。
10.sort（）排序；
[10, 20, 1, 2].sort(); // [1, 10, 2, 20]
这是因为Array的sort()方法默认把所有元素先转换为String再排序，结果'10'排在了'2'的前面，因为字符'1'比字符'2'的ASCII码小
sort（）也是一个高阶函数，它可以接受一个比较函数来自定义排序。
友情提示：sort排序是直接对当前对象进行修改。
11.闭包返回函数延迟执行，闭包是携带状态的函数，并且它的状态可以完全隐藏。与c++相比，JavaScript没有class，但它可以用闭包实现封装一个私有变量。
