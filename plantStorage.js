// JavaScript source code
// plantStorage.js - 植物数据本地存储的相关函数

// 1. 存数据：此函数可将数据存入LocalStorage（只用运行一次），实现初始化
function savePlantData() {
    if (!localStorage.getItem('plantData')) {
        localStorage.setItem('plantData', JSON.stringify(plantDatabase));
        console.log('植物数据库已存入本地存储（LocalStorage）');
    } else {
        console.log('数据已存在，无需重复存储');
    }
}

// 2.取数据： 此函数可获取单种植物的完整数据，需要特定数据时，可再从中提取需要的字段
function getPlantData(plantName) {
    const allData = JSON.parse(localStorage.getItem('plantData'));
    
    if (!allData) {
        console.error('本地存储中未找到植物数据，请先调用 savePlantData()');
        return null;
    }
    
    if (!allData[plantName]) {
        console.error(`未找到名为 "${plantName}" 的植物数据`);
        return null;
    }
    
    return allData[plantName];
}

// 3. 获取所有植物名称列表的函数（用于下拉菜单）
function getAllPlantNames() {
    const allData = JSON.parse(localStorage.getItem('plantData'));
    
    if (!allData) {
        console.error('本地存储中未找到植物数据，请先调用 savePlantData()');
        return [];
    }
    
    return Object.keys(allData); // 返回 ["番茄", "黄瓜", "向日葵", ...]
}

/*
============================================
  函数使用说明与示例
============================================

【1】初始化，存数据（页面加载时调用一次）
savePlantData();

【2】获取单个植物的全部信息
const 植物信息 = getPlantData("多肉植物");

【3】获取植物的某一个具体信息（举了2个例子）
const 植物信息 = getPlantData("多肉植物");
if (植物信息) {
  // 1. 获取植物名称
  console.log("植物名称：", 植物信息.plantName);

  // 2. 获取适宜温度
  console.log("适宜温度：", 植物信息.suitableEnvironment.temperature);
}

【4】获取所有植物名称（用于下拉菜单）
const 植物列表 = getAllPlantNames();
console.log("所有植物名称：", 植物列表);

============================================
*/
