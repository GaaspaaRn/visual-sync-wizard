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
    spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1T0Za0ldouSRjRMH94SwWI?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    spotifyUrl: 'https://open.spotify.com/intl-pt/artist/3s085Y3JMDExHJiZzDxhUP',
    topTrack: 'MEGA FUNK SUSTENTA',
    stats: {
      youtubeSubscribers: '1.79K',
      youtubeViews: '1,882,169',
      youtubeVideos: '66',
      spotifyMonthly: '83.8K'
    },
    bio: 'Produtor emergente na cena do megafunk, conhecido por suas batidas inovadoras e colaborações com outros artistas da região Sul.',
    color: 'hsl(180, 100%, 50%)'
  },
  {
    id: 'lucas',
    name: 'DJ Lucas Henrique',
    artistName: 'Lucas Henrique',
    image: djLucasHenriqueImg,
    youtube: 'https://www.youtube.com/channel/UCnvOrXyqGdK2AFrYcAQAwyg',
    instagram: 'https://www.instagram.com/djlucashenrique_/',
    spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0cm0T95hVIgR9IKmz76prJ?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    spotifyUrl: 'https://open.spotify.com/intl-pt/artist/0auLP5j5MbnqMRXmdlvub9',
    topTrack: 'MEGA PROMISCUOUS',
    stats: {
      youtubeSubscribers: '8.8K',
      youtubeViews: '3,001,231',
      youtubeVideos: '62',
      spotifyMonthly: '26.2K'
    },
    bio: 'DJ e produtor musical especializado em megafunk, natural de Joinville, Santa Catarina. Com um estilo único e exclusivo, Lucas Henrique vem conquistando seu espaço na cena musical.',
    color: 'hsl(180, 100%, 50%)'
  },
  {
    id: 'zatelli',
    name: 'DJ Zatelli',
    artistName: 'Zatelli',
    image: djZatelliImg,
    youtube: 'https://www.youtube.com/@DjZatelli',
    instagram: 'https://www.instagram.com/djzatelli/',
    spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3q20ZeAbg7FvRr7dbWpeV1?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    spotifyUrl: 'https://open.spotify.com/intl-pt/artist/5WXA9QsuHzbaB696vr1Hkg',
    topTrack: 'MEGA FUNK HOJE EU QUERO FUDER',
    stats: {
      youtubeSubscribers: '6.31K',
      youtubeViews: '1,848,406',
      youtubeVideos: '57',
      spotifyMonthly: '3.9K'
    },
    bio: 'Thiago Correia, nascido e criado na cidade de Joinville (SC), começou a se envolver com a cena do Mega Funk em 2021, criando elementos da música eletrônica.',
    color: 'hsl(180, 100%, 50%)'
  },
  {
    id: 'digo',
    name: 'Digo IDG',
    artistName: 'Digo IDG',
    image: djDigoIdgImg,
    youtube: 'https://www.youtube.com/channel/UC-CEC6IFh1ogjyJlL3QOslQ',
    instagram: 'https://www.instagram.com/digoidg/',
    spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2UR8zmsZgwCJ0dwnlpY9KN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    spotifyUrl: 'https://open.spotify.com/intl-pt/artist/7ff4I1cuWy9xBpTaYeinvv',
    topTrack: 'Mega Senta Fumadona',
    stats: {
      youtubeSubscribers: '2.46K',
      youtubeViews: '627,512',
      youtubeVideos: '47',
      spotifyMonthly: '0.2K'
    },
    bio: 'Artista versátil que combina elementos do funk tradicional com a energia do megafunk, criando um som único e envolvente.',
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