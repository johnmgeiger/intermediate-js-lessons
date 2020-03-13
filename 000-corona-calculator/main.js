// use an IIFE to run our code right away
// as well as protect access
const CoronaCalculator = (() => {
    // VARIABLES
    
    // country data
    let countryData = []
    
    // charts
    const chart = document.getElementById("chart")
    let myLineChart

    // dom elements
    const calculationForm = document.getElementById("calculationForm")
    const countrySelect = document.getElementById("countries")
    const growthInput = document.getElementById("growthInput")
    const startingInput = document.getElementById("startingInput")
    const durationInput = document.getElementById("durationInput")

    // FUNCTIONS
    function calculateGrowth (start, growth, t) {
        // Sources:
        // https://www.rapidtables.com/calc/math/exponential-growth-calculator.html
        // https://populationeducation.org/what-doubling-time-and-how-it-calculated/
        const growthRate = .7 / growth
        return start * Math.pow(1 + growthRate, t)
    }

    function getData () {
        // see data.js for this data
        // and how it was retrieved
        try {
            const workableData = JSON.parse(data)
            return workableData
        } catch (err) { console.error(err) }
    }

    function initFormSubmit () {
        calculationForm.addEventListener('submit', onFormSubmit)
    }

    function initSelectEvents () {
        countrySelect.addEventListener("change", ev => {
            // get both values from the value field
            const value = ev.target.value
            let [growth, current] = value.split(',')
            
            // convert them into numbers
            growth = parseInt(growth)
            current = parseInt(current)

            // set the input values to match
            growthInput.value = growth
            startingInput.value = current
        })
    }

    function onFormSubmit (ev) {
        // don't trigger reload if coming 
        // from the form submit event
        if (ev)
            ev.preventDefault()

        // get values
        const growth = growthInput.value
        const start = startingInput.value
        const duration = durationInput.value

        // the interval should be 1 per day, until 20 days
        // after that, just have 20 intervals for the x axis
        const calculationIntervalCount = Math.min(duration, 20)
        const intervalSize = duration / calculationIntervalCount

        const lineChartData = []    // y-axis
        const labels = []           // x-axis
        
        // calculate the new value for each given number of 
        // days out, starting at the "tomorrow" value of 1
        for (let i = 1; i <= calculationIntervalCount; i++) {
            const daysOut = i * intervalSize
            const dataPoint = Math.round(calculateGrowth(start, growth, daysOut))

            // append values to the arrays that are tracking
            // the x and y-axis
            lineChartData.push(dataPoint)
            labels.push(`${daysOut} ${
                daysOut === 1 ? 'day' : 'days'
            }`)
        }

        updateChart(lineChartData, labels)
    }

    function renderSelect () {    
        // generate list of options and add them
        // as the options for the country select element
        
        //  1) map the available country data
        //      -returns an array of strings
        //      -the value includes both growth rate
        //          and current number of cases
        //  2) run .join('') to convert the array of
        //     strings into one large string of options
        //  3) set the innerHTML of the country select

        countrySelect.innerHTML = `
            <option disabled selected value>Select a Location</option>
            ${
                countryData.map(item => {
                    return `<option value="${
                        item[1]
                    },${
                        item[2]
                    }">${item[0]}</option>`
                }).join('')
            }
        `
    }

    function updateChart (lineChartData, labels) {
        // https://www.chartjs.org/docs/latest/charts/line.html
        myLineChart = new Chart(chart, {
            type: 'line',
            data: {
                labels,
                datasets: [{
                    label: "Number of Cases",
                    data: lineChartData,
                    borderColor: "#3e95cd",
                    fill: false
                }],
                fill: true
            },
            options: {
                aspectRatio: 1,
                title: {
                    display: true,
                    text: 'Virus Growth Rate'
                },
                scales: {
                    x: {
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Days'
                        }
                    },
                    y: {
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Cases'
                        }
                    }
                }
            }
        });
    }


    // INITIATE EVERYTHING

    // prep data
    countryData = getData()
    
    // prep dom
    renderSelect()
    initFormSubmit()
    initSelectEvents()

    // build first chart based on default data
    onFormSubmit()

    // returned for the sake of playing around
    // in the console with the CoronaCalculator object
    //      -this isn't necessary
    return {
        calculateGrowth,
        getData,
    }
})()