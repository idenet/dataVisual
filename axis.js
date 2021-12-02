const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.style.width = canvas.width + 'px'
canvas.style.height = canvas.height + 'px'
canvas.width = canvas.width * 1.5
canvas.height = canvas.height * 1.5

// 提前设置相关属性
const ht = canvas.clientHeight
const wd = canvas.clientWidth
const pad = 20
const bottomPad = 20
const step = 100

// 绘制坐标轴
ctx.beginPath()
ctx.lineWidth = 2
ctx.strokeStyle = 'lightblue'
ctx.moveTo(pad, pad)
ctx.lineTo(pad, ht * 1.5 - bottomPad)
ctx.lineTo(wd * 1.5 - pad, ht * 1.5 - bottomPad)
ctx.stroke()
ctx.closePath()

// 绘制x轴方向刻度
ctx.beginPath()
ctx.lineWidth = 1
ctx.strokeStyle = '#666'
for (let i = 1; i < Math.floor((wd * 1.5) / step); i++) {
  ctx.moveTo(pad + i * step, ht * 1.5 - bottomPad)
  ctx.lineTo(pad + i * step, ht * 1.5 - bottomPad - 10)
}
ctx.stroke()
ctx.closePath()

// 绘制Y轴方向刻度
ctx.beginPath()
ctx.lineWidth = 1
ctx.strokeStyle = '#666'
for (let i = 1; i < Math.floor((wd * 1.5) / step); i++) {
  ctx.moveTo(pad, ht * 1.5 - bottomPad - i * step)
  ctx.lineTo(pad + 10, ht * 1.5 - bottomPad - i * step)
}
ctx.stroke()
ctx.closePath()
