export const theme = ['Book', 'Movie', 'Game', 'Music', 'Car', 'Alcohol'];

export const options = ['number', 'text', 'markdown', 'date', 'boolean'];

export const fieldsMap = {
    number: `<Form.Control type="number" placeholder="Enter number" />`,
    text: `<Form.Control type="text" placeholder="Enter text" />`,
    markdown: `<Form.Control type="text" placeholder="Enter textarea" />`,
    date: `<Form.Control type="date" placeholder="Enter date" />`,
    boolean: `<Form.Check type="checkbox" label='checkbox' id='checkbox' />`,
};