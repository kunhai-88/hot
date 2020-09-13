const fs = require('fs');
const path = require('path');

const words = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/words.json'), 'utf8'));
const html = fs.readFileSync(path.join(__dirname, '../template.html'), 'utf8');
let markdown = ''
for(let i=0;i< words.length; i++){
  markdown = markdown + `<a class="word ${i===0 ? 'active':''}"  onClick="query('${words[i].word}', this)" ><span>${i+1}. ${words[i].word}</span> <span class="frequency">${(words[i].frequency*100).toFixed(4)}%</span> </a>\n`;
}
 
// fs.writeFileSync(
//   path.resolve(__dirname, '../', 'README.Md'),
//   markdown,
// );


fs.writeFileSync(
  path.resolve(__dirname, '../docs', 'index.html'),
  html.replace('{{words}}', markdown),
);