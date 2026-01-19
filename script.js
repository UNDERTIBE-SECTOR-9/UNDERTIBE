/**
 * Logic Interaksi Proyek Undertribe Store
 */

const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');

/**
 * Membuka modal gambar dengan detail tertentu
 * @param {string} imgSrc - Path gambar
 * @param {string} title - Judul desain
 */
function openModal(imgSrc, title) {
    if (!modal || !modalImg || !modalTitle) return;

    modalImg.src = imgSrc;
    modalTitle.innerText = title;
    modal.classList.add('active');
    
    // Mencegah scroll pada background
    document.body.style.overflow = 'hidden';
    modal.scrollTop = 0;
}

/**
 * Menutup modal
 */
function closeModal() {
    if (!modal) return;
    
    modal.classList.remove('active');
    
    // Mengembalikan scroll pada background
    document.body.style.overflow = 'auto';
}

/**
 * Event Listener Keyboard
 */
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        closeModal();
    }
});