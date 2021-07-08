function createElement(type, className, id) {
    var obj = document.createElement(type);
    if(id != '') {
        obj.id = id;
    }
    if(className != '') {
        obj.className = className;
    }
    return obj;
}


function createMatchcCard(match) {
    var divMatch = createElement("a","col-md-6 col-lg-3 mb-5 match","");
    divMatch.href = "#current";
    var divThumbnailMatch = createElement("div","thumbnail","");
    var divCaption = createElement("div","caption","");
    var divCaptionHeader = createElement("h3","text-center","");
    divCaptionHeader.innerHTML = match["side1"]["name"] + " vs " + match["side2"]["name"];
    var inputMatch = createElement("input","hidden inputMatch","");
    inputMatch.value = JSON.stringify(match);
    var imgThumbnail = createElement("img","img-fluid linkMatch","");
    imgThumbnail.alt =  match["side1"]["name"] + "vs" + match["side2"]["name"];
    imgThumbnail.src = match["thumbnail"];
    divCaption.appendChild(divCaptionHeader);
    divThumbnailMatch.appendChild(divCaption);
    divThumbnailMatch.appendChild(imgThumbnail);
    divThumbnailMatch.appendChild(inputMatch);
    divMatch.appendChild(divThumbnailMatch);
    return divMatch;

}