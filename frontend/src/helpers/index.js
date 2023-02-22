export const splitValue = (value) => {
    return value.split(' ').join('_');
}

export const joinValue = (value) => {
    return value.split('_').join(' ');
}