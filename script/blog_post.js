"use strict";

const qs = (val) => {
    return document.querySelector(val)
}

const edit = (json) => {
    qs("#tabname").innerHTML = json.title + " | jutipia";
    qs("#title").innerHTML = json.title;
    qs("#post").innerHTML = json.post;
    qs("#data").innerHTML = json.data;
    qs("#horario").innerHTML = json.horario;
    qs("#musica").innerHTML = json.musica;
}

async function loader(id) {
    const response = await fetch('/blog/blog.json');
    const json = await response.json();

    if (id > Object.keys(json).length - 1 || id < 0) {
        window.location.href = '/blog/index.html';
    }

    let correct_json = json.filter((filter) => filter.id == id)[0];

    edit(correct_json);
}

const paramURL = window.location.search;
const ParsedParam = new URLSearchParams(paramURL);

if (!ParsedParam.get("id")) {
    ParsedParam.set("id", 1)
    window.history.replaceState(null, null, "?id=" + ParsedParam.get('id'))
}

let id = Number.parseInt(ParsedParam.get("id"))

loader(id)

qs("#post-anterior").addEventListener("click", (e) => {
    updater(-1);
})

qs("#post-proximo").addEventListener("click", (e) => {
    updater(1);
})

const updater = async (int) => {
    id += int;
    loader(id)
    ParsedParam.set("id", id)
    window.history.replaceState(null, null, "?id="+ParsedParam.get('id'))
}