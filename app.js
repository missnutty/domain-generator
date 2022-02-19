const pronoun = ['the','our'];
const adjetives = ['great', 'big' ];
const noun = ['jogger','racoon'];
const extensions = [".es", ".com", ".net", ".dev"]


pronoun.forEach(pron => {
    adjetives.forEach(adj => {
        noun.forEach(nn => {
            extensions.forEach(ext => {
                console.log(pron + adj + nn + ext);
            });
        });
    });
});