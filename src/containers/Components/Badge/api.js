export const data = [
    {
        name: 'value',
        type: 'string | number',
        default: '1',
        desc: "badge's content"
    },
    {
        name: 'color',
        type: 'object',
        default: '#f2453d (red)',
        desc: 'background color'
    },
    {
        name: 'max',
        type: 'number',
        default: '10',
        desc: 'if the value overtakes the max, the content will display ${max}+, only works if value is a number'
    },
    {
        name: 'isDot',
        type: 'boolean',
        default: 'false',
        desc: 'display a dot instead of a value'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        desc: 'if true, the badge will hidden'
    },
    {
        name: 'className',
        type: 'string',
        default: '-',
        desc: 'the CSS class name of the root element'
    },
];