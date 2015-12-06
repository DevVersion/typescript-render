class Render {

    public static createElement(html: string): Node {

        let tmpRoot = document.createElement('div');
        tmpRoot.innerHTML = html;

        let element = tmpRoot.firstChild;

        tmpRoot.removeChild(element);
        return element;
    }

    /*public static render(item: Renderable, target: Node, append: boolean = true) {
        if (append == false) {
            while (target.firstChild) {
                target.removeChild(target.firstChild);
            }
        }

        target.appendChild(item.render());

    }*/

    public static render(item: RenderElement, target: Node) {
        if (item.hasTarget()) throw new Error("RenderElement already has a target.");

        var node = item.render();
        item.setTarget(target.appendChild(node));
        item.onCreated();
    }
}