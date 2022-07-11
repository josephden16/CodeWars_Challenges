/**
 * Write a function that when given a URL as a string, parses out just
 * the domain name and returns it as a string. For example:
 */

/**
 * domainName("http://github.com/carbonfive/raygun") == "github"
  domainName("http://www.zombie-bites.com") == "zombie-bites"
  domainName("https://www.cnet.com") == "cnet"
 */



function domainName(url) {
  //your code here
  const DOMAIN_NAME_REGEX = /https:\/\/(www)?\.\w+/;
  const all = url.match(DOMAIN_NAME_REGEX);
  console.log(all);
}

domainName("http://www.zombie-bites.com");
