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

// 绘制矩形
// ctx.beginPath()
// ctx.lineWidth = 5
// ctx.strokeStyle = 'orange'
// ctx.fillStyle = 'hotpink'
// ctx.rect(100, 100, 300, 200)
// // 先填充在描边
// ctx.fill()
// ctx.stroke()
// ctx.closePath()

// // 绘制矩形
// ctx.beginPath()
// ctx.lineWidth = 4
// ctx.strokeStyle = 'seagreen'
// ctx.strokeRect(100, 310, 300, 200)
// ctx.closePath()

// ctx.beginPath()
// ctx.fillStyle = 'skyblue'
// ctx.fillRect(410, 310, 300, 200)
// ctx.closePath()

ctx.beginPath()
for (let i = 1; i < Math.floor((wd * 1.5) / step); i++) {
  const height = Math.random() * 300 + 50
  ctx.fillStyle = `#${parseInt(Math.random() * 0xffffff).toString(16)}`
  ctx.fillRect(i * step, ht * 1.5 - bottomPad - height, 40, height)
}
ctx.closePath()
