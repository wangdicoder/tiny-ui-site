export const data = [
    {
        name: 'checked',
        type: 'boolean',
        default: 'false',
        desc: "switch state"
    },
    {
        name: 'defaultChecked',
        type: 'boolean',
        default: 'false',
        desc: 'initial value'
    },
    {
        name: 'color',
        type: 'string',
        default: '#2196F3',
        desc: "switch's color"
    },
    {
        name: 'onChange',
        type: 'function',
        default: '-',
        desc: 'triggers when value changes'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        desc: 'if true, the switch cannot be clicked'
    },
    {
        name: 'className',
        type: 'string',
        default: '-',
        desc: 'the CSS class name of the root element'
    },
];