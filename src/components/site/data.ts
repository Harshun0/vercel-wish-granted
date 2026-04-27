export type Track = {
  title: string;
  year: number;
  type: "Single" | "Feature" | "Collab";
  art: string;
  spotify?: string;
  youtube?: string;
  apple?: string;
  audioUrl?: string;
};

export type Video = {
  title: string;
  views: string;
  img: string;
  url: string;
};

export const TRACKS: Track[] = [
  { 
    title: "Baawe", 
    year: 2023, 
    type: "Single", 
    art: "https://res.cloudinary.com/drvug594q/image/upload/v1777223831/Baawe_e77ykt.jpg",
    spotify: "https://open.spotify.com/track/6AhYiJyXQTOjuytJ0khZBD",
    youtube: "https://www.youtube.com/watch?v=5eQu6MFGoG8&list=RD5eQu6MFGoG8&start_radio=1&pp=ygUFYmFhd2WgBwE%3D",
    apple: "https://music.apple.com/us/album/baawe/1779552920?i=1779553397",
    audioUrl: "https://res.cloudinary.com/drvug594q/video/upload/v1777321891/Baawe_Hard_Drive_Vol._2_320_Kbps_rizhju.mp3"
  },
  { 
    title: "Swag Mera Desi", 
    year: 2014, 
    type: "Single", 
    art: "https://res.cloudinary.com/drvug594q/image/upload/v1777223835/swag_mera_desi_hajz2o.jpg",
    spotify: "https://open.spotify.com/track/5BRnDYf8V2vKGVvuERvySS",
    youtube: "https://www.youtube.com/watch?v=yW63GZHF1wQ&list=RDyW63GZHF1wQ&start_radio=1&pp=ygUOc3dhZyBtZXJhIGRlc2mgBwE%3D",
    apple: "https://music.apple.com/us/song/swag-mera-desi/951006393",
    audioUrl: "https://res.cloudinary.com/drvug594q/video/upload/v1777321885/Swag_Mera_Desi_Hai_Ft_Raftaar_diiel8.mp3"
  },
  { 
    title: "Saza-E-Maut", 
    year: 2021, 
    type: "Feature", 
    art: "https://res.cloudinary.com/drvug594q/image/upload/v1777223832/sazaemaut_gnarwn.jpg",
    spotify: "https://open.spotify.com/track/2ikI9Y7PCPIavU0TMSpF31?si=4c3fb234a28d4844",
    youtube: "https://www.youtube.com/watch?v=o907r6NsK9s&list=RDo907r6NsK9s&start_radio=1&pp=ygUTc2F6YSBlIG1hdXQgcmFmdGFhcqAHAdIHCQnUCgGHKiGM7w%3D%3D",
    apple: "https://music.apple.com/us/song/saza-e-maut-feat-raftaar/1557493904",
    audioUrl: "https://res.cloudinary.com/drvug594q/video/upload/v1777321886/Saza_E_Maut_iex6bk.mp3"
  },
  { 
    title: "Mantoiyat", 
    year: 2018, 
    type: "Single", 
    art: "https://res.cloudinary.com/drvug594q/image/upload/v1777223832/manto_b49kgw.jpg",
    spotify: "https://open.spotify.com/track/0Dgb6V4AXNdituzDNdqzKL?si=f6d969e245bb4cfa",
    youtube: "https://www.youtube.com/watch?v=7gUAGZ30F9o&list=RD7gUAGZ30F9o&start_radio=1&pp=ygUJbWFudG9peWF0oAcB",
    apple: "https://music.apple.com/us/song/mantoiyat/1529534154",
    audioUrl: "https://res.cloudinary.com/drvug594q/video/upload/v1777321876/All_Black_Raftaar_320_Kbps_q9b72k.mp3"
  },
  { 
    title: "Ghana Kasoota", 
    year: 2021, 
    type: "Collab", 
    art: "https://res.cloudinary.com/drvug594q/image/upload/v1777223831/ghanakasoota_uyznmf.jpg",
    spotify: "https://open.spotify.com/track/0mvcsYusnTYlAkOZ077lDb?si=e0c2e2ce99544aac",
    youtube: "https://www.youtube.com/watch?v=u0Y3EHuMktE&list=RDu0Y3EHuMktE&start_radio=1&pp=ygUMZ2hhbmEga2FzdXRhoAcB",
    apple: "https://music.apple.com/us/song/ghana-kasoota-feat-surbhi-jyoti/1592956489",
    audioUrl: "https://res.cloudinary.com/drvug594q/video/upload/v1777321883/Ghana_Kasoota_Raftaar_320_Kbps_cniclc.mp3"
  },
  { 
    title: "Legacy", 
    year: 2023, 
    type: "Collab", 
    art: "https://res.cloudinary.com/drvug594q/image/upload/v1777223832/legacy_tuy7o7.jpg",
    spotify: "https://open.spotify.com/track/6zMr3R1ZqD4u3s4r3YB7Cl?si=2e5701d31f1a45d1",
    youtube: "https://www.youtube.com/watch?v=w6mUB5j2MpQ&list=RDw6mUB5j2MpQ&start_radio=1&pp=ygUObGVnYWN5IHJhZnRhYXKgBwE%3D",
    apple: "https://music.apple.com/us/song/legacy/1706792330"
  },
  { 
    title: "Farebi", 
    year: 2025, 
    type: "Single", 
    art: "https://res.cloudinary.com/drvug594q/image/upload/v1777223831/farebi_mmx4tz.jpg",
    spotify: "https://open.spotify.com/track/1Jsos1mzwTwYGOndYN5h8V?si=52406bb9de714b48",
    youtube: "https://www.youtube.com/watch?v=Pirzg-F_aag&list=RDPirzg-F_aag&start_radio=1&pp=ygULZmFyZWJpIHNvbmegBwHSBwkJ1AoBhyohjO8%3D",
    apple: "https://music.apple.com/us/song/farebi/1808602672"
  },
  { 
    title: "Dhaakad", 
    year: 2016, 
    type: "Single", 
    art: "https://res.cloudinary.com/drvug594q/image/upload/v1777225039/dhakad_is6dxy.jpg",
    spotify: "https://open.spotify.com/track/47ZCCeeC5PaMYN4meEAz44?si=f8c75801d82f4ab1",
    youtube: "https://www.youtube.com/watch?v=0zFoHrvbRu4&list=RD0zFoHrvbRu4&start_radio=1&pp=ygUMZGhhYWthZCBzb25noAcB",
    apple: "https://music.apple.com/us/song/dhaakad/1531116189"
  },
];

