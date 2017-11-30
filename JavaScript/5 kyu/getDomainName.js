// Extract the domain name from a URL

// first attempt using no regex

function domainName(url){
  var domain;
  if (url.indexOf("://") > -1) {
    domain = url.split('/')[2] 
    console.log(domain)
  } else {
    domain = url.split('/')[0]
    console.log(domain)
  } 
  return domain
}

// final result 

function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};


// other fun solutions

function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

function domainName(url){
  return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
}



console.log(domainName("https://www.cnet.com"))
console.log(domainName("https://cnet.com"))
console.log(domainName("cnet.com"))