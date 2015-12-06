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
        var insertElement;
        var newTarget;

        if (parent.childNodes.length > 1) {
            var insertIndex = [].indexOf.call(parent.childNodes, target);
            if (insertIndex + 1 < parent.childNodes.length) insertElement = parent.childNodes[insertIndex + 1];
        }

        parent.removeChild(target);
        var newNode = this.render();

        if (insertElement) {
            newTarget = parent.insertBefore(newNode, insertElement);
        } else {
            newTarget = parent.appendChild(newNode);
        }

        this.setTarget(newTarget);
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