// run the code below at 

// const temp1 = document.querySelector("#covid-table-embed > div > table > tbody")
// let d = []
// for (let i = 0; i < temp1.children.length; i++) {
//     const currentChild = temp1.children[i]
//     const location = currentChild.children[0].innerText
//     const days = currentChild.children[1].children[0].children[0].innerText
//     const at = currentChild.children[1].children[1].children[1].textContent.split(",").join("")
//     const ret = [location, parseInt(days.split(" ")[0]), parseInt(at)]
//     d.push(ret)
// }
// JSON.stringify(d)

// copy the logged value to get the data found below
// replace the outside "" with ``


const data = `[["Worldwide",25,125048],["China",31,80981],["Italy",4,12462],["Iran",6,9000],["South Korea",11,7869],["France",3,2269],["Spain",2,2140],["Germany",5,1567],["United States",2,987],["International",26,696],["Switzerland",4,645],["Japan",8,620],["Denmark",1,615],["Netherlands",4,503],["Sweden",3,461],["United Kingdom",4,460],["Belgium",5,314],["Austria",2,302],["Norway",5,277],["Qatar",1,262],["Bahrain",3,189],["Singapore",17,178],["Malaysia",6,129],["Australia",6,122],["Greece",5,98],["Czech Republic",2,94],["Canada",6,93],["Kuwait",15,80],["Israel",4,75],["United Arab Emirates",6,74],["India",4,73],["Thailand",17,70],["Iraq",8,70],["Egypt",5,67],["Lebanon",3,66],["San Marino",4,63],["Iceland",6,61],["Slovenia",2,57],["Philippines",3,52],["Brazil",2,52],["Romania",2,48],["Poland",1,44],["Ireland",3,43],["Portugal",5,41],["Finland",4,40],["Vietnam",5,39],["Indonesia",3,34],["Palestine",6,30],["Algeria",6,25],["Georgia",5,23],["Chile",3,23],["Saudi Arabia",5,21],["Russia",1,20]]`
    