Object.defineProperty(exports, "__esModule", { value: true });
exports.idToWord = exports.extractSlugFromDirectoryName = exports.extractPrettyDateFromDirectoryName = exports.getDefaultPageData = void 0;
var date_fns_1 = require("date-fns");
var PAGE_DATE_PATTERN = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
var SLUG_PATTERN = /_[a-z0-9-]*/;
var extractTitleFromSlug = function (slug) {
    var slugWithoutDashes = idToWord(slug);
    return slugWithoutDashes.replace(/\//g, '');
};
function getDefaultPageData(directoryName) {
    var slug = extractSlugFromDirectoryName(directoryName);
    return {
        slug: slug,
        title: extractTitleFromSlug(slug),
        titleIntl: slug.replace(/\//g, ''),
        date: extractPrettyDateFromDirectoryName(directoryName)
    };
}
exports.getDefaultPageData = getDefaultPageData;
function extractPrettyDateFromDirectoryName(directoryName) {
    var extractedDate = directoryName.substring(0, 10);
    var dateRegex = new RegExp(PAGE_DATE_PATTERN);
    var isDateStringValid = dateRegex.test(extractedDate);
    if (!isDateStringValid)
        throw new Error("string representing date is not valid,\n\n\t\tyours is " + extractedDate);
    var dateISO = date_fns_1.parseISO(extractedDate);
    return date_fns_1.format(dateISO, 'MMMM dd yyyy');
}
exports.extractPrettyDateFromDirectoryName = extractPrettyDateFromDirectoryName;
function extractSlugFromDirectoryName(directoryName) {
    var slugRaw = directoryName.substring(10, directoryName.length);
    var slugRegex = new RegExp(SLUG_PATTERN);
    var isValidSlug = slugRegex.test(slugRaw);
    if (!isValidSlug)
        throw new Error("Slug pattern should look like this: _slug or _slug-slug-323.\n\t\t\tNo uppercase letters or special characters. Yours is " + slugRaw);
    var slugWithoutUnderScore = slugRaw.replace(/_/g, '');
    return "/" + slugWithoutUnderScore;
}
exports.extractSlugFromDirectoryName = extractSlugFromDirectoryName;
function idToWord(id) {
    return id.replace(/-/g, ' ');
}
exports.idToWord = idToWord;
