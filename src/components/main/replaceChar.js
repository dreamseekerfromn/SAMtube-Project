export default function replaceChar(str){
    str = str.replaceAll("&quot;", '"');
    str = str.replaceAll("&#39;", "'");
    return str;
}