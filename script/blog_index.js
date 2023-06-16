"use strict";

const qs = (val) => {
    return document.querySelector(val)
}

const edit = (json) => {
    for (let i = Object.keys(json).length - 1; i >= 0; i--) {
        console.log("loop " + i);
        let tabela = qs(".blog-index").insertRow(-1);
        let coluna1 = tabela.insertCell(0);
        let coluna2 = tabela.insertCell(1);
        coluna1.innerHTML += '<tr><td><a href="/blog.html?id=' + i + '">' + json[i].date;
        coluna2.innerHTML += '</a></td><td><a href="/blog.html?id=' + i + '">' + json[i].title + '</td></tr>';
    }
}

const loader = async () => {
    const response = await fetch('/blog/blog.json');
    const json = await response.json();

    edit(json)
}

loader()