// 1. Сначала нужно проскроллить все аудиозаписи вниз вк, чтобы собрать в кэш все треки
// 2. В консольку вставить код ниже

let c = document.querySelectorAll(".audio_row .audio_row_content .audio_row__inner .audio_row__performer_title")

let formatted = []

for(var i=0; i < c.length; i++ ){
    var item = c[i]
    formatted.push({title: item.childNodes[1].innerText, singer: item.childNodes[3].innerText});
}


// 3. console.log(formatted)
// 4. радоваться