function costomRender(reactElement, Container){
    // not write way
    /*const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.childern;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    Container.appendChild(domElement);*/

    // using loop
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