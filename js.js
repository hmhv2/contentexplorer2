
function loaded(){
    window.setTimeout(function(){
    if(document.getElementById("loader-wrapper").getAttribute("class")=="extra-wrap"){
    loaded();
    }else{
    sections = document.getElementsByTagName("uib-accordion")[2].querySelector("div > div").getElementsByClassName("block-entry ng-scope");	
    section=location.hash.split("#")[location.hash.split("#").length-1].split("section")[1];
    sections[section].style.transform='translateX(-50px)';
    sections[section].getElementsByClassName("accordion-toggle")[0].click();
    sections[section].getElementsByClassName("block-head toggleopen clearfix ng-scope")[0].click();
    window.setTimeout(function(){sections[section].scrollIntoView();},1000);
    }
    },5000);
    }


    if(an==1 && window.location.host == "eu-app.contentstack.com"){
    if(location.hash.split("#")[location.hash.split("#").length-1].substr(0,7)=='section')
    loaded();
    }


    
function initlinks(){
    if(document.getElementById("backendurl")!=undefined){
        document.getElementById("backendurl").innerHTML = '<div style="position:absolute; top:0; right:0;z-index:9999999"><a href="https://eu-app.contentstack.com/#!/stack/bltdd0cac60d62330bd/content-type/page/de-de/entry/'+document.getElementsByTagName("body")[0].getAttribute("data-pageref")+'/edit" target="_blank">backend</a></div>';
    }
    else{
    let div = document.createElement("div");
    div.setAttribute("id","backendurl");
div.innerHTML = '<div style="position:absolute; top:0; right:0;z-index:9999999"><a href="https://eu-app.contentstack.com/#!/stack/bltdd0cac60d62330bd/content-type/page/de-de/entry/'+document.getElementsByTagName("body")[0].getAttribute("data-pageref")+'/edit" target="_blank">backend</a></div>';
document.getElementsByTagName("body")[0].appendChild(div);
        }

sections = document.getElementsByTagName("section");
for(let i = 0; i < sections.length; i++){
    let div2 = document.createElement("div");
    div2.innerHTML = '<a href="https://eu-app.contentstack.com/#!/stack/bltdd0cac60d62330bd/content-type/page/de-de/entry/'+document.getElementsByTagName("body")[0].getAttribute("data-pageref")+'/edit#section'+i+'" target="_blank">SECTION ÖFFNEN</a>';
    sections[i].appendChild(div2);
}
[].forEach.call(document.getElementsByClassName("style-module--content--38APP") , function(elem){
    let div3 = document.createElement("div");
    div3.innerHTML = ' <a href="https://eu-app.contentstack.com/#!/stack/bltdd0cac60d62330bd/content-type/component_card/de-de/entries?search='+elem.getElementsByTagName("span")[0].innerText+'" target="_blank">öffnen</a>';
    elem.getElementsByTagName("span")[0].appendChild(div3);
});
}


if(an == 1 && window.location.host == "preview.janssenmedicalcloud.de"){
let div = document.createElement("div");
div.innerHTML = '<div style="position:absolute; top:0; right:150px;z-index:9999999;cursor:pointer"><a onclick="initlinks()">Links laden</a></div>';
document.getElementsByTagName("body")[0].appendChild(div);
}