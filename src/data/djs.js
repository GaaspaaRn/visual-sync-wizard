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
    instagram: 'https://www.instagram.com/rodrizdj/?hl=pt-br',
    spotifyEmbed: 'https://open.spotify.com/embed/track/1T0Za0ldouSRjRMH94SwWI?utm_source=generator&theme=0',
    spotifyUrl: 'https://open.spotify.com/intl-pt/artist/3s085Y3JMDExHJiZzDxhUP',
    topTrack: 'MEGA SUSTENTA',
    stats: {
      youtubeSubscribers: '1.79K',
      youtubeViews: '2M+',
      youtubeVideos: '66',
      spotifyMonthly: '180K'
    },
    bio: 'Producer de música eletrônica especializado em Mega Funk. Iniciou sua trajetória musical em 2023, aos 16 anos, produzindo seus próprios sons e sempre buscando inovação em suas criações. Atualmente, com 18 anos, vem conquistando seu espaço no cenário eletrônico.',
    color: 'hsl(180, 100%, 50%)'
  },
  {
    id: 'lucashenrique',
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
      spotifyMonthly: '64K'
    },
    bio: 'Producer de música eletrônica especializado em Mega Funk. Lucas Henrique iniciou sua carreira no Mega em 2022, produzindo suas músicas e sendo influenciado por vários artistas já renomados da cena eletrônica. Ganhou destaque já no começo de sua carreira, onde começou a tocar em casas de shows e foi reconhecido pela comunidade.',
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
    topTrack: 'MEGA HOJE EU QUERO FUDER',
    stats: {
      youtubeSubscribers: '6.31K',
      youtubeViews: '1,91M+',
      youtubeVideos: '57',
      spotifyMonthly: '5K'
    },
    bio: 'Producer de música eletrônica especializado em Mega Funk. Thiago Correira, mais conhecido como DJ Zatelli, nasceu e cresceu em SC, na cidade de Joinville. Ele é um DJ e producer de música eletrônica desde os 16 anos de idade, atualmente acumula mais de 1,8 milhões de visualizações. Se destaca na cena eletrônica por estar sempre inovando a cada novo som.',
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
    spotifyUrl: 'https://open.spotify.com/intl-pt/artist/1CKoqzkaphGMIcHZ55JvvM',
    topTrack: 'Mega Senta Fumadona',
    stats: {
      youtubeSubscribers: '2.46K',
      youtubeViews: '627,512',
      youtubeVideos: '47',
      spotifyMonthly: '0.2K'
    },
    bio: 'Producer de música eletrônica especializado em Mega Funk. Rodrigo (23 anos), natural de Joinville, Santa Catarina. DJ Diguera começou sua carreira na música eletrônica no final de 2019. Com o tempo, foi criando seu estilo e conquistando seu espaço, entre 2020 e 2021 ganhou reconhecimento do público e da comunidade eletrônica.',
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
