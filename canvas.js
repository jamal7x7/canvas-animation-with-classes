const canvas = document.getElementById('myCanvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext('2d')

const g ="#00FF00" 
const b ="#00fff0" 

const colorArray = ['#C86DD7', '#877AFF',"#61DAFB", '#123', '#234', '#224', '#223']
 


const mouse = {
    x: undefined,
    y: undefined
}

const maxRadius = 50


addEventListener('mousemove', e => {
    mouse.x = e.clientX
    mouse.y = e.clientY
    console.log(mouse)
})
addEventListener('resize', e => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight 
    init()
})

class Circle {
    constructor(x, y, r, dx, dy, color) {
        this.x = x
        this.y = y
        this.r = r
        this.dx = dx
        this.dy = dy
        this.color = color
        this.minRadius = r
        this.mindx = dx
        this.mindy = dy
    }
    

    info() {
        return `((Class::Circle) coordinate: ( ${this.x}, ${this.y})
                radius: ${this.r} 
                velocity: ( ${this.dx}, ${this.dy})`
    }

    draw() {
        c.fillStyle = this.color
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
            
            if(this.r < maxRadius) {
                this.r += 1
            }

        } else if (this.r > this.minRadius) {
                this.r -= 1
        }
    
        this.x += this.dx
        this.y += this.dy
        this.draw()
    }
}

let circleArray = []
const init = () => {
    circleArray = [] 
    for (let i=0; i < 700; i++) {
        let r = 5 * Math.random() + 1
        let minRadius = r
        let x = (innerWidth - 2*r) * Math.random() + r
        let y = (innerHeight - 2*r) * Math.random() + r
        let dx = 3 * Math.random()  
        let dy = 3 * Math.random() 
        let color = colorArray[Math.round(Math.random() * colorArray.length )]
        circleArray = [...circleArray, new Circle(x,y,r,dx,dy, color)] 
    }
}

const animate = () => {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight)

    circleArray.map( item => item.update())
}

init()
animate()
