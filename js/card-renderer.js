// Card renderer utility for dynamic card generation

// Utility functions
const Utils = {
    generateStars: (count) => Array(count).fill(1),
    createTag: (text, color = "blue") => typeof text === 'string' ? { text, color } : text
};

class CardRenderer {
    constructor() {
        this.templates = {};
    }

    // Load template from HTML file
    async loadTemplate(templateName, templatePath) {
        try {
            const response = await fetch(templatePath);
            const html = await response.text();
            this.templates[templateName] = html;
            return html;
        } catch (error) {
            console.error(`Error loading template ${templateName}:`, error);
            return null;
        }
    }

    // Render template with data
    render(templateName, data, currentLanguage = 'en') {
        const template = this.templates[templateName];
        if (!template) {
            console.error(`Template ${templateName} not found`);
            return '';
        }

        let rendered = template;
        
        // Pre-generate HTML for arrays
        let enrichedData = { ...data };
        
        // Generate stars HTML
        if (data.stars && Array.isArray(data.stars)) {
            enrichedData.starsHtml = data.stars.map(() => '<span class="w-3 h-3 bg-yellow-400 rounded-full"></span>').join('');
        }

        // Generate tags HTML
        if (data.tags && Array.isArray(data.tags)) {
            enrichedData.tagsHtml = data.tags.map(tag => {
                const tagText = currentLanguage === 'vi' && tag.textVi ? tag.textVi : tag.text;
                const tagDataAttributes = `data-en="${tag.text}" data-vi="${tag.textVi || tag.text}"`;
                return `<span class="bg-${tag.color}-100 text-${tag.color}-800 px-3 py-1 rounded-full text-xs font-semibold teacher-tag" ${tagDataAttributes}>${tagText}</span>`;
            }).join('');
        }
        
        // Replace simple variables - handle all placeholders including Vietnamese ones
        Object.keys(enrichedData).forEach(key => {
            if (typeof enrichedData[key] === 'string' || typeof enrichedData[key] === 'number') {
                const regex = new RegExp(`{{${key}}}`, 'g');
                rendered = rendered.replace(regex, enrichedData[key]);
            }
        });

        // Handle language-specific content in the displayed text
        if (currentLanguage === 'vi') {
            // Replace main content with Vietnamese versions if available
            if (enrichedData.titleVi) {
                const titleRegex = new RegExp(`{{title}}`, 'g');
                rendered = rendered.replace(titleRegex, enrichedData.titleVi);
            }
            if (enrichedData.descriptionVi) {
                const descRegex = new RegExp(`{{description}}`, 'g');
                rendered = rendered.replace(descRegex, enrichedData.descriptionVi);
            }
            if (enrichedData.roleVi) {
                const roleRegex = new RegExp(`{{role}}`, 'g');
                rendered = rendered.replace(roleRegex, enrichedData.roleVi);
            }
        }

        return rendered;
    }

    // Render multiple cards
    renderCards(containerSelector, templateName, cardsData, currentLanguage = 'en') {
        const container = document.querySelector(containerSelector);
        if (!container) {
            console.error(`Container ${containerSelector} not found`);
            return;
        }

        const cardsHtml = cardsData.map(cardData => this.render(templateName, cardData, currentLanguage)).join('');
        container.innerHTML = cardsHtml;
    }

    // Update cards language without re-rendering from scratch
    updateCardsLanguage(containerSelector, currentLanguage) {
        const container = document.querySelector(containerSelector);
        if (!container) return;

        // Update teacher titles
        const titles = container.querySelectorAll('.teacher-title');
        titles.forEach(title => {
            const langKey = currentLanguage === 'vi' ? 'data-vi' : 'data-en';
            if (title.getAttribute(langKey)) {
                title.textContent = title.getAttribute(langKey);
            }
        });

        // Update teacher descriptions
        const descriptions = container.querySelectorAll('.teacher-description');
        descriptions.forEach(desc => {
            const langKey = currentLanguage === 'vi' ? 'data-vi' : 'data-en';
            if (desc.getAttribute(langKey)) {
                desc.textContent = desc.getAttribute(langKey);
            }
        });

        // Update teacher tags
        const tags = container.querySelectorAll('.teacher-tag');
        tags.forEach(tag => {
            const langKey = currentLanguage === 'vi' ? 'data-vi' : 'data-en';
            if (tag.getAttribute(langKey)) {
                tag.textContent = tag.getAttribute(langKey);
            }
        });
    }

    // Simple string replacement for static templates
    static renderSimple(template, data) {
        let rendered = template;
        Object.keys(data).forEach(key => {
            const regex = new RegExp(`{{${key}}}`, 'g');
            rendered = rendered.replace(regex, data[key]);
        });
        return rendered;
    }
}

// Initialize card rendering functionality
const cardRenderer = new CardRenderer();

// Global function to update card language
function updateCardLanguage(currentLanguage) {
    if (typeof window.updateTeachersLanguage === 'function') {
        window.updateTeachersLanguage(currentLanguage);
    }
    if (typeof window.updateStaffLanguage === 'function') {
        window.updateStaffLanguage(currentLanguage);
    }
}

// Export for global use
window.CardRenderer = CardRenderer;
window.Utils = Utils;
window.cardRenderer = cardRenderer;
window.updateCardLanguage = updateCardLanguage;
