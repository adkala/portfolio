interface IArtEntry {
    name: string,
    thumbnail: string,
    date: string,
    subpage: string
}

const ArtEntries: IArtEntry[] = [
    {
        name: "McLaren Campaign",
        thumbnail: "../images/image2.webp",
        date: "June 2020",
        subpage: "mclaren"
    },
    {
        name: "Hedi Slimane",
        thumbnail: "../images/image1.jpeg",
        date: "August 2019",
        subpage: "hedislimane"
    }
];

export default ArtEntries;
export type {IArtEntry};