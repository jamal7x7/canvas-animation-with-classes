const canvas = document.getElementById('myCanvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext('2d')

const g ="#00FF00" 
const b ="#00fff0" 

const mouse = {
    x: undefined,
    y: undefined
}

const maxRadius = 40
const minRadius = 4

addEventListener('mousemove', e => {
    mouse.x = e.clientX
    mouse.y = e.clientY

    console.log(mouse)

})

class Circle {
    constructor(x, y, r, dx, dy) {
        this.x = x
        this.y = y
        this.r = r
        this.dx = dx
        this.dy = dy
    }

    info() {
        return `((Class::Circle) coordinate: ( ${this.x}, ${this.y})
                radius: ${this.r} 
                velocity: ( ${this.dx}, ${this.dy})`
    }

    draw() {
        c.fillStyle = g
        c.beginPath()
        c.arc(this.x, this.y, this.r, 0, 2*Math.PI, false)
        c.fill()  
    }

    update() {
        if ((this.x-this.r)<0 || this.x+this.r>innerWidth) {
            this.dx = -this.dx 
        } 
        if ((this.y-this.r)<0 || (this.y+this.r)>innerHeight) {
            this.dy = -this.dy
        } 

        let d = Math.sqrt((mouse.x - this.x)**2 + (mouse.y - this.y)**2 )
       
        if ( d < 100)  {
            let a = this.r
            if(this.r < maxRadius) {
                this.r += 1
            }

        } else {
            if (this.r > minRadius) {
                this.r -=1
            } 
        }
    
        this.x += this.dx
        this.y += this.dy
        this.draw()
    }
}

let circleArray = []
for (let i=0; i < 600; i++) {
    let r = 30 * Math.random()
    let x = (innerWidth - 2*r) * Math.random() + r
    let y = (innerHeight - 2*r) * Math.random() + r
    let dx = 4 * Math.random()  
    let dy = 4 * Math.random() 
    circleArray = [...circleArray, new Circle(x,y,r,dx,dy)] 
}

const animate = () => {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight)

    circleArray.map( item => item.update())
}
animate()
