const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const getHtml = async () => { 
    try { 
        return await axios.get("https://comic.naver.com/webtoon/weekday");
    }catch (error) {
        console.error(error);
    }
};

getHtml() .then(html => { 
    let ulList = []; 
    const $ = cheerio.load(html.data); 
    const $bodyList = $("div.list_area ul").children("li"); 
    
    $bodyList.each(function(i, elem) { 
        ulList[i] = { 
            id: $(this).find('a').attr('onclick'), 
            title: $(this).find('a.title').text(), 
            img: $(this).find('div.thumb a img').attr('src'),
            url: $(this).find('div.thumb a').attr('href')
        }; 
    }); 
    
    const data = ulList.filter(n => n.title);
    let jsondata = JSON.stringify(data);
    fs.writeFileSync('webtoon_data.json', jsondata)
    return console.log(jsondata);
}) 
.then(res => console.log(res));