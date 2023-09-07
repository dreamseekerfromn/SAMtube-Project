/**
 * replaceChar()
 * ------------------
 * will replace &quot; and &#39; to double & single quote.
 * @param {string} str - a string that will be replaced
 * @returns {string} - a string w/ replaced characters.
 */
export default function replaceChar(str){
    str = str.replaceAll("&quot;", '"');
    str = str.replaceAll("&#39;", "'");
    return str;
}