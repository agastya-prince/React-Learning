
function customRender(reactElement, container)
{
    /*
    const domElement = document.createElement(reactElement.type) // 'a'
    domElement.innerHTML = reactElement.children // 'Click me to visit google'
    domElement.setAttribute('href', reactElement.props.href) // 'https://google.com'
    domElement.setAttribute('target', reactElement.props.target) // '_blank'

    container.appendChild(domElement)
    */
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children

   for (const prop in reactElement.props) {
    if (prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop])
   }
   container.appendChild(domElement)
}

const reactElement = {
    type : 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer  = document.querySelector('#root')

customRender(reactElement, mainContainer)