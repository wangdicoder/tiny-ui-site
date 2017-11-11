export const data = [
    {
        name: 'type',
        type: 'string',
        default: 'default',
        desc: "button's style, available parameters: 'primary', 'rose', 'success', 'info', 'warning', 'danger' "
    },
    {
        name: 'onClick',
        type: 'function',
        default: '-',
        desc: 'set the handler to handle click event'
    },
    {
        name: 'size',
        type: 'string',
        default: 'default',
        desc: "button's size, available parameters: 'lg', 'sm', 'xs'"
    },
    {
        name: 'uppercase',
        type: 'boolean',
        default: 'true',
        desc: 'determine the label\'s transform'
    },
    {
        name: 'isRound',
        type: 'boolean',
        default: 'false',
        desc: 'button\'s shape'
    },
    {
        name: 'isOutline',
        type: 'boolean',
        default: 'false',
        desc: 'if true, the button\'s background will disappear'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        desc: 'if true, the button cannot be clicked'
    },
    {
        name: 'className',
        type: 'string',
        default: '-',
        desc: 'The CSS class name of the root element'
    }
];