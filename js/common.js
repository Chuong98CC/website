// Common JavaScript functionality for The English Studio website

// Function to load footer component
function loadFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer) {
        console.log('Footer container not found');
        return;
    }

    console.log('Loading footer component...');
    fetch('components/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            footerContainer.innerHTML = html;
            console.log('Footer component loaded successfully');
            
            // Dispatch custom event to notify that footer is loaded
            document.dispatchEvent(new CustomEvent('footerLoaded'));
        })
        .catch(error => {
            console.error('Error loading footer component:', error);
            console.log('Creating fallback footer...');
            
            // Create a simple fallback footer if loading fails
            footerContainer.innerHTML = `
                <footer id="contact" class="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
                    <div class="max-w-7xl mx-auto px-6">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <h2 class="footer-contact-title font-heading text-4xl font-bold mb-8" style="color: #D4A933;">Get in touch</h2>
                                <div class="space-y-6">
                                    <div class="flex items-start space-x-4">
                                        <svg class="w-6 h-6 mt-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        <p class="text-lg">148 Tong Phuoc Pho St.<br>Hai Chau Dist., Da Nang, VN</p>
                                    </div>
                                    <div class="flex items-center space-x-4">
                                        <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>
                                        <a href="mailto:theenglishstudiodanang@gmail.com" class="text-lg hover:text-primary transition-colors">
                                            theenglishstudiodanang@gmail.com
                                        </a>
                                    </div>
                                    <div class="flex items-center space-x-4">
                                        <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                        </svg>
                                        <a href="tel:+84981487770" class="text-lg hover:text-primary transition-colors">
                                            0981 487 770
                                        </a>
                                    </div>
                                    <p class="text-gray-300">Zalo Available at 0981 487 770</p>
                                </div>
                            </div>
                            <div>
                                <h3 class="footer-follow-us font-heading text-2xl font-bold mb-6" style="color: #D4A933;">Follow us</h3>
                                <div class="flex space-x-6">
                                    <a href="#" class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="border-t border-gray-700 mt-12 pt-8 text-center">
                            <p class="footer-copyright text-gray-400">© 2025 The English Studio Da Nang. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            `;
            console.log('Fallback footer created');
        });
}

// Initialize common functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Common.js loaded - initializing footer...');
    loadFooter();
});

// Export functions for use in other scripts
window.Common = {
    loadFooter
};

console.log('common.js loaded successfully');
