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

const drawAxis = (options) => {
  const { ht, wd, pad, bottomPad, step, ctx } = options
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
    ctx.lineTo(pad + i * step, ht * 1.5 - bottomPad + 10)
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
}

drawAxis({
  ht: ht,
  wd: wd,
  pad: pad,
  bottomPad: bottomPad,
  step: step,
  ctx: ctx,
})

// 绘制圆环
// ctx.beginPath()
// ctx.lineWidth = 2
// ctx.strokeStyle = 'orange'
// ctx.arc(400, 300, 200, 0, Math.PI / 4, true)
// ctx.stroke()
// ctx.closePath()

// // 绘制圆形

// ctx.beginPath()
// ctx.fillStyle = 'skyblue'
// ctx.moveTo(400, 300)
// ctx.arc(400, 300, 100, 0, -Math.PI / 2, true)
// ctx.fill()
// ctx.closePath()

ctx.beginPath()
ctx.shadowOffsetX = 0
ctx.shadowOffsetY = 0
ctx.shadowBlur = 4
ctx.shodowColor = '#333'
ctx.fillStyle = `#5c1918`
ctx.moveTo(400, 300)
ctx.arc(400, 300, 100, -Math.PI / 2, -Math.PI / 4)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.shadowOffsetX = 0
ctx.shadowOffsetY = 0
ctx.shadowBlur = 4
ctx.shodowColor = '#5c1918'
ctx.fillStyle = `#a32d29`
ctx.moveTo(400, 300)
ctx.arc(400, 300, 110, -Math.PI / 4, Math.PI / 4)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.shadowOffsetX = 0
ctx.shadowOffsetY = 0
ctx.shadowBlur = 4
ctx.shodowColor = '#a32d29'
ctx.fillStyle = `#b9332e`
ctx.moveTo(400, 300)
ctx.arc(400, 300, 120, Math.PI / 4, (Math.PI * 5) / 8)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.shadowOffsetX = 0
ctx.shadowOffsetY = 0
ctx.shadowBlur = 4
ctx.shodowColor = '#b9332e'
ctx.fillStyle = `#842320`
ctx.moveTo(400, 300)
ctx.arc(400, 300, 130, (Math.PI * 5) / 8, Math.PI)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.shadowOffsetX = 0
ctx.shadowOffsetY = 0
ctx.shadowBlur = 4
ctx.shodowColor = '#842320'
ctx.fillStyle = `#d76620`
ctx.moveTo(400, 300)
ctx.arc(400, 300, 140, Math.PI, (Math.PI * 3) / 2)
ctx.fill()
ctx.closePath()
