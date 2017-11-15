export const data = [
    {
        name: 'type',
        type: 'string',
        default: 'primary',
        desc: "alert's style, available parameters: 'primary', 'rose', 'success', 'info', 'warning', 'danger' "
    },
    {
        name: 'closable',
        type: 'boolean',
        default: 'true',
        desc: 'if false, the close button will not be rendered'
    },
    {
        name: 'className',
        type: 'string',
        default: '-',
        desc: 'the CSS class name of the root element'
    },
];