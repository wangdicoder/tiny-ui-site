export const data = [
    {
        name: 'message',
        type: 'string | node',
        default: '-',
        desc: 'display a string or render a node for the message content'
    },
    {
        name: 'options',
        type: 'object',
        default: '{duration: 3000, animationTime: 500, position: \'top\', offset: \'20px\',}',
        desc: 'parameters for displaying the message'
    },
];