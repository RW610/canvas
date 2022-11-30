let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let width = canvas.width
let height = canvas.height
let points = []
let numPoints = 7
let hue = Math.random() * 360
let color = 'hsla(' + (Math.random() * 360) + ', 50%, 50%, 1)'

let rand = function (x) {
      return Math.random() * x
    }

    let point = function () {
      this.x = rand(width)
      this.y = rand(height)
      this.xSpeed = rand(1) - .5
      this.ySpeed = rand(1) - .5
    }

    point.prototype.move = function () {
      this.x += this.xSpeed
      this.y += this.ySpeed
    }

    point.prototype.checkCollision = function () {
      if (this.x < 0 || this.x > width) {
        this.xSpeed = -this.xSpeed
      }
      if (this.y < 0 || this.y > height) {
        this.ySpeed = -this.ySpeed
      }
    }

    for (let i = 0; i < numPoints; i++) {
      points[i] = new point()
    }

    setInterval(function () {
      ctx.clearRect(0, 0, width, height)
      for (let i = 0; i < points.length; i++) {
        points[i].move()
        points[i].checkCollision()
      }

      ctx.beginPath()
      ctx.moveTo(points[0]['x'], points[0]['y'])
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i]['x'], points[i]['y'])
      }
      ctx.closePath()
      //ctx.fillStyle = "hsla(" + hue + ", 50%, 50%, 1)"
      //hue += .1
      ctx.fillStyle = "#1C1C1C"
      ctx.fill()
      ctx.strokeStyle = "White"
      ctx.stroke()
      //ctx.strokeRect(0, 0, width, height)
    }, 1)

let add = function () {
      balls.push(new ball)
    }

let remove = function () {
      balls.pop()
    }

    $("#add").click(add)
    $("#remove").click(remove)
