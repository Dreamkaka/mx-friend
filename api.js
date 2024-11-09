const axios = require('axios');
const fs = require('fs');

const blacklist = ["友站名称1", "友站名称2", "友站名称3"]; // 黑名单
// const apiToken = 'your_api_token_here'; 


async function fetchLinks(page) {
  try {
    const response = await axios.get(`https://backend.xiaohan-kaka.me/api/v2/links?page=${page}`, {
      headers: {
   //     'Authorization': `Bearer ${apiToken}`,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
      }
    });
    return response.data;
  } catch (error) {
    console.error(`请求第 ${page} 页失败:`, error);
    throw error;
  }
}

async function main() {
  try {
    // 获取第一页和第二页的数据
    const [page1Data, page2Data] = await Promise.all([
      fetchLinks(1),
      fetchLinks(2)
    ]);

    // 提取 data 数组中的链接信息
    let friends = [];

    [page1Data, page2Data].forEach(data => {
      data.data.forEach((entry) => {
        if (!blacklist.includes(entry.name)) {
          friends.push({
            name: entry.name,
            link: entry.url,
            avatar: entry.avatar
          });
        }
      });
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
  } catch (error) {
    console.error('处理请求失败:', error);
  }
}

main();