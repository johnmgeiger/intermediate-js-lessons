// run the code below at 

function logData () {
    const temp1 = document.querySelector("#covid-table-embed > div > table > tbody")
    let d = []
    for (let i = 0; i < temp1.childElementCount; i++) {
        const currentRow = temp1.children[i]

        const location = currentRow.children[0].innerText
        const days = currentRow.children[1].children[2].innerText.split(" ")[0]
        const at = currentRow.children[2].children[0].children[1].children[0].children[0].innerText.split(",").join("")

        const ret = [location, parseInt(days), parseInt(at)]
        d.push(ret)
    }
    console.log(JSON.stringify(d))
}

// copy the logged value to get the data found below
const data = `[["Worldwide",25,125048],["China",31,80981],["Italy",4,12462],["Iran",6,9000],["South Korea",11,7869],["France",3,2269],["Spain",2,2140],["Germany",5,1567],["United States",2,987],["Switzerland",4,645],["Japan",8,620],["Denmark",1,615],["Netherlands",4,503],["Sweden",3,461],["United Kingdom",4,460],["Belgium",5,314],["Austria",2,302],["Norway",5,277],["Qatar",1,262],["Bahrain",3,189],["Singapore",17,178],["Malaysia",6,129],["Australia",6,122],["Greece",5,98],["Czech Republic",2,94],["Canada",6,93],["Kuwait",15,80],["Israel",4,75],["United Arab Emirates",6,74],["India",4,73],["Iraq",8,70],["Thailand",17,70],["Egypt",5,67],["Lebanon",3,66],["San Marino",4,63],["Iceland",6,61],["Slovenia",2,57],["Brazil",2,52],["Philippines",3,52],["Romania",2,48],["Poland",1,44],["Ireland",3,43],["Portugal",5,41],["Finland",4,40],["Vietnam",5,39],["Indonesia",3,34],["Palestine",6,30],["Algeria",6,25],["Chile",3,23],["Georgia",5,23],["Saudi Arabia",5,21],["Russia",1,20],["Argentina",4,19],["Pakistan",3,19],["Serbia",2,19],["Oman",9,18],["Ecuador",7,17],["Luxembourg",1,17],["Peru",3,17],["Croatia",9,16],["Latvia",1,16],["Costa Rica",4,13],["Estonia",6,13],["Hungary",5,13],["South Africa",3,13],["Belarus",2,12],["Brunei",1,12],["Mexico",5,11],["Albania",2,10],["Panama",2,10],["Slovakia",3,10]]`