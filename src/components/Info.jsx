// Central data file for all artwork information
// Dynamically imports all images from the paintings directory

// Fallback imports (only used if paintings directory is empty)
import artwork1 from "../assets/paintings/PICT0003.JPG"
import artwork2 from "../assets/paintings/PICT0005.JPG"
import artwork3 from "../assets/paintings/PICT0006.JPG"
import artwork4 from "../assets/paintings/PICT0007.JPG"

// Import all images from the paintings folder
const images = import.meta.glob('../assets/paintings/*.{jpg,jpeg,png,JPG}', {
    eager: true,
    import: 'default',
    query: 'url'
})

/*
const sculptures = import.meta.glob(['../assets/sculpture/*.{jpg,jpeg,png,JPG}',
    '../assets/flocked/*.{jpg,jpeg,png,JPG}'], {
    eager: true,
    import: 'default',
    query: 'url'
})*/


// Extract and sort image paths for consistent ordering
const imagePaths = Object.keys(images).sort()
//const sculpturesPaths = Object.keys(sculptures).sort()

// Helper function
const createArtwork = (id, title, image) => ({
    id,
    title,
    year: "n.d",
    medium: "Acrylic on Metal",
    image
})

// Generate artworks array
let artworks = []

if (imagePaths.length > 0) {
    // Dynamically create artworks from imported images
    artworks = imagePaths.map((path, index) => {
        // Extract filename without extension
        const filename = path.split('/').pop().split('.')[0];

        // Title from filename
        // e.g., "my-painting-1" becomes "My Painting 1"
        /*
        const title = filename
            .split(/[-_]/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ') || `Untitled ${index + 1}`;*/

        const title = `Untitled ${index + 1}`

        return createArtwork(index + 1, title, images[path]);
    });
} else {
    // Use fallback data if no images found in paintings directory
    console.warn('No images found in ../assets/paintings/. Using fallback artwork data.');

    artworks = [
        createArtwork(1, "Untitled 1", artwork1),
        createArtwork(2, "Untitled 2", artwork2),
        createArtwork(3, "Untitled 3", artwork3),
        createArtwork(4, "Untitled 4", artwork4)
    ];
}

export { artworks };
