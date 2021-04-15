var axios = require('axios');
var data = JSON.stringify({"operationName":"SearchRootQuery","variables":{"first":10,"sort":"newest","text":"wearing a mask","filterQuery":"","sectionFacetFilterQuery":"","typeFacetFilterQuery":"","sectionFacetActive":false,"typeFacetActive":false,"cursor":"YXJyYXljb25uZWN0aW9uOjI5"},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"b117ee74b90b0c02b406304e5051121e9c3e23833eb98a8738320c15dc1e98a6"}}});

var config = {
  method: 'post',
  url: 'https://samizdat-graphql.nytimes.com/graphql/v2',
  headers: { 
    'authority': 'samizdat-graphql.nytimes.com', 
    'pragma': 'no-cache', 
    'cache-control': 'no-cache', 
    'accept': '*/*', 
    'nyt-app-version': '0.0.5', 
    'nyt-token': 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs+/oUCTBmD/cLdmcecrnBMHiU/pxQCn2DDyaPKUOXxi4p0uUSZQzsuq1pJ1m5z1i0YGPd1U1OeGHAChWtqoxC7bFMCXcwnE1oyui9G1uobgpm1GdhtwkR7ta7akVTcsF8zxiXx7DNXIPd2nIJFH83rmkZueKrC4JVaNzjvD+Z03piLn5bHWU6+w+rA+kyJtGgZNTXKyPh6EC6o5N+rknNMG5+CdTq35p8f99WjFawSvYgP9V64kgckbTbtdJ6YhVP58TnuYgr12urtwnIqWP9KSJ1e5vmgf3tunMqWNm6+AnsqNj8mCLdCuc5cEB74CwUeQcP2HQQmbCddBy2y0mEwIDAQAB', 
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36', 
    'nyt-app-type': 'project-vi', 
    'content-type': 'application/json', 
    'origin': 'https://www.nytimes.com', 
    'sec-fetch-site': 'same-site', 
    'sec-fetch-mode': 'cors', 
    'sec-fetch-dest': 'empty', 
    'referer': 'https://www.nytimes.com/', 
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,fr;q=0.7,zh-TW;q=0.6', 
    'cookie': 'nyt-a=sLGPnAig_aJ0z15KdgGClR; nyt-gdpr=0; nyt-purr=cfhhcfhhhuk; nyt-m=46136FEC0CE376C1477EDD2DDF9344E0&ira=i.0&uuid=s.6c3e39dd-4674-43e5-b67c-b6771bb5587c&vp=i.0&imu=i.1&igd=i.0&igf=i.0&igu=i.1&ica=i.0&ier=i.0&ifv=i.0&e=i.1612170000&er=i.1611049516&iir=i.0&fv=i.0&g=i.0&rc=i.0&vr=l.4.0.0.0.0&pr=l.4.0.0.0.0&t=i.1&n=i.2&iue=i.0&iub=i.0&iru=i.1&v=i.0&ft=i.0&cav=i.0&iga=i.0&prt=i.0&ird=i.0&imv=i.0&s=s.core; b2b_cig_opt=%7B%22isCorpUser%22%3Afalse%7D; edu_cig_opt=%7B%22isEduUser%22%3Afalse%7D; purr-cache=<K0<r<C_<G_<S0; _gcl_au=1.1.298012811.1611049517; walley=GA1.2.381738070.1611049518; walley_gid=GA1.2.531364273.1611049518; iter_id=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOiI2MDA2YWEzMGQ1ZDJkNDAwMDEyMmI1ZjIiLCJjb21wYW55X2lkIjoiNWMwOThiM2QxNjU0YzEwMDAxMmM2OGY5IiwiaWF0IjoxNjExMDQ5NTIwfQ.oSdUnBUJdRJnJ7ctGcWQj09sqUkukJH2NWHncRNPOsk; nyt-jkidd=uid=0&lastRequest=1611049536784&activeDays=%5B0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C1%5D&adv=1&a7dv=1&a14dv=1&a21dv=1&lastKnownType=anon; __gads=ID=3d8f0c70e3d7acec:T=1611049822:S=ALNI_MYRvGwjnee4IKw2aT4WTZyQ-eAoqw'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
