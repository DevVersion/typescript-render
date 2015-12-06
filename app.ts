window.onload = () => {
    var el = document.getElementById('root');
    
    var clock = new Clock();
    Render.render(new Clock(), el);

};