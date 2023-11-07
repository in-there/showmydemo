// 获取元素
let marker = document.querySelector('#indicator');
let nav = document.querySelector('nav');
let item = document.querySelectorAll('nav a');

// 判断去除change来改变样式
nav.addEventListener('click', function(e) {
    marker.classList.toggle('change');

});

// 移动到指定为止并随机更换颜色
function indicator(e) {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
    marker.style.display = 'block';
    marker.style.filter = 'hue-rotate('+ Math.random()*360 +'deg)';
}

// 为所有click事件添加触发函数indicator
item.forEach(link => {
    link.addEventListener('click', (e) => {
        indicator(e.target);
    })
})

// 判断是否为活动状态
function itemAddActive(){
    item.forEach(i => {
        i.classList.remove('active');
    });
    this.classList.add('active');
}

// 为所有click事件添加触发函数itemAddActive
item.forEach(i => {
    i.addEventListener('click', itemAddActive);
});