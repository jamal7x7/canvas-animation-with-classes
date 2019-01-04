const canvas = document.getElementById('myCanvas')

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

      const c = canvas.getContext('2d')

      
      const g ="#00FF0077" 
      const b ="#00fff0" 

    //   c.beginPath()
    //   c.strokeStyle = g 
    //   c.moveTo(100, 100)
    //   c.lineTo(450, 150)
    //   c.lineTo(450, 350)
    //   c.stroke()


    // c.fillStyle = b
    // c.fillRect(220, 200, 100, 100)
    
    // for (let i = 0; i < 10; i++) {
    //     let x = Math.random()*window.innerWidth
    //     let y = Math.random()*window.innerHeight
    //     c.fillStyle = g
    //     c.beginPath()
    //     c.arc(x, y, 30, 0, 2*Math.PI, false)
    //     c.fill()
    // }


//     const cp1x = 100
//     const cp1y = 120
//     const cp2x = 450
//     const cp2y = 200
//     const p1x = 200
//     const p1y = 200
//     const p2x = 400
//     const p2y = 400
   
//     c.fillStyle = g
//     c.strokeStyle = g
//     c.beginPath()
//     c.moveTo(p1x, p1y)
//     c.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2x, p2y)
//     c.stroke()

// const f = () => {
//         let x = Math.random()*window.innerWidth
//         let y = Math.random()*window.innerHeight
//         c.fillStyle = g
//         c.beginPath()
//         c.arc(x, y, 30, 0, 2*Math.PI, false)
//         c.fill() 
// }
// const interval = setInterval(() => {
//     f()
// }, 1000)

// setInterval(() => {
//     clearInterval(interval)
// }, 10000)



const f = () => {
    
    c.fillStyle = g
    c.beginPath()
    c.arc(x, y, r, 0, 2*Math.PI, false)
    c.fill() 
    if ((x-r)<0 || x+r>innerWidth) {
        dx = -dx 
    } 
    if ((y-r)<0 || (y+r)>innerHeight) {
        dy = -dy
    } 

    x += dx
    y += dy
}





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
        // c.clearRect(0, 0, innerWidth, innerHeight)
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
    
        this.x += this.dx
        this.y += this.dy
        this.draw()
    }

    


}



let circleArray = []
for (let i=0; i < 100; i++) {
    let r = 30 * Math.random()
    let x = (innerWidth - 2*r) * Math.random() + r
    let y = (innerHeight - 2*r) * Math.random() + r
    let dx = 10 * Math.random()  
    let dy = 10 * Math.random() 
    circleArray.push(new Circle(x,y,r,dx,dy)) 
    circleArray[i].info()
}
console.log(circleArray)

const animate = () => {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight)
   for (let i = 0; i < circleArray.length; i++) {
       circleArray[i].update()
       
   }
}
animate()