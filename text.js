const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.style.width = canvas.width + 'px'
canvas.style.height = canvas.height + 'px'
canvas.width = canvas.width * 1.5
canvas.height = canvas.height * 1.5

// 绘制居中线条

ctx.beginPath()
ctx.lineWidth = 1
ctx.strokeStyle = '#ccc'
ctx.moveTo(450, 0)
ctx.lineTo(450, 750)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.lineWidth = 1
ctx.strokeStyle = '#ccc'
ctx.moveTo(0, 375)
ctx.lineTo(900, 375)
ctx.stroke()
ctx.closePath()

// 实心文字
ctx.fillStyle = 'orange'
ctx.strokeStyle = 'hotpink'
ctx.font = 'bold 60px 微软雅黑'
// 最后一个 设置文字宽度
ctx.fillText('拉钩教育', 100, 100, 100)
ctx.strokeText('前端', 100, 240)

// 对齐属性设置
ctx.textAlign = 'center'
ctx.textBaseline = 'bottom'
ctx.fillText('拉钩教育', 450, 375)
