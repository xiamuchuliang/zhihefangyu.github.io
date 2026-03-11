// plantData.js - 10种常见植物标准化数据库
const plantDatabase = {
  "番茄": {
    "plantName": "番茄",
    "suitableEnvironment": {
      "temperature": "20-30℃",
      "humidity": "60-70%",
      "lightHours": "6-8小时"
    },
    "growthCycle": [
      {
        "stageName": "发芽期",
        "daysRange": "第1-14天",
        "description": "种子萌发，长出子叶。需要温暖（20-25℃）、湿润的土壤。",
        "keyTasks": ["保持土壤湿润但不积水", "提供充足光照"]
      },
      {
        "stageName": "幼苗期",
        "daysRange": "第15-55天",
        "description": "真叶生长，根系发育。可进行移栽。",
        "keyTasks": ["及时间苗", "每周施一次稀薄液肥", "保证每天6小时以上光照"]
      },
      {
        "stageName": "开花坐果期",
        "daysRange": "第56-85天",
        "description": "开始开花并形成果实。对水肥需求大。",
        "keyTasks": ["保证均匀浇水", "增施磷钾肥", "可人工辅助授粉", "疏花疏果（每穗留4-5果）"]
      },
      {
        "stageName": "成熟采收期",
        "daysRange": "第86-110天",
        "description": "果实逐渐变色成熟，糖分积累。",
        "keyTasks": ["减少浇水，提高果实甜度", "及时采收成熟果实", "注意防治鸟害和裂果"]
      }
    ],
    "symptoms": [
      {
        "symptom": "底部叶片逐渐变黄、脱落",
        "possibleProblems": ["缺镁或缺氮", "浇水过多导致根系问题", "早期疫病"],
        "solutions": ["喷施硫酸镁溶液（1-2%），每周一次", "检查土壤排水，避免过湿", "施用平衡型复合肥"],
        "healthScore": 80
      }
    ]
  },
  "黄瓜": {
    "plantName": "黄瓜",
    "suitableEnvironment": {
      "temperature": "22-28℃",
      "humidity": "70-85%",
      "lightHours": "6-8小时"
    },
    "growthCycle": [
      {
        "stageName": "发芽期",
        "daysRange": "第1-7天",
        "description": "种子吸胀萌发，露出胚根。喜温（25-30℃最佳）。",
        "keyTasks": ["保持土壤湿润温暖", "播后覆盖地膜保温"]
      },
      {
        "stageName": "幼苗期",
        "daysRange": "第8-37天",
        "description": "真叶展开，开始抽蔓。需充足光照。",
        "keyTasks": ["及时间苗、定苗", "搭设简易支架引导爬蔓", "施一次提苗肥"]
      },
      {
        "stageName": "开花结瓜期",
        "daysRange": "第38-97天",
        "description": "大量开花并连续结瓜。需大水大肥。",
        "keyTasks": ["每2-3天浇水一次", "每采收1-2次追肥一次", "及时采收嫩瓜（约花后7-10天）"]
      },
      {
        "stageName": "采收后期",
        "daysRange": "第98-127天",
        "description": "植株衰老，结瓜减少。",
        "keyTasks": ["减少浇水施肥", "清除老叶病叶，通风透光", "拉秧后土壤消毒"]
      }
    ],
    "symptoms": [
      {
        "symptom": "新生叶片皱缩、变小",
        "possibleProblems": ["病毒病（如黄瓜花叶病毒）", "螨虫危害"],
        "solutions": ["拔除病株，防虫网隔离", "喷洒阿维菌素等杀螨剂", "选用抗病品种"],
        "healthScore": 70
      }
    ]
  },
  "向日葵": {
    "plantName": "向日葵",
    "suitableEnvironment": {
      "temperature": "18-25℃",
      "humidity": "65-75%",
      "lightHours": "6-8小时（全日照）"
    },
    "growthCycle": [
      {
        "stageName": "播种出苗期",
        "daysRange": "第1-10天",
        "description": "种子萌发，子叶出土展开。耐低温，发芽适温8-10℃。",
        "keyTasks": ["播种深度2-3厘米", "土壤墒情要好"]
      },
      {
        "stageName": "幼苗期",
        "daysRange": "第11-35天",
        "description": "真叶生长，茎秆增粗。",
        "keyTasks": ["间苗定苗", "中耕除草", "适量浇水"]
      },
      {
        "stageName": "现蕾开花期",
        "daysRange": "第36-65天",
        "description": "花盘形成并开花，需水需肥量大。",
        "keyTasks": ["增加浇水", "追施磷钾肥", "人工辅助授粉"]
      },
      {
        "stageName": "成熟期",
        "daysRange": "第66-90天",
        "description": "籽粒饱满，花盘背面变黄。",
        "keyTasks": ["减少浇水", "及时采收", "防鸟害"]
      }
    ],
    "symptoms": [
      {
        "symptom": "花盘小，籽粒空瘪",
        "possibleProblems": ["授粉不良"],
        "solutions": ["人工辅助授粉"],
        "healthScore": 80
      }
    ]
  },
  "草莓": {
    "plantName": "草莓",
    "suitableEnvironment": {
      "temperature": "15-25℃",
      "humidity": "60-70%",
      "lightHours": "6-8小时"
    },
    "growthCycle": [
      {
        "stageName": "缓苗期",
        "daysRange": "第1-10天",
        "description": "定植后适应环境，新根开始生长。",
        "keyTasks": ["保持土壤湿润", "遮阴防晒"]
      },
      {
        "stageName": "营养生长期",
        "daysRange": "第11-40天",
        "description": "大量长叶，匍匐茎生长。",
        "keyTasks": ["摘除老叶", "控制匍匐茎", "追施氮肥"]
      },
      {
        "stageName": "开花结果期",
        "daysRange": "第41-90天",
        "description": "开花并结果，果实膨大。",
        "keyTasks": ["人工授粉", "增施磷钾肥", "及时采收"]
      },
      {
        "stageName": "休眠期",
        "daysRange": "第91-120天",
        "description": "生长缓慢，准备越冬或度夏。",
        "keyTasks": ["减少浇水", "清理枯叶", "覆盖保温"]
      }
    ],
    "symptoms": [
      {
        "symptom": "叶片出现白粉状斑点",
        "possibleProblems": ["白粉病"],
        "solutions": ["加强通风", "喷施硫磺粉剂"],
        "healthScore": 75
      }
    ]
  },
  "玉米": {
    "plantName": "玉米",
    "suitableEnvironment": {
      "temperature": "20-30℃",
      "humidity": "65-75%",
      "lightHours": "6-8小时（全日照）"
    },
    "growthCycle": [
      {
        "stageName": "发芽出苗期",
        "daysRange": "第1-10天",
        "description": "种子吸水萌发，胚芽出土。",
        "keyTasks": ["保持土壤湿润", "播种深度3-5厘米"]
      },
      {
        "stageName": "苗期",
        "daysRange": "第11-40天",
        "description": "根系和叶片快速生长。",
        "keyTasks": ["间苗定苗", "中耕除草", "追施苗肥"]
      },
      {
        "stageName": "拔节抽穗期",
        "daysRange": "第41-70天",
        "description": "茎秆快速伸长，雄穗抽出。",
        "keyTasks": ["大量浇水", "重施穗肥", "防治玉米螟"]
      },
      {
        "stageName": "灌浆成熟期",
        "daysRange": "第71-110天",
        "description": "籽粒灌浆饱满，逐渐成熟。",
        "keyTasks": ["保证水分供应", "防止倒伏", "适时收获"]
      }
    ],
    "symptoms": [
      {
        "symptom": "植株矮小，叶片发黄",
        "possibleProblems": ["缺氮"],
        "solutions": ["追施尿素", "增加氮肥用量"],
        "healthScore": 75
      }
    ]
  },
  "辣椒": {
    "plantName": "辣椒",
    "suitableEnvironment": {
      "temperature": "20-30℃",
      "humidity": "50-70%",
      "lightHours": "6-8小时"
    },
    "growthCycle": [
      {
        "stageName": "发芽期",
        "daysRange": "第1-12天",
        "description": "种子萌发，子叶出土。",
        "keyTasks": ["保持土壤湿润温暖", "温度保持25-30℃"]
      },
      {
        "stageName": "幼苗期",
        "daysRange": "第13-50天",
        "description": "真叶生长，花芽分化。",
        "keyTasks": ["控制浇水", "增加光照", "施薄肥"]
      },
      {
        "stageName": "开花结果期",
        "daysRange": "第51-100天",
        "description": "大量开花并连续结果。",
        "keyTasks": ["保证水肥供应", "及时采收", "防治病虫害"]
      },
      {
        "stageName": "盛果期",
        "daysRange": "第101-150天",
        "description": "持续结果，产量最高。",
        "keyTasks": ["重施磷钾肥", "保持土壤湿润", "摘除老叶"]
      }
    ],
    "symptoms": [
      {
        "symptom": "落花落果严重",
        "possibleProblems": ["温度过高", "水分不足"],
        "solutions": ["控制温度在25-28℃", "及时浇水"],
        "healthScore": 70
      }
    ]
  },
  "生菜": {
    "plantName": "生菜",
    "suitableEnvironment": {
      "temperature": "15-20℃",
      "humidity": "60-70%",
      "lightHours": "4-6小时（耐半阴）"
    },
    "growthCycle": [
      {
        "stageName": "发芽期",
        "daysRange": "第1-7天",
        "description": "种子萌发，子叶展开。",
        "keyTasks": ["保持土壤湿润", "温度控制在15-20℃"]
      },
      {
        "stageName": "幼苗期",
        "daysRange": "第8-25天",
        "description": "真叶生长，根系发育。",
        "keyTasks": ["间苗", "适量浇水", "施薄肥"]
      },
      {
        "stageName": "莲座期",
        "daysRange": "第26-45天",
        "description": "叶片快速生长，形成叶球。",
        "keyTasks": ["保证水分", "追施氮肥", "防治蚜虫"]
      },
      {
        "stageName": "成熟采收期",
        "daysRange": "第46-60天",
        "description": "叶球紧实，可以采收。",
        "keyTasks": ["及时采收", "避免抽薹", "清晨采收最佳"]
      }
    ],
    "symptoms": [
      {
        "symptom": "叶片边缘焦枯",
        "possibleProblems": ["缺钙", "高温"],
        "solutions": ["喷施硝酸钙", "降低温度"],
        "healthScore": 75
      }
    ]
  },
  "玫瑰": {
    "plantName": "玫瑰",
    "suitableEnvironment": {
      "temperature": "15-25℃",
      "humidity": "50-70%",
      "lightHours": "6-8小时"
    },
    "growthCycle": [
      {
        "stageName": "萌芽展叶期",
        "daysRange": "春季（约第1-20天）",
        "description": "冬芽萌动，新梢抽出。",
        "keyTasks": ["浇透返青水", "施春肥", "修剪枯枝"]
      },
      {
        "stageName": "现蕾开花期",
        "daysRange": "第21-50天",
        "description": "花蕾形成并开放。",
        "keyTasks": ["增施磷钾肥", "保证水分", "防治蚜虫"]
      },
      {
        "stageName": "生长旺盛期",
        "daysRange": "第51-120天",
        "description": "持续开花，新枝生长。",
        "keyTasks": ["及时修剪残花", "追肥", "防治病虫害"]
      },
      {
        "stageName": "休眠期",
        "daysRange": "冬季（约第121-180天）",
        "description": "生长停止，进入休眠。",
        "keyTasks": ["重剪", "施基肥", "防寒保护"]
      }
    ],
    "symptoms": [
      {
        "symptom": "叶片出现黑斑",
        "possibleProblems": ["黑斑病"],
        "solutions": ["摘除病叶", "喷施杀菌剂", "改善通风"],
        "healthScore": 70
      }
    ]
  },
  "多肉植物": {
    "plantName": "多肉植物",
    "suitableEnvironment": {
      "temperature": "15-28℃",
      "humidity": "40-60%",
      "lightHours": "4-6小时（喜光但忌暴晒）"
    },
    "growthCycle": [
      {
        "stageName": "缓苗服盆期",
        "daysRange": "上盆后第1-15天",
        "description": "新购或换盆后，根系适应新环境。",
        "keyTasks": ["散光处养护", "少量浇水", "避免施肥"]
      },
      {
        "stageName": "生长期",
        "daysRange": "春秋季（约第16-90天）",
        "description": "快速生长，叶片饱满。",
        "keyTasks": ["充足光照", "适量浇水", "每月施薄肥"]
      },
      {
        "stageName": "休眠期",
        "daysRange": "夏冬季（约第91-180天）",
        "description": "生长缓慢或停止。",
        "keyTasks": ["控制浇水", "停止施肥", "注意通风"]
      },
      {
        "stageName": "繁殖期",
        "daysRange": "春季（约第181-210天）",
        "description": "适合叶插、分株繁殖。",
        "keyTasks": ["选择健康叶片", "保持干燥", "等待生根"]
      }
    ],
    "symptoms": [
      {
        "symptom": "叶片化水",
        "possibleProblems": ["浇水过多", "通风不良"],
        "solutions": ["立即停止浇水", "加强通风", "摘除化水叶片"],
        "healthScore": 65
      }
    ]
  },
  "栀子花": {
    "plantName": "栀子花",
    "suitableEnvironment": {
      "temperature": "18-25℃",
      "humidity": "60-80%",
      "lightHours": "4-6小时（喜散射光）"
    },
    "growthCycle": [
      {
        "stageName": "萌芽抽梢期",
        "daysRange": "春季（约第1-30天）",
        "description": "新芽萌发，新枝快速生长。",
        "keyTasks": ["浇透水", "施春肥", "修剪整形"]
      },
      {
        "stageName": "现蕾开花期",
        "daysRange": "第31-80天",
        "description": "花蕾形成并开放，香气浓郁。",
        "keyTasks": ["增施磷钾肥", "保持土壤湿润", "喷水增湿"]
      },
      {
        "stageName": "花后生长期",
        "daysRange": "第81-150天",
        "description": "花后恢复生长，积累养分。",
        "keyTasks": ["修剪残花", "追施复合肥", "防治病虫害"]
      },
      {
        "stageName": "休眠期",
        "daysRange": "冬季（约第151-210天）",
        "description": "生长缓慢，准备越冬。",
        "keyTasks": ["减少浇水", "停止施肥", "室内越冬"]
      }
    ],
    "symptoms": [
      {
        "symptom": "新叶黄化",
        "possibleProblems": ["缺铁", "土壤碱性"],
        "solutions": ["浇灌硫酸亚铁", "使用酸性土壤", "叶面喷施铁肥"],
        "healthScore": 70
      }
    ]
  }
};