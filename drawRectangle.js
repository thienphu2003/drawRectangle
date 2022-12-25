function Rectangle(length,width){
    this.length=length;
    this.width=width;
    this.perimeter=function ()
    {
        return (this.width+this.length)*2;
    }
    this.area=function ()
    {
        return this.width*this.length;
    }
    this.change_length=function (length)
    {
        this.length=length;
    }
    this.change_width=function (width)
    {
        this.width=width;
    }
    this.display=function()
    {
        let canvas=document.getElementById("myCanvas");
        let ctx=canvas.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(50,100,this.width,this.length);
    }
}
let rectangle=new Rectangle(8,16);
alert(rectangle.perimeter());
alert(rectangle.area());
rectangle.change_width(300);
rectangle.change_length(200);
alert(rectangle.perimeter());
alert(rectangle.area());
rectangle.display();
