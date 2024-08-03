// let rightPressed = false;
//     let leftPressed = false;
//     let upPressed = false;
//     let downPressed = false;
//     const step = 5; // 移动步长

//     document.addEventListener("keydown", keyDownHandler, false);
//     document.addEventListener("keyup", keyUpHandler, false);

//     function keyDownHandler(e) {
//         if (e.key === "d" || e.key === "ArrowRight") {
//             rightPressed = true;
//         } else if (e.key === "a" || e.key === "ArrowLeft") {
//             leftPressed = true;
//         } else if (e.key === "w" || e.key === "ArrowUp") {
//             upPressed = true;
//         } else if (e.key === "s" || e.key === "ArrowDown") {
//             downPressed = true;
//         }
//     }

//     function keyUpHandler(e) {
//         if (e.key === "d" || e.key === "ArrowRight") {
//             rightPressed = false;
//         } else if (e.key === "a" || e.key === "ArrowLeft") {
//             leftPressed = false;
//         } else if (e.key === "w" || e.key === "ArrowUp") {
//             upPressed = false;
//         } else if (e.key === "s" || e.key === "ArrowDown") {
//             downPressed = false;
//         }
//     }

//     function    gameLoop() {
//       const square = document.getElementById('square');
//       const container = document.getElementById('container');

//       let top = parseInt(window.getComputedStyle(square).top, 10);
//       let left = parseInt(window.getComputedStyle(square).left, 10);

//       if (rightPressed) {
//         left += step;
//       }
//       if (leftPressed) {
//         left -= step;
//       }
//       if (upPressed) {
//         top -= step;
//       }
//       if (downPressed) {
//         top += step;
//       }

//       // 确保方块不会移出容器的边界
//       left = Math.max(0, Math.min(container.clientWidth - square.offsetWidth, left));
//       top = Math.max(0, Math.min(container.clientHeight - square.offsetHeight, top));

//       // 更新方块的位置
//       square.style.left = left + 'px';
//       square.style.top = top + 'px';

//       requestAnimationFrame(gameLoop);
//     }

//     gameLoop();


// document.addEventListener('keydown', function hhh (event) {
//     const square = document.getElementById('square');
//     const container = document.getElementById('container');
//     const step = 20; // 移动的步长
  
//     // 获取方块当前的 top 和 left 值
//     let top = parseInt(window.getComputedStyle(square).top, 10);
//     let left = parseInt(window.getComputedStyle(square).left, 10);
  
//     // 根据按下的箭头键更新方块的位置
//     switch(event.key) {
//       case 'ArrowUp':
//         top = Math.max(0, top - step); // 确保 top 不小于 0
//         break;
//       case 'ArrowDown':
//         top = Math.min(container.clientHeight - square.offsetHeight, top + step); // 确保 top 不超出容器底部
//         break;
//       case 'ArrowLeft':
//         left = Math.max(0, left - step); // 确保 left 不小于 0
//         break;
//       case 'ArrowRight':
//         left = Math.min(container.clientWidth - square.offsetWidth, left + step); // 确保 left 不超出容器右边
//         break;
//     }
  
//     // 更新方块的位置
//     square.style.top = top + 'px';
//     square.style.left = left + 'px';
//     requestAnimationFrame(hhh);

//   });
const add = (a, b) => a + b;
console.log(add(1, 2));

function sub(a, b) {
    
  return a - b;
}
  let square=function(x){
    return  x*x;
  }

  console.log(square(3));
   let square1=x=>x*x

  console.log(square1(5));