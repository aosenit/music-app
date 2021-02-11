const musicArray = [
    {
        artistName: 'ed Sheeran',
        musicFile: 'Ed-Sheeran-Perfect-via-Naijafinix.com_.mp3',
        musicName: 'Perfect',
        artistPix: 'ed sheeran.jpg'
    },

    {
        artistName: 'bruno Mars',
        musicFile: 'Bruno_Mars_-_Marry_You_Qoret.com.mp3',
        musicName: 'Marry You',
        artistPix: 'bruno.jpg'
    },

    {
        artistName: 'westlife',
        musicFile: '/Westlife_-_My_Love.mp3',
        musicName: 'My Love',
        artistPix: 'westlife.jpg'
    }
    
]

const image = document.querySelector('.image')
const audio = document.querySelector('.audioplayer')
const artistNames = document.querySelector('.artist-name')
const songTitle = document.querySelector('.song-title')
const previous = document.querySelector('.prev')
const playPause = document.querySelector('.play')
const next = document.querySelector('.next')

let count = 0
const fixSong = () => {
    image.src = musicArray[count].artistPix
    audio.src = musicArray[count].musicFile
    artistNames.innerHTML = musicArray[count].artistName
    songTitle.innerHTML = musicArray[count].musicName
}
fixSong();

const handlePlay = () => {
    if(playPause.innerHTML === '='){
        playPause.innerHTML = '+' 
        audio.pause()
    }

    else if(playPause.innerHTML === '+'){
        playPause.innerHTML = '=' 
        audio.play()
    }
}

const handleNext = () => {
   count++
   if (count > musicArray.length - 1) {
       count = 0
   }
   fixSong()
}

const handlePrev = () => {
    count--
    if (count < 0) {
        count =  musicArray.length - 1
    }
    fixSong()
 }

playPause.addEventListener('click', handlePlay)
next.addEventListener('click', handleNext)
previous.addEventListener('click', handlePrev)