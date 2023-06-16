import re

with open("./script/htmltojson.html") as htmltoconvert:
    html = htmltoconvert.read()
    json = html.replace('\r','').replace('\n','')
    json = re.sub('"', '\\"', json)

with open("./script/htmltojson.json", "w") as jsonconversion:
    jsonconversion.write(json)

print(jsonconversion)