const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/caiobaraujo/');
  const imgList=  await page.evaluate(() => {
    const nodeList = document.querySelectorAll('article img');
    const imgArray = [...nodeList];
    const imgList = imgArray.map(img => img.src);

    return imgList;

    
  })
    fs.writeFile('instagram.json', JSON.stringify(imgList, null, 2), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });


 await browser.close();
})();