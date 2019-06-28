Object.defineProperty(exports, "__esModule", { value: true });
var PAGE_DATE_PATTERN = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
var SLUG_PATTERN = /_[a-z0-9-]*/;
function getDefaultPageData(dir) {
    var slug = extractSlugFromString(dir);
    return {
        slug: slug,
        title: idToWord(slug),
        date: extractDashedDayDateFromString(dir)
    };
}
exports.getDefaultPageData = getDefaultPageData;
function extractDashedDayDateFromString(pageName) {
    var extractedDate = pageName.substring(0, 10);
    var dateRegex = new RegExp(PAGE_DATE_PATTERN);
    var isDateStringValid = dateRegex.test(extractedDate);
    if (!isDateStringValid)
        throw new Error("string representing date is not valid,\n\n\t\tyours is " + extractedDate);
    return extractedDate;
}
exports.extractDashedDayDateFromString = extractDashedDayDateFromString;
function extractSlugFromString(pageName) {
    var slug = pageName.substring(10, pageName.length);
    var slugRegex = new RegExp(SLUG_PATTERN);
    var isValidSlug = slugRegex.test(slug);
    if (!isValidSlug)
        throw new Error("Slug pattern should look like this: _slug or _slug-slug-323. \n\t\t\tNo uppercase letters or special characters. Yours is " + slug);
    return slug.substring(1);
}
exports.extractSlugFromString = extractSlugFromString;
function idToWord(id) {
    return id.replace(/-/g, ' ');
}
exports.idToWord = idToWord;
