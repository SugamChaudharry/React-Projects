function costomRender(reactElement, Container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.childern;
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop , reactElement.props[prop])
    }
    Container.appendChild(domElement)
}

const reactElement = {
    type: "a",
    props:{
        href:"htpps://google.com",
        target: "_blank",
    },
    childern:"Click me"
}

const mainContainer = document.querySelector("#root")

costomRender(reactElement , mainContainer);