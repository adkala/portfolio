import { IArtEntry } from "./ArtEntries";

const ArtEntry: React.FC<IArtEntry> = ({
    name,
    thumbnail,
    date,
    subpage
}) => {
    return (
        <p>{name}</p>
    )
};

export default ArtEntry