const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const getHtml = async () => { 
    try { 
        return await axios.get("https://page.kakao.com/main?categoryUid=10&subCategoryUid=1000");
    }catch (error) {
        console.error(error);
    }
};

getHtml() .then(html => { 
    let ulList = []; 
    const $ = cheerio.load(html.data); 
    const $bodyList = $("div.css-19y0ur2 a.css-qop82a").children("li.css-qm6qod"); 
    
    $bodyList.each(function(i, elem) { 
        ulList[i] = { 
            //title: $(this).find('div.css-16ybwwy span').text(), 
            thumb_img: $(this).find('div.css-1q74we6 div.css-15ow146 div.css-1godi3z img').attr('src'),
            //url: $(this).find('a.css-qop82a').attr('href')
        }; 
    });
    
    const data = ulList.filter(n => n.title);
    let jsondata = JSON.stringify(data);
    fs.writeFileSync('webtoon_mon.json', jsondata)
    return console.log(jsondata);
}) 
.then(res => console.log(res));