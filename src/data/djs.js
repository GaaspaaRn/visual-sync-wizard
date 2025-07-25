// Import artist images
import djLucasHenriqueImg from '../assets/djlucashenrique.webp';
import djZatelliImg from '../assets/djzatelli_1.webp';
import djRodrizImg from '../assets/djrodriz.webp';
import djDigoIdgImg from '../assets/djdigoidg.webp';

export const djs = [
  {
    id: 'rodriz',
    name: 'DJ Rodriz',
    artistName: 'Rodriz',
    image: djRodrizImg,
    youtube: 'https://www.youtube.com/@djrodriz1',
    instagram: 'https://www.instagram.com/rodriz.wav/?hl=pt-br',
    spotifyEmbed: 'https://open.spotify.com/embed/track/1T0Za0ldouSRjRMH94SwWI?utm_source=generator&theme=0',
    spotifyUrl: 'https://open.spotify.com/intl-pt/artist/3s085Y3JMDExHJiZzDxhUP',
    topTrack: 'MEGA FUNK SUSTENTA',
    stats: {
      youtubeSubscribers: '1.79K',
      youtubeViews: '2M+',
      youtubeVideos: '66',
      spotifyMonthly: '102.788'
    },
    bio: 'Iniciou sua trajetória musical em 2023, aos 16 anos, produzindo seus próprios sons e sempre buscando inovação em suas criações. Atualmente, com 18 anos, vem conquistando seu espaço no cenário, com colaborações ao lado de nomes de peso da cena.',
    color: 'hsl(180, 100%, 50%)'
  },
  {
    id: 'lucas',
    name: 'DJ Lucas Henrique',
    artistName: 'Lucas Henrique',
    image: djLucasHenriqueImg,
    youtube: 'https://www.youtube.com/channel/UCnvOrXyqGdK2AFrYcAQAwyg',
    instagram: 'https://www.instagram.com/djlucashenrique_/',
    spotifyEmbed: 'https://open.spotify.com/embed/track/0cm0T95hVIgR9IKmz76prJ?utm_source=generator&theme=0',
    spotifyUrl: 'https://open.spotify.com/intl-pt/artist/0auLP5j5MbnqMRXmdlvub9',
    topTrack: 'MEGA PROMISCUOUS',
    stats: {
      youtubeSubscribers: '8.8K',
      youtubeViews: '3M+',
      youtubeVideos: '62',
      spotifyMonthly: '28.18K'
    },
    bio: 'Lucas Henrique iniciou sua carreira no Mega Funk em 2022, produzindo suas músicas e sendo influenciado por vários artistas já renomados da cena. Ganhou destaque já no começo de sua carreira, onde começou a tocar em casas de shows e foi reconhecido pela comunidade. Desde então vem se destacando e trazendo sua melhor performance para seus shows.',
    color: 'hsl(180, 100%, 50%)'
  },
  {
    id: 'zatelli',
    name: 'DJ Zatelli',
    artistName: 'Zatelli',
    image: djZatelliImg,
    youtube: 'https://www.youtube.com/@DjZatelli',
    instagram: 'https://www.instagram.com/djzatelli/',
    spotifyEmbed: 'https://open.spotify.com/embed/track/6BlnhPe8oMmJndqOneit2U?utm_source=generator&theme=0',
    spotifyUrl: 'https://open.spotify.com/intl-pt/artist/5WXA9QsuHzbaB696vr1Hkg',
    topTrack: 'MEGA FUNK HOJE EU QUERO FUDER',
    stats: {
      youtubeSubscribers: '6.31K',
      youtubeViews: '1,91M+',
      youtubeVideos: '57',
      spotifyMonthly: '4440'
    },
    bio: 'Thiago Correira, mais conhecido como DJ Zatelli, Nasceu e cresceu em SC, na cidade de Joinville. Ele é um DJ e produtor de Mega Funk desde os 16 anos de idade, atualmente acumula mais de 1,8 milhões de visualizações. Se destaca na cena do mega funk por estar sempre inovando a cada novo som. Se apresentando em várias cidades do Sul do País, Zatelli vem conquistando cada vez mais reconhecimento e fama.',
    color: 'hsl(180, 100%, 50%)'
  },
  {
    id: 'diguera',
    name: 'DJ Diguera',
    artistName: 'DJ Diguera',
    image: djDigoIdgImg,
    youtube: 'https://www.youtube.com/channel/UC-CEC6IFh1ogjyJlL3QOslQ',
    instagram: 'https://www.instagram.com/digoidg/',
    spotifyEmbed: 'https://open.spotify.com/embed/track/2UR8zmsZgwCJ0dwnlpY9KN?utm_source=generator&theme=0',
    spotifyUrl: 'https://open.spotify.com/intl-pt/artist/7ff4I1cuWy9xBpTaYeinvv',
    topTrack: 'Mega Senta Fumadona',
    stats: {
      youtubeSubscribers: '2.46K',
      youtubeViews: '627,512',
      youtubeVideos: '47',
      spotifyMonthly: '0.2K'
    },
    bio: 'Rodrigo (23 anos), natural de Joinville, Santa Catarina. DJ Diguera começou sua carreira no Mega Funk no final de 2019. Com o tempo, foi criando seu estilo e conquistando seu espaço, entre 2020 e 2021 ganhou reconhecimento do público e da comunidade. DJ Diguera é um artista versátil que segue crescendo na cena do Mega Funk, sempre buscando entregar o melhor em cada apresentação e evoluindo como artista.',
    color: 'hsl(180, 100%, 50%)'
  }
];

export const getTotalStats = () => {
  return {
    subscribers: djs.reduce((acc, dj) => acc + parseFloat(dj.stats.youtubeSubscribers.replace('K', '')) * 1000, 0),
    views: djs.reduce((acc, dj) => acc + parseFloat(dj.stats.youtubeViews.replace(/,/g, '')), 0),
    videos: djs.reduce((acc, dj) => acc + parseInt(dj.stats.youtubeVideos), 0),
    monthly: djs.reduce((acc, dj) => acc + parseFloat(dj.stats.spotifyMonthly.replace('K', '')) * 1000, 0)
  };
};