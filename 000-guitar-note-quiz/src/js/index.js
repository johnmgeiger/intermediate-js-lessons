// JS IMPORTS
import FB from 'fretboard'
import newQuestion from './questionGenerator'
import Templates from './templates'

// CSS IMPORT
import "../css/main.scss"

(() => {
    const strings = 'EADGBE'
    const frets = 14
    const guitar = new FB(strings, frets)
    
    const guitarElement = document.getElementById('guitar')
    const questionButton = document.getElementById('questionButton')
    const questionElement = document.getElementById('question')

    initQuestion()
    
    function initQuestion () {
        // start with a visible guitar
        renderGuitar({ showNotes: true })
        
        // on new question, hide guitar
        questionButton.addEventListener('click', _ => loadNewQuestion())
        document.addEventListener('keyup', ev => {
            if (ev.keyCode === 13)
                loadNewQuestion()
        })
    }

    function loadNewQuestion () {
        // clear guitar
        renderGuitar()

        // new question
        const currentQuestion = newQuestion(guitar)
        questionElement.innerHTML = Templates.question(currentQuestion)

        // set events
        const noteButtons = document.getElementsByClassName('js-note')
        for (let i = 0; i < noteButtons.length; i++) {
            const note = noteButtons[i]

            note.addEventListener('click', ev => {
                const note = ev.target
                const currentFret = note.attributes['data-fret'].value
                const stringNum = note.attributes['data-string'].value
                const stringNote = note.attributes['data-note'].value

                // re-render guitar
                const noteMatches = []


                // all matching notes on the correct string
                noteMatches.push({
                    color: "#00ad58", // green
                    match: (string, fret, note) => (
                        string === guitar.length - currentQuestion.string &&
                        note === currentQuestion.note)
                })

                // if wrong note, highlight red
                if (stringNote !== currentQuestion.note ||
                    parseInt(stringNum) !== currentQuestion.string) {

                    noteMatches.push({
                        color: "#f33", // red
                        match: (string, fret, note) => (
                            string === guitar.length - stringNum &&
                            fret === parseInt(currentFret))
                    })
                }

                renderGuitar({
                    showNotes: true,
                    noteMatches,
                })
            })
        }
    }
    
    
    function renderGuitar(options) {
        guitarElement.innerHTML = Templates.fretboard(guitar, options)
    }
    

})()