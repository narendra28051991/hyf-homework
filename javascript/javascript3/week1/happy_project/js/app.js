const form = document.querySelector('form')
const button = document.querySelector('.form form button')
const input = document.querySelector('input')
const textarea = document.querySelector('textarea')
// all detectors
const happyDetector = document.querySelector('.infos div:nth-child(3)')
const neutralDetector = document.querySelector('.infos div:nth-child(4)')
const sadDetector = document.querySelector('.infos div:nth-child(5)')
// all captions
const happyMood = document.querySelector('.alert-success')
const sadMood = document.querySelector('.alert-primary')
const neutralMood = document.querySelector('.alert-info')

const sentimentFinder = {
    'positive': [happyDetector, happyMood, "Hey there ", ". You are clearly happy! :)"],
    'neutral': [neutralDetector, neutralMood, "Hello ", ". You are so-so :|"],
    'negative': [sadDetector, sadMood, "I'm sorry ", ". You are clearly sad! :("]
}

const detectors = [happyDetector, neutralDetector, sadDetector]

const captions = [happyMood, neutralMood, sadMood]

const updateUI = (list, detector) => {
    list.forEach(each => {
        if (each !== detector) {
            if (each.classList.contains('d-none')) {
                each.classList.remove('d-none')
            }
            each.classList.add('d-none')
        }
        else {
            if (each.classList.contains('d-none')) {
                each.classList.remove('d-none')
            }
        }
    })
}


button.addEventListener('click', async (e) => {
    e.preventDefault();
    if (input.value && textarea.value) {
        const response = await getSentimentAnalysis(textarea.value);
        const sentimentFinderKey = response.type
        const detector = sentimentFinder[sentimentFinderKey][0]
        const caption = sentimentFinder[sentimentFinderKey][1]
        const innerText = sentimentFinder[sentimentFinderKey][2] + input.value[0].toUpperCase() + input.value.slice(1) + sentimentFinder[sentimentFinderKey][3]
        updateUI(detectors, detector)
        updateUI(captions, caption)
        caption.innerHTML = innerText
        form.reset()
    }
})