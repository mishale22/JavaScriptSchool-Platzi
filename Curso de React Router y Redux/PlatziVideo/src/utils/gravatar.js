import md5 from 'md5' //algoritmo para crear un hash
//hash lo vincula a una imagen que es el avatar

const gravatar = email => {
    const base = 'https://gravatar.com/avatar/';
    const formatEmail = email.trim().toLowerCase();
    const hash = md5(formatEmail, { encoding: "binary"});
    return `${base}${hash}`
}

export default gravatar;