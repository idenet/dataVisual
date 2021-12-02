const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.lineWidth = 4
ctx.strokeStyle = 'orange'

const getPixelRatio = (context) => {
  return window.devicePixelRatio || 1
}

/**
 * 放大 canvas中
 * 再在css里将宽高设置为原来的大小
 * 考虑到内容的缩放， 因此也需将ctx缩放
 */

const radio = getPixelRatio()
const oldWidth = canvas.width
const oldHeight = canvas.height

canvas.width = canvas.width * radio
canvas.height = canvas.height * radio

canvas.style.width = oldWidth + 'px'
canvas.style.height = oldHeight + 'px'

ctx.scale(radio, radio)

// 起点 终点 中间点
ctx.moveTo(100, 100)
ctx.lineTo(300, 300)
ctx.stroke()
ctx.closePath()
