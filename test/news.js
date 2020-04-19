let str = `
<a href="/s?id=1599411456724033124&wfr=pc&fr=idx_top" target="_blank">
优必选完成8.2亿美元C轮融资，估值50亿美元，我们专访了CEO周剑
</a>
<a href="/s?id=1599503942709331354&wfr=pc&fr=idx_top" target="_blank">
余额可能不限额了，差评联合第一财经周刊发布主题讨论
</a>
`;
let reg = /<a href="(\/s\?id=[^"]+)".+>([\s\S]+?)<\/a>/;
let result = str.match(reg);
console.log(result);


let str = `
<a href="http://politics.people.com.cn/n1/2020/0417/c1001-31677780.html" target="_blank" mon="r=1"><b>战“疫”有方 习近平指引向科学要方法</b></a>
`;
let reg = /<a href="([^"]+)".+>(.+)<\/a>/;
let result = str.match(reg);
console.log(result);
