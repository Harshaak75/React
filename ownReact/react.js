

addElement = (data, root)=>{

    const anchor = document.createElement(data.type);
    
    anchor.innerHTML = data.value;

    // anchor.setAttribute('href',data.props.href);
    // anchor.setAttribute('target',data.props.target);

    for (const prop in data.props) {
        anchor.setAttribute(prop,data.props[prop]);
    }


    root.appendChild(anchor);
}




const root = document.querySelector(".root");


const data = {
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank'
    },
    value:'Click to open google page.'
}


addElement(data, root);
