
const fretboard = (guitar, options = {}) => {
   
    function noteRows () {
        let rows = ''

        // count down in order to correctly format
        for (let i = guitar.length - 1; i >= 0; i--) {
            rows += `
            <div class="string-row">
                ${notes(i)}
            </div>
            `
        }

        return rows
    }

    function notes (string) {
        
        let notes = ''

        for (let i = 0; i < guitar[string].numFrets; i++) {

            let color = ''
            if (options.noteMatches) {
                options.noteMatches.forEach(matchTest => {
                    if (matchTest.match(string, i, guitar[string][i].note)) {
                        color = matchTest.color
                    }
                })
            }

            notes += `
            <div class="note">
                <div class="string"></div>
                <div    class="button js-note"
                        ${
                            color ? 
                            `style="color:#fff; background-color:${color}"` : 
                            ''
                        }
                        data-string="${6 - string}" 
                        data-note="${guitar[string][i].note}"
                        data-fret="${i}">
                    ${options.showNotes ? guitar[string][i].note : '' }
                </div>
            </div>
            `
        }

        return notes
    } 
    
    return `
    <div id="fretboard" class="fretboard">
        ${noteRows()}
    </div>
    `
}

function question (q) {
    return `
    <h4>Find ${q.note || "N/A"}</h4>
    <h4>On string ${q.string || "N/A"}</h4>
    `
}

export default {
    fretboard,
    question,
}
