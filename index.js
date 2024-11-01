const fs = require('fs');

const blacklist = ["友站名称1", "友站名称2", "友站名称3"]; // 黑名单

// 读取并解析 JSON 文件
const data = JSON.parse(fs.readFileSync('data/link.json').toString());

// 提取 data 数组中的链接信息
let friends = [];

data.data.forEach((entry) => {
  if (!blacklist.includes(entry.name)) {
    friends.push({
      name: entry.name,
      link: entry.url,
      avatar: entry.avatar
    });
  }
});

// 构建 JSON 数据
const friendData = {
  friends: friends.map(item => {
    return [item.name, item.link, item.avatar];
  })
};

// 转换为 JSON 字符串
const friendJSON = JSON.stringify(friendData, null, 2);

// 写入 friend.json 文件
fs.writeFileSync('./friend.json', friendJSON);

console.log('friend.json 文件已生成。');