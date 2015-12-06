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

    public static render(item: any, target: Node) {
        if ((item instanceof Node || item instanceof RenderElement) == false) throw new Error("Item needs to be a RenderElement or a Node");
        if (item instanceof Node) {
            target.appendChild(item);
            return;
        }
        if (item.hasTarget()) throw new Error("RenderElement already has a target.");

        var node = item.render();
        item.setTarget(target.appendChild(node));
        item.onCreated();
        
    }
}