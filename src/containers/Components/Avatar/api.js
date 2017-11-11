export const data = [
    {
        name: 'backgroundColor',
        type: 'string',
        default: '#2992fc',
        desc: "default background color"
    },
    {
        name: 'size',
        type: 'string',
        default: '60px',
        desc: "avatar's size, it will change the width and height of this component"
    },
    {
        name: 'borderRadius',
        type: 'string',
        default: '50%',
        desc: 'determine the border radius parameter'
    },
    {
        name: 'src',
        type: 'string',
        default: 'null',
        desc: 'if set, the children content will be replaced an image'
    },
    {
        name: 'raised',
        type: 'boolean',
        default: 'false',
        desc: 'if true, the avatar will display the shadow'
    },
    {
        name: 'onClick',
        type: 'function',
        default: 'null',
        desc: 'triggers when users click it'
    },
    {
        name: 'className',
        type: 'string',
        default: '-',
        desc: 'The CSS class name of the root element.'
    },
];