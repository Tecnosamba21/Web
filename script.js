var texts = ['improving your work', 'boosting your productivity', 'simplifying your processes']

let textIndex = 0

function showText() {
    let textElement = document.getElementById('typing-text')
    textElement.textContent = ""
    textElement.textContent = texts[textIndex]
    textIndex = (textIndex + 1) % texts.length
}

showText()

setInterval(showText, 5000)

const download_sampad_windows = async () => {
    let link = document.createElement('a')
    link.href = 'files/Sam Pad.msi'
    link.download = 'Sam Pad.msi'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    Swal.fire({
        icon: 'success',
        title: 'Downloaded!',
        text: 'The installer is already downloaded, just execute it and get SamPad!',
        showConfirmButton: true,
    })
}

function download_sampy_windows() {
    let link = document.createElement('a')
    link.href = 'files/SamPy1.1.0-Installer-x64.msi'
    link.download = 'SamPy1.1.0-Installer-x64.msi'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    Swal.fire({
        icon: 'success',
        title: 'Downloaded!',
        text: 'The installer is already downloaded, just execute it and get SamPy!',
        showConfirmButton: true,
    })
}

const copy_email = async () => {
    await navigator.clipboard.writeText("sannicolas2121@outlook.com")
    Swal.fire({
        icon: 'success',
        title: 'Copied!',
        showConfirmButton: false,
        timer: 1500
    })
}
