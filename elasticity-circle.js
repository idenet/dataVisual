const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.style.width = canvas.width + 'px'
canvas.style.height = canvas.height + 'px'
canvas.width = canvas.width * 1.5
canvas.height = canvas.height * 1.5

class Ball {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')
    this.wd = this.canvas.clientWidth * 1.5
    this.ht = this.canvas.clientHeight * 1.5
    this.r = Math.random() * 40 + 10
    this.x = Math.random() * (this.wd - this.r * 2) + this.r
    this.y = Math.random() * (this.ht - this.r * 2) + this.r
    this.color = '#' + parseInt(Math.random() * 0xffffff).toString(16)
    this.xSpeed = Math.random() * 4 + 6
    this.ySpeed = Math.random() * 6 + 4
    this.init()
  }

  init() {
    this.run()
    this.draw()
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.fillStyle = this.color
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
    this.ctx.fill()
    this.ctx.closePath()
  }
  run() {
    if (this.x - this.r <= 0 || this.x + this.r >= this.wd) {
      this.xSpeed = -this.xSpeed
    }
    if (this.y - this.r <= 0 || this.y + this.r >= this.ht) {
      this.ySpeed = -this.ySpeed
    }
    this.x += this.xSpeed
    this.y += this.ySpeed
  }
}

let ballArr = []
for (let i = 0; i < 20; i++) {
  let ball = new Ball(canvas)
  ballArr.push(ball)
}

// 动画
setInterval(() => {
  ctx.clearRect(0, 0, canvas.clientWidth * 1.5, canvas.clientHeight * 1.5)
  for (let i = 0; i < ballArr.length; i++) {
    let ball = ballArr[i]
    ball.init()
  }
}, 20)
