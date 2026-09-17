
// ============================================
// picNest - Image Gallery
// ============================================

// Gallery images
const images = [

    // =========================
    // CAMERA - 20 images
    // =========================
    {
        id: 1,
        folder: "Camera",
        source: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 2,
        folder: "Camera",
        source: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 3,
        folder: "Camera",
        source: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 4,
        folder: "Camera",
        source: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 5,
        folder: "Camera",
        source: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 6,
        folder: "Camera",
        source: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 7,
        folder: "Camera",
        source: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 8,
        folder: "Camera",
        source: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 9,
        folder: "Camera",
        source: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 10,
        folder: "Camera",
        source: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 11,
        folder: "Camera",
        source: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 12,
        folder: "Camera",
        source: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 13,
        folder: "Camera",
        source: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 14,
        folder: "Camera",
        source: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 15,
        folder: "Camera",
        source: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 16,
        folder: "Camera",
        source: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 17,
        folder: "Camera",
        source: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 18,
        folder: "Camera",
        source: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 19,
        folder: "Camera",
        source: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 20,
        folder: "Camera",
        source: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85"
    },


    // =========================
    // DOWNLOADS - 20 images
    // =========================
    {
        id: 21,
        folder: "Downloads",
        source: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 22,
        folder: "Downloads",
        source: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 23,
        folder: "Downloads",
        source: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 24,
        folder: "Downloads",
        source: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 25,
        folder: "Downloads",
        source: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 26,
        folder: "Downloads",
        source: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 27,
        folder: "Downloads",
        source: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 28,
        folder: "Downloads",
        source: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 29,
        folder: "Downloads",
        source: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 30,
        folder: "Downloads",
        source: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 31,
        folder: "Downloads",
        source: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 32,
        folder: "Downloads",
        source: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 33,
        folder: "Downloads",
        source: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 34,
        folder: "Downloads",
        source: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 35,
        folder: "Downloads",
        source: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 36,
        folder: "Downloads",
        source: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 37,
        folder: "Downloads",
        source: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 38,
        folder: "Downloads",
        source: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 39,
        folder: "Downloads",
        source: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 40,
        folder: "Downloads",
        source: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=85"
    },


    // =========================
    // SCREENSHOTS - 20 images
    // NO PEOPLE
    // =========================
    {
        id: 41,
        folder: "Screenshots",
        source: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 42,
        folder: "Screenshots",
        source: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 43,
        folder: "Screenshots",
        source: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 44,
        folder: "Screenshots",
        source: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 45,
        folder: "Screenshots",
        source: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=85"
    },
    {
    id: 46,
    folder: "Screenshots",
    source: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 47,
        folder: "Screenshots",
        source: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 48,
        folder: "Screenshots",
        source: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=85"
    },

    // Cute stationery / desk images replacing person photos
    {
        id: 49,
        folder: "Screenshots",
        source: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 50,
        folder: "Screenshots",
        source: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 51,
        folder: "Screenshots",
        source: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 52,
        folder: "Screenshots",
        source: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 53,
        folder: "Screenshots",
        source: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 54,
        folder: "Screenshots",
        source: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 55,
        folder: "Screenshots",
        source: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 56,
        folder: "Screenshots",
        source: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 57,
        folder: "Screenshots",
        source: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 58,
        folder: "Screenshots",
        source: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 59,
        folder: "Screenshots",
        source: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 60,
        folder: "Screenshots",
        source: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=900&q=85"
    },


    // =========================
    // FAVORITES - 20 images
    // Cute animals, flowers, food, nature
    // NO PEOPLE
    // =========================
    {
        id: 61,
        folder: "Favorites",
        source: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 62,
        folder: "Favorites",
        source: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 63,
        folder: "Favorites",
        source: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 64,
        folder: "Favorites",
        source: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 65,
        folder: "Favorites",
        source: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 66,
        folder: "Favorites",
        source: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 67,
        folder: "Favorites",
        source: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 68,
        folder: "Favorites",
        source: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 69,
        folder: "Favorites",
        source: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 70,
        folder: "Favorites",
        source: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 71,
        folder: "Favorites",
        source: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 72,
        folder: "Favorites",
        source: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 73,
        folder: "Favorites",
        source: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 74,
        folder: "Favorites",
        source: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 75,
        folder: "Favorites",
        source: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 76,
        folder: "Favorites",
        source: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 77,
        folder: "Favorites",
        source: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 78,
        folder: "Favorites",
        source: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 79,
        folder: "Favorites",
        source: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 80,
        folder: "Favorites",
        source: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85"
    }
];


