class Stone{
    constructor(x,y,w,h){
        var opt={
            restitution:0.9,
        }
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(x,y,w,h,opt);
        World.add(world,this.body);
    }
    show(){
        var pos=this.body.position;

       push ();
       translate(pos.x,pos.y);
       strokeWeight(1);
       fill("white");
       ellipseMode(CENTER);
       ellipse(0,0,this.w,this.h);
       noStroke();
       pop ();
    }
}