export const SHOWS = [
  { city: "DELHI", venue: "Jawaharlal Nehru Stadium", date: "DEC 14, 2025", country: "IN" },
  { city: "MUMBAI", venue: "MMRDA Grounds, BKC", date: "DEC 21, 2025", country: "IN" },
  { city: "BANGALORE", venue: "Palace Grounds", date: "JAN 11, 2026", country: "IN" },
  { city: "PUNE", venue: "Laxmi Lawns, Magarpatta", date: "JAN 18, 2026", country: "IN" },
  { city: "HYDERABAD", venue: "GMR Arena", date: "FEB 01, 2026", country: "IN" },
  { city: "DUBAI", venue: "Coca-Cola Arena", date: "FEB 22, 2026", country: "AE" },
];

export const PAST_SHOWS = [
  { city: "GURGAON", venue: "Cyber Hub Festival", date: "OCT 12, 2024" },
  { city: "KOLKATA", venue: "Eco Park", date: "AUG 30, 2024" },
  { city: "LONDON", venue: "OVO Wembley", date: "JUL 06, 2024" },
];

export const PRODUCTS = [
  { name: "Raftaar Oversized Tee", price: 1499, img: "https://res.cloudinary.com/drvug594q/image/upload/v1777225444/tshirt_eus9lq.webp", soldOut: false },
  { name: "Shotta Gang Hoodie", price: 3299, img: "https://res.cloudinary.com/drvug594q/image/upload/v1777225442/hoodie_vyevff.jpg", soldOut: false },
  { name: "Mantoiyat Trucker Cap", price: 999, img: "https://res.cloudinary.com/drvug594q/image/upload/v1777225442/cap_rmdpvz.avif", soldOut: true },
  { name: "Kalamkaar Crewneck", price: 2799, img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80", soldOut: false },
  { name: "Raftaar Bomber Jacket", price: 5499, img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80", soldOut: false },
  { name: "Logo Beanie", price: 799, img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800&q=80", soldOut: false },
  ];

export const VIDEOS: Video[] = [
  { 
    title: "Sheikh Chilli", 
    views: "146M", 
    img: "https://res.cloudinary.com/drvug594q/image/upload/v1777318882/shikh_chilliii_alaha9.jpg",
    url: "https://www.youtube.com/watch?v=uykOHAhId0Q&list=RDuykOHAhId0Q&start_radio=1&pp=ygUIcmFmdGFhciCgBwHSBwkJ1AoBhyohjO8%3D"
  },
  { 
    title: "Aage Chal", 
    views: "53M", 
    img: "https://res.cloudinary.com/drvug594q/image/upload/v1777318885/aagechal_bpgmhs.jpg",
    url: "https://www.youtube.com/watch?v=WklJsXi_vWI&pp=0gcJCdQKAYcqIYzv"
  },
  { 
    title: "Mantoiyat ft. Manoj Bajpayee", 
    views: "66M", 
    img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=900&q=80",
    url: "https://www.youtube.com/watch?v=7gUAGZ30F9o&list=RD7gUAGZ30F9o&start_radio=1&pp=ygUJbWFudG9peWF0oAcB"
  },
  { 
    title: "Baawe", 
    views: "23M", 
    img: "https://res.cloudinary.com/drvug594q/image/upload/v1777223831/Baawe_e77ykt.jpg",
    url: "https://youtu.be/5eQu6MFGoG8"
  },
  
  
];
