class Clock extends RenderElement {

    public onCreated(): void {
        setInterval(() => this.rerender(), 1000);
    }

    public render(): Node {
        return Render.createElement("<span>The current time is: " + new Date().toUTCString() + "</span>");
    }
}