// ============================================
// Gallery state
// ============================================

let currentFolder = "All";
let filteredImages = [...images];
let currentIndex = 0;


// ============================================
// DOM elements
// ============================================

const gallery = document.getElementById("gallery");
const folderButtons = document.querySelectorAll(".folder-btn");
const currentFolderTitle = document.getElementById("current-folder");
const shuffleButton = document.getElementById("shuffle-btn");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.getElementById("close-btn");
const previousButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");


// ============================================
// Update folder counts
// ============================================

function updateCounts() {
    const folders = ["All", "Camera", "Downloads", "Screenshots", "Favorites"];

    folders.forEach(folder => {
        const countElement = document.getElementById(`count-${folder}`);

        if (!countElement) return;

        if (folder === "All") {
            countElement.textContent = images.length;
        } else {
            const count = images.filter(image => image.folder === folder).length;
            countElement.textContent = count;
        }
    });
}


// ============================================
// Render gallery
// ============================================

function renderGallery() {
    gallery.innerHTML = "";

    filteredImages.forEach((image, index) => {
        const card = document.createElement("article");
        card.className = "gallery-card";

        const img = document.createElement("img");

        img.src = image.source;
        img.alt = "Gallery image";
        img.loading = "lazy";

        // Fallback if an image URL fails
        img.onerror = function () {
            this.onerror = null;
            this.src = `https://picsum.photos/seed/picnest${image.id}/900/700`;
        };

        card.appendChild(img);

        card.addEventListener("click", () => {
            openLightbox(index);
        });

        gallery.appendChild(card);
    });
}


// ============================================
// Select folder
// ============================================

function selectFolder(folder) {
    currentFolder = folder;

    if (folder === "All") {
        filteredImages = [...images];
        currentFolderTitle.textContent = "All Photos";
    } else {
        filteredImages = images.filter(image => image.folder === folder);
        currentFolderTitle.textContent = folder;
    }

    folderButtons.forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.folder === folder
        );
    });

    renderGallery();
}


// ============================================
// Open lightbox
// ============================================

function openLightbox(index) {
    if (!filteredImages.length) return;

    currentIndex = index;

    lightboxImage.src = filteredImages[currentIndex].source;

    lightboxImage.onerror = function () {
        this.onerror = null;
        this.src =
            `https://picsum.photos/seed/picnest${filteredImages[currentIndex].id}/1200/900`;
    };

    lightbox.classList.add("show");
    document.body.style.overflow = "hidden";
}


// ============================================
// Close lightbox
// ============================================

function closeLightbox() {
    lightbox.classList.remove("show");
    document.body.style.overflow = "";
}


// ============================================
// Show next image
// ============================================

function showNextImage() {
    if (!filteredImages.length) return;

    currentIndex =
        (currentIndex + 1) % filteredImages.length;

    openLightbox(currentIndex);
}


// ============================================
// Show previous image
// ============================================

function showPreviousImage() {
    if (!filteredImages.length) return;

    currentIndex =
        (currentIndex - 1 + filteredImages.length) %
        filteredImages.length;

    openLightbox(currentIndex);
}


// ============================================
// Shuffle current folder
// ============================================

function shuffleImages() {
    for (let i = filteredImages.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        [
            filteredImages[i],
            filteredImages[randomIndex]
        ] = [
            filteredImages[randomIndex],
            filteredImages[i]
        ];
    }

    renderGallery();
}


// ============================================
// Folder button events
// ============================================

folderButtons.forEach(button => {
    button.addEventListener("click", () => {
        selectFolder(button.dataset.folder);
    });
});


// ============================================
// Shuffle button
// ============================================

shuffleButton.addEventListener("click", shuffleImages);


// ============================================
// Lightbox controls
// ============================================

closeButton.addEventListener("click", closeLightbox);

nextButton.addEventListener("click", showNextImage);

previousButton.addEventListener("click", showPreviousImage);


// ============================================
// Close lightbox by clicking background
// ============================================

lightbox.addEventListener("click", event => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});


// ============================================
// Keyboard controls
// ============================================

document.addEventListener("keydown", event => {

    if (!lightbox.classList.contains("show")) {
        return;
    }

    if (event.key === "Escape") {
        closeLightbox();
    }

    if (event.key === "ArrowRight") {
        showNextImage();
    }

    if (event.key === "ArrowLeft") {
        showPreviousImage();
    }
});


// ============================================
// Initial setup
// ============================================

updateCounts();
selectFolder("All");

