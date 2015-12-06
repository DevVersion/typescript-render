class RenderElement {

    private target: Node;

    public hasTarget(): boolean {
        return !!this.target;
    }

    public getTarget(): Node {
        return this.target;
    }

    public setTarget(target: Node): void {
        this.target = target;
    }

    public rerender(): void {
        if (this.hasTarget() == false) throw new Error("RenderElement: Error while calling rerender(). No target present");

        var target = this.getTarget();
        var parent = target.parentNode;
        parent.removeChild(target);
        this.setTarget(parent.appendChild(this.render()));
    }

    // ########### ABSTRACT ###########
    public render(): Node {
        throw new Error("RenderElement: Missing render() function");
    }

    public onCreated(): void {
        // OPTIONALLY TO OVERWRITE
        return;
    }

}