class Test extends RenderElement {

    public render(): Node {
        return Render.createElement("<span>Hello from RenderElement</span>"); 
    }

}


window.onload = () => {
    var el = document.getElementById('root');

    var clock = new Clock();

    Render.render(clock, el);

    Render.render(Render.createElement("<hr>"), el);

    Render.render(new Test(), el);



};