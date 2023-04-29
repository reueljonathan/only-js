const STRING = 'string';
const NUMBER = 'number';
const FUNCTION = 'function';
const OBJECT = 'object';

export function attach(selector, content) {
    const container = document.querySelector(selector);

    if (!container) throw Error(`element ${rootElementSelector} not found`);

    container.appendChild(content);
}

function generateElement(tagName, childs) {
    const element = document.createElement(tagName);
    let type;

    for (const child of childs) {
        type = typeof(child);
        switch (type) {
            case STRING:
            case NUMBER: {
                const span = document.createElement('span');
                span.innerText = child;
                element.appendChild(span);
            } break;
            case OBJECT: {
                if (child) element.appendChild(child);
            } break;
        }
    }

    return element;
}

export function div(...args) {
    return generateElement('div', args);
}

export function h1(...args) {
    return generateElement('h1', args);
}

export function h2(...args) {
    return generateElement('h2', args);
}

export function ul(...args) {
    return generateElement('ul', args);
}

export function li(...args) {
    return generateElement('li', args);
}

export function table(...args) {
    return generateElement('table', args);
}

export function thead(...args) {
    return generateElement('thead', args);
}

export function th(...args) {
    return generateElement('th', args);
}

export function tbody(...args) {
    return generateElement('tbody', args);
}

export function tr(...args) {
    return generateElement('tr', args);
}

export function td(...args) {
    return generateElement('td', args);
}
