module.exports = { generateSlug };

function generateSlug(title) {
    // Write your code inside this function only.
    let slug = title.toLowerCase();
    
    slug = slug.replace(/\s+/g,'-');
    slug += '.com';
    return slug;
}
