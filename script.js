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
        musicFile: 'Westlife_-_My_Love.mp3',
        musicName: 'My Love',
        artistPix: 'westlife.jpg'
    },
    
    {
        artistName: 'john Legend',
        musicFile: 'John-Legend-All-Of-Me-via-Naijafinix.com_.mp3',
        musicName: 'All of Me',
        artistPix: 'John.jpg'
    },

    {
        artistName: 'bruno Mars',
        musicFile: 'Bruno_Mars_-_Just_The_Way_You_Are_Qoret.com.mp3',
        musicName: 'Marry You',
        artistPix: 'bruno.jpg'
    },

    {
        artistName: 'timi Dakolo',
        musicFile: 'Timi-Dakolo-Iyawo-Mi_tooXclusive.com_.mp3',
        musicName: 'Iyawo Mi',
        artistPix: 'timi.jpg'
    },

    {
        artistName: 'chike',
        musicFile: 'Chike-Amen-(JustNaija.com).mp3',
        musicName: 'Amen',
        artistPix: 'chike.jpg'
    },

    {
        artistName: 'micheal Jackson',
        musicFile: 'Michael_Jackson_-_You_Are_Not_Alone_Qoret.com.mp3',
        musicName: 'You and I alone',
        artistPix: 'jackson.jpg'
    },

    {
        artistName: '2face',
        musicFile: '2Face_Idibia_-_True_Love_Qoret.com.mp3',
        musicName: 'True Love',
        artistPix: '2face.jpg'
    },

    {
        artistName: 'wande Coal',
        musicFile: ' Superwoman.mp3',
        musicName: 'Superwoman',
        artistPix: 'wande.jpg'
    },

    {
        artistName: 'yemi Alade',
        musicFile: ' Yemi-Alade-Kissing_tooXclusive.com_.mp3',
        musicName: 'Kissing',
        artistPix: 'yemi.jpg'
    },

    {
        artistName: 'patoraking',
        musicFile: 'My-Woman-My-Everything-_-tooXclusive.mp3',
        musicName: 'My Woman',
        artistPix: 'patoranking.jpg'
    },

   

    {
        artistName: 'joeboy',
        musicFile: 'Dj-Neptune-Nobody-ft.-Joeboy-Mr-Eazi.mp3',
        musicName: 'Nobody',
        artistPix: 'joeboy.jpg'
    },

    {
        artistName: '2face',
        musicFile: ' Waploaded_2baba_-_African_Queen-1562529854.mp3',
        musicName: 'African Queen',
        artistPix: '2face.jpg'
    },

    {
        artistName: 'simi',
        musicFile: ' Simi-Smile-For-Me.mp3',
        musicName: 'Smile for Me',
        artistPix: 'simi.jpg'
    },

    {
        artistName: 'joeboy',
        musicFile: 'Joeboy_-_Baby_.mp3',
        musicName: 'Baby',
        artistPix: 'joeboy.jpg'
    },

   
    
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

const handleMops = () => {
    playPause.innerHTML = '+' 
    audio.pause()
    setTimeout(() => (image.classList.add('zoom')), 3000)
   image.classList.remove('zoom')
}

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
   handleMops()
   if (count > musicArray.length - 1) {
       count = 0
   }
   fixSong()
}

const handlePrev = () => {
    count--
    handleMops()
    if (count < 0) {
        count =  musicArray.length - 1
    }
    fixSong()
 }

playPause.addEventListener('click', handlePlay)
next.addEventListener('click', handleNext)
previous.addEventListener('click', handlePrev)