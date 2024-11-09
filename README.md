# mx-friends
适用于mix-space的[Friend-Circle-Lite](https://github.com/willow-god/Friend-Circle-Lite)的json数据生成



## 使用步骤 （api版本）
1. 把你的后端域名替换掉我的后端域名
2. 目录下执行命令`npm install`,`node api.js`
3. 提示friend.json文件已生成后，把`friend.json`复制进你的前端`public`文件夹内，然后push部
4. 后续步骤就和原项目的步骤一样了，参考原项目进行后端部署即可


## 使用步骤 （手动获取友链版本）
1. 克隆本仓库至本地
2. 前往你的mx后端友链api，比如https://[你的域名]/api/v2/links，并把返回的内容复制进`data/link.json`（替换掉里面原本有的内容）
3. 目录下执行命令`npm install`,`node index.js`
4. 提示friend.json文件已生成后，把`friend.json`复制进你的前端`public`文件夹内，然后push部署
5. 后续步骤就和原项目的步骤一样了，参考原项目进行后端部署即可



## 待办
[x] 改为直接从api获取数据,省去步骤2
[ ] 能否改为mx云函数?，省时省力