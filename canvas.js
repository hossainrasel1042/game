


canvas=document.getElementById('game')
canvas.width=window.innerWidth
canvas.height=window.innerHeight
context=canvas.getContext('2d')

screen.orientation.lock("landscape");
class ball{
constructor(x,y,img,w,h){
    this.x =x
    this.y =y
    this.img=new Image()
    this.img.src=img
    this.w=w
    this.h=h
    this.vx=2
}
move(){
    this.x=this.x+this.vx
    context.drawImage(this.img, this.x, this.y,this.w, this.h);
}
    draw(){
    this.img.onload=()=>{
        context.drawImage(this.img, this.x, this.y,this.w, this.h);
    }
}
}
let im=new Image()
im.src='./image/house.png'
let i=new Image()
i.src='./image/background.webp'

let ba=new ball(40,40,'./image/cannon.png',20,20)
ba.draw()
function update(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    ba.move()
    requestAnimationFrame(update)
}

 update()   
    

