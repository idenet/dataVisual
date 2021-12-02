const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.style.width = canvas.width + 'px'
canvas.style.height = canvas.height + 'px'
canvas.width = canvas.width * 1.5
canvas.height = canvas.height * 1.5

const drawCircle = (x, y, r) => {
  ctx.beginPath()
  ctx.fillStyle = 'orange'
  ctx.arc(x, y, r, 0, Math.PI * 2)
  ctx.fill()
  ctx.closePath()
}

// 配置属性

const wd = canvas.clientWidth * 1.5
const ht = canvas.clientHeight * 1.5
let x = 100
let y = 100
const r = 20
let xSpeed = 6
let ySpeed = 4

drawCircle(x, y, r)

setInterval(() => {
  ctx.clearRect(0, 0, wd, ht) // 清除画布 动画
  if (x - r <= 0 || x + r >= wd) {
    xSpeed = -xSpeed
  }
  if (y - r <= 0 || y + r >= ht) {
    ySpeed = -ySpeed
  }
  x += xSpeed
  y += ySpeed
  drawCircle(x, y, r)
}, 20)
