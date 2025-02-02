function customRender(reactElement, mainContainer) {
    // const domelement= document.createElement(reactElement.type)
    // domelement.innerHTML = reactElement.children
    //we dont know how many attributes are there in props thats why we need generalize code for that
    // domelement.setAttribute('href',reactElement.props.href)
    // domelement.setAttribute('target',reactElement.props.target)

    // mainContainer.appendChild(domelement)
    const domelement = document.createElement(reactElement.type)
    domelement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        domelement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domelement)
}

//json file for data of element
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'visit Google.com'
}
const mainContainer = document.getElementById('root')
customRender(reactElement, mainContainer)