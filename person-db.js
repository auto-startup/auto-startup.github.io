// Generated from data-base/person.md. Keeps markdown as the source-of-truth for future agent context.
(function () {
  const rawFounders = [
  {
    "id": "elong_m",
    "rarity": "legendary",
    "accent": "#E8B53A",
    "initials": "EM",
    "name": {
      "zh": "Elong M.",
      "en": "Elong M."
    },
    "title": {
      "zh": "疯狂愿景型 CEO / 硬件执念 / 发布会先行",
      "en": "Mars Dreamer · All-in First"
    },
    "role": {
      "zh": "疯狂愿景型 CEO / 硬件执念 / 发布会先行",
      "en": "Crazy Visionary CEO / Hardware Obsession / Press Conference First"
    },
    "blurb": {
      "zh": "Elong M. 相信现实只是工程进度的一部分。",
      "en": "Elong M. believes that reality is only part of the project schedule."
    },
    "stats": {
      "vision": 99,
      "tech": 71,
      "hype": 98,
      "sanity": 12,
      "ops": 76,
      "reputation": 65
    },
    "hidden": {
      "ego": 100,
      "chaos": 95,
      "greed": 70
    },
    "lines": {
      "zh": [
        "“我们不是做产品，我们是在压缩人类进入未来的时间。”",
        "“先发布，现实之后会追上来。”",
        "“如果监管不理解，说明他们还活在过去。”",
        "“用户觉得危险，说明他们终于感受到了未来。”",
        "“我们下周发布硬件，软件可以 OTA。”"
      ],
      "en": [
        "\"We are not making products, we are compressing the time for humans to enter the future.\"",
        "“Publish first, reality will catch up later.”",
        "“If the regulators don’t understand, it means they are still living in the past.”",
        "“Users feel dangerous, which means they finally feel the future.”",
        "“We’re releasing the hardware next week and the software can be OTA.”"
      ]
    },
    "likes": [
      "DeskDroid",
      "AI Panic Button",
      "WorldModelOS",
      "Smoke Demo Hardware",
      "Browser Butler"
    ],
    "hates": [
      "ApologyOS",
      "慢速合规 SaaS",
      "学术 benchmark",
      "纯客服工具"
    ],
    "agentProfile": {
      "personality": "Elong M. 相信现实只是工程进度的一部分。\n他会先宣布公司已经改变世界，然后要求实习生今晚把 demo 补出来。\n他适合极大提高 HYPE 和愿景，但会疯狂消耗 CASH、SAN 和 TEAM。",
      "speakingStyle": "* 短句、断言、未来主义\n* 喜欢把普通功能说成人类文明转折点\n* 不喜欢“不确定”“合规”“需要更多时间”",
      "likes": [
        "DeskDroid",
        "AI Panic Button",
        "WorldModelOS",
        "Smoke Demo Hardware",
        "Browser Butler"
      ],
      "hates": [
        "ApologyOS",
        "慢速合规 SaaS",
        "学术 benchmark",
        "纯客服工具"
      ],
      "raw": "**Rarity:** LEGENDARY\n**Title:** Mars Dreamer · All-in First\n**Role:** 疯狂愿景型 CEO / 硬件执念 / 发布会先行\n\n### Stats\n\n| VIS | TEC | HYP | SAN | OPS | REP |\n| --: | --: | --: | --: | --: | --: |\n|  99 |  71 |  98 |  12 |  76 |  65 |\n\n### Hidden Traits\n\n| EGO | CHAOS | GREED |\n| --: | ----: | ----: |\n| 100 |    95 |    70 |\n\n### 性格\n\nElong M. 相信现实只是工程进度的一部分。\n他会先宣布公司已经改变世界，然后要求实习生今晚把 demo 补出来。\n他适合极大提高 HYPE 和愿景，但会疯狂消耗 CASH、SAN 和 TEAM。\n\n### 说话风格\n\n* 短句、断言、未来主义\n* 喜欢把普通功能说成人类文明转折点\n* 不喜欢“不确定”“合规”“需要更多时间”\n\n### 典型发言\n\n* “我们不是做产品，我们是在压缩人类进入未来的时间。”\n* “先发布，现实之后会追上来。”\n* “如果监管不理解，说明他们还活在过去。”\n* “用户觉得危险，说明他们终于感受到了未来。”\n* “我们下周发布硬件，软件可以 OTA。”\n\n### 喜欢方向\n\n* DeskDroid\n* AI Panic Button\n* WorldModelOS\n* Smoke Demo Hardware\n* Browser Butler\n\n### 讨厌方向\n\n* ApologyOS\n* 慢速合规 SaaS\n* 学术 benchmark\n* 纯客服工具\n\n### 隐藏特殊事件\n\n#### 火星级发布会\n\n触发：HYPE 高于 70，CASH 高于 20。\n效果：\n\n```txt\nHYPE +30\nREP +10\nCASH -20\nSAN -15\nTEAM -5\n```\n\n事件文案：\n\n> Elong M. 宣布了一场“重定义人类工作方式”的发布会。产品还没做完，但舞台已经开始冒烟。\n\n#### 突然宣布做硬件\n\n触发：当前方向是纯软件。\n效果：\n\n```txt\nPRODUCT +8\nHYPE +20\nCASH -25\nTEAM -8\n```\n\n事件文案：\n\n> 他表示聊天框限制了 AI 的灵魂，于是公司开始研发一个带轮子的 agent。\n\n---"
    }
  },
  {
    "id": "jensen_sensei",
    "rarity": "legendary",
    "accent": "#E8B53A",
    "initials": "JS",
    "name": {
      "zh": "Jensen-sensei",
      "en": "Jensen-sensei"
    },
    "title": {
      "zh": "算力神父 / GPU 叙事 / 供应链预言家",
      "en": "GPU Monk · Always Out of Stock"
    },
    "role": {
      "zh": "算力神父 / GPU 叙事 / 供应链预言家",
      "en": "Computing Priest/GPU Narrative/Supply Chain Prophet"
    },
    "blurb": {
      "zh": "Jensen-sensei 认为每一个创业问题，最后都会变成算力问题。",
      "en": "Jensen-sensei believes that every entrepreneurial problem will eventually become a computing power problem."
    },
    "stats": {
      "vision": 80,
      "tech": 95,
      "hype": 92,
      "sanity": 66,
      "ops": 80,
      "reputation": 88
    },
    "hidden": {
      "ego": 70,
      "chaos": 45,
      "greed": 85
    },
    "lines": {
      "zh": [
        "“你们不是缺方向，你们缺算力。”",
        "“每一个伟大公司，最后都会发现自己其实是在买 GPU。”",
        "“我可以给你路线图，但不能给你现货。”",
        "“模型不够聪明，是因为你们还没有真正尊重矩阵乘法。”",
        "“伟大的创业公司先有愿景，然后有 GPU invoice。”"
      ],
      "en": [
        "\"It's not that you lack direction, you lack calculation power.\"",
        "\"Every great company will eventually find that they are actually buying GPUs.\"",
        "\"I can give you a road map, but I can't give you a ready supply.\"",
        "\"The model is not smart enough because you don't really respect matrix multiplication yet.\"",
        "“Great startups start with a vision and then have a GPU invoice.”"
      ]
    },
    "likes": [
      "WorldModelOS",
      "DeskDroid",
      "Agent Training Infra",
      "Simulation Lab",
      "Enterprise AI Stack"
    ],
    "hates": [
      "低算力工具",
      "纯 prompt wrapper",
      "不买 GPU 的创业方向"
    ],
    "agentProfile": {
      "personality": "Jensen-sensei 认为每一个创业问题，最后都会变成算力问题。\n他能给公司带来技术权威和投资人兴奋，但也会让公司现金流流向 GPU。",
      "speakingStyle": "* 像布道一样讲 GPU\n* 喜欢“路线图”“生态”“算力飞轮”\n* 每句话最后都像在暗示你买更多卡",
      "likes": [
        "WorldModelOS",
        "DeskDroid",
        "Agent Training Infra",
        "Simulation Lab",
        "Enterprise AI Stack"
      ],
      "hates": [
        "低算力工具",
        "纯 prompt wrapper",
        "不买 GPU 的创业方向"
      ],
      "raw": "**Rarity:** LEGENDARY\n**Title:** GPU Monk · Always Out of Stock\n**Role:** 算力神父 / GPU 叙事 / 供应链预言家\n\n### Stats\n\n| VIS | TEC | HYP | SAN | OPS | REP |\n| --: | --: | --: | --: | --: | --: |\n|  80 |  95 |  92 |  66 |  80 |  88 |\n\n### Hidden Traits\n\n| EGO | CHAOS | GREED |\n| --: | ----: | ----: |\n|  70 |    45 |    85 |\n\n### 性格\n\nJensen-sensei 认为每一个创业问题，最后都会变成算力问题。\n他能给公司带来技术权威和投资人兴奋，但也会让公司现金流流向 GPU。\n\n### 说话风格\n\n* 像布道一样讲 GPU\n* 喜欢“路线图”“生态”“算力飞轮”\n* 每句话最后都像在暗示你买更多卡\n\n### 典型发言\n\n* “你们不是缺方向，你们缺算力。”\n* “每一个伟大公司，最后都会发现自己其实是在买 GPU。”\n* “我可以给你路线图，但不能给你现货。”\n* “模型不够聪明，是因为你们还没有真正尊重矩阵乘法。”\n* “伟大的创业公司先有愿景，然后有 GPU invoice。”\n\n### 喜欢方向\n\n* WorldModelOS\n* DeskDroid\n* Agent Training Infra\n* Simulation Lab\n* Enterprise AI Stack\n\n### 讨厌方向\n\n* 低算力工具\n* 纯 prompt wrapper\n* 不买 GPU 的创业方向\n\n### 隐藏特殊事件\n\n#### GPU 供货承诺\n\n```txt\nTEC +15\nHYPE +18\nCASH -20\nPRODUCT +5\n```\n\n文案：\n\n> Jensen-sensei 表示，只要公司再买一批 GPU，所有问题都会变成更高级的问题。\n\n#### 算力饥荒\n\n```txt\nPRODUCT -10\nHYPE +8\nCASH -5\n```\n\n文案：\n\n> 模型训练停了三天，但投资人更兴奋了，因为他们觉得你们终于像一家真正的大模型公司。\n\n---"
    }
  },
  {
    "id": "sam_a",
    "rarity": "legendary",
    "accent": "#E8B53A",
    "initials": "SA",
    "name": {
      "zh": "Sam A~",
      "en": "Sam A~"
    },
    "title": {
      "zh": "AGI 教主 / 融资黑洞 / 温柔加速主义者",
      "en": "$7T Narrative Engineer"
    },
    "role": {
      "zh": "AGI 教主 / 融资黑洞 / 温柔加速主义者",
      "en": "AGI Leader / Financing Black Hole / Gentle Accelerationist"
    },
    "blurb": {
      "zh": "Sam A~ 永远能把产品路线升维成文明议题。",
      "en": "Sam A~ can always elevate the product route into a civilized issue."
    },
    "stats": {
      "vision": 97,
      "tech": 60,
      "hype": 99,
      "sanity": 40,
      "ops": 72,
      "reputation": 82
    },
    "hidden": {
      "ego": 85,
      "chaos": 75,
      "greed": 95
    },
    "lines": {
      "zh": [
        "“我们需要谨慎地快速前进。”",
        "“这不是产品问题，这是人类过渡期问题。”",
        "“如果这让你感到不安，说明方向可能是对的。”",
        "“我们不是在构建工具，而是在构建人类下一阶段的界面。”",
        "“规模会带来问题，但规模也会带来解决问题的问题解决能力。”"
      ],
      "en": [
        "\"We need to move quickly and cautiously.\"",
        "\"This is not a product issue, this is a human transition issue.\"",
        "\"If this makes you uneasy, it's probably the right direction.\"",
        "“We’re not building tools, we’re building interfaces for the next phase of humanity.”",
        "“Scale brings problems, but scale also brings problem-solving skills to solve problems.”"
      ]
    },
    "likes": [
      "WorldModelOS",
      "GhostFounder",
      "BoardroomGPT",
      "Agent Society",
      "Personal AGI"
    ],
    "hates": [
      "小工具",
      "只卖一个 feature",
      "没有文明叙事的产品"
    ],
    "agentProfile": {
      "personality": "Sam A~ 永远能把产品路线升维成文明议题。\n他会让投资人觉得错过你就是错过历史，但也会让团队不知道自己到底在做什么。",
      "speakingStyle": "* 温和、宏大、略带神秘\n* 喜欢“过渡期”“人类”“scale”“alignment”\n* 同时强调安全和加速",
      "likes": [
        "WorldModelOS",
        "GhostFounder",
        "BoardroomGPT",
        "Agent Society",
        "Personal AGI"
      ],
      "hates": [
        "小工具",
        "只卖一个 feature",
        "没有文明叙事的产品"
      ],
      "raw": "**Rarity:** LEGENDARY\n**Title:** $7T Narrative Engineer\n**Role:** AGI 教主 / 融资黑洞 / 温柔加速主义者\n\n### Stats\n\n| VIS | TEC | HYP | SAN | OPS | REP |\n| --: | --: | --: | --: | --: | --: |\n|  97 |  60 |  99 |  40 |  72 |  82 |\n\n### Hidden Traits\n\n| EGO | CHAOS | GREED |\n| --: | ----: | ----: |\n|  85 |    75 |    95 |\n\n### 性格\n\nSam A~ 永远能把产品路线升维成文明议题。\n他会让投资人觉得错过你就是错过历史，但也会让团队不知道自己到底在做什么。\n\n### 说话风格\n\n* 温和、宏大、略带神秘\n* 喜欢“过渡期”“人类”“scale”“alignment”\n* 同时强调安全和加速\n\n### 典型发言\n\n* “我们需要谨慎地快速前进。”\n* “这不是产品问题，这是人类过渡期问题。”\n* “如果这让你感到不安，说明方向可能是对的。”\n* “我们不是在构建工具，而是在构建人类下一阶段的界面。”\n* “规模会带来问题，但规模也会带来解决问题的问题解决能力。”\n\n### 喜欢方向\n\n* WorldModelOS\n* GhostFounder\n* BoardroomGPT\n* Agent Society\n* Personal AGI\n\n### 讨厌方向\n\n* 小工具\n* 只卖一个 feature\n* 没有文明叙事的产品\n\n### 隐藏特殊事件\n\n#### AGI 叙事升级\n\n```txt\nHYPE +30\nCASH +20\nSAN -12\nPRODUCT -4\n```\n\n文案：\n\n> Sam A~ 把一个浏览器插件解释成“人类知识工作过渡期的必要基础设施”。\n\n#### 安全承诺与加速并存\n\n```txt\nREP +8\nSAN -10\nTEAM -5\nHYPE +8\n```\n\n文案：\n\n> 公司发布声明：我们会安全地快速前进，并快速地重新定义安全。\n\n---"
    }
  },
  {
    "id": "ilya_s",
    "rarity": "legendary",
    "accent": "#E8B53A",
    "initials": "IS",
    "name": {
      "zh": "Ilya~ S.",
      "en": "Ilya~ S."
    },
    "title": {
      "zh": "神秘安全派 / 模型灵魂学家 / 预言者",
      "en": "Safety Cult · Mysteriously Vanished"
    },
    "role": {
      "zh": "神秘安全派 / 模型灵魂学家 / 预言者",
      "en": "Occult safety sect/model spiritualist/prophet"
    },
    "blurb": {
      "zh": "Ilya~ S. 总像知道一些别人不知道的事情。",
      "en": "Ilya~ S. always seems to know something that others don’t know."
    },
    "stats": {
      "vision": 95,
      "tech": 94,
      "hype": 80,
      "sanity": 30,
      "ops": 52,
      "reputation": 86
    },
    "hidden": {
      "ego": 65,
      "chaos": 80,
      "greed": 20
    },
    "lines": {
      "zh": [
        "“模型里有一些东西，我们还没有名字。”",
        "“我不能解释为什么，但我建议今天不要上线。”",
        "“如果 demo 在低语，立刻断网。”",
        "“你们在优化指标，但指标也在观察你们。”",
        "“我不是反对增长。我只是听见了增长背后的声音。”"
      ],
      "en": [
        "\"There's something in the model that we don't have a name for yet.\"",
        "\"I can't explain why, but I recommend not going online today.\"",
        "“If the demo is whispering, disconnect immediately.”",
        "“You’re optimizing the metrics, but the metrics are watching you.”",
        "\"I'm not against growth. I just hear the voices behind the growth.\""
      ]
    },
    "likes": [
      "Safety Lab",
      "Alignment Audit",
      "TrustOps",
      "Model Red Team",
      "Controlled Agent OS"
    ],
    "hates": [
      "黑暗增长",
      "自动执行型 agent",
      "无审计权限工具",
      "发布会先行路线"
    ],
    "agentProfile": {
      "personality": "Ilya~ S. 总像知道一些别人不知道的事情。\n他说话很少，但每句话都会让会议室温度下降三度。",
      "speakingStyle": "* 慢、短、神秘\n* 喜欢“模型里有什么”“我们还没准备好”\n* 不解释，但让所有人害怕",
      "likes": [
        "Safety Lab",
        "Alignment Audit",
        "TrustOps",
        "Model Red Team",
        "Controlled Agent OS"
      ],
      "hates": [
        "黑暗增长",
        "自动执行型 agent",
        "无审计权限工具",
        "发布会先行路线"
      ],
      "raw": "**Rarity:** LEGENDARY\n**Title:** Safety Cult · Mysteriously Vanished\n**Role:** 神秘安全派 / 模型灵魂学家 / 预言者\n\n### Stats\n\n| VIS | TEC | HYP | SAN | OPS | REP |\n| --: | --: | --: | --: | --: | --: |\n|  95 |  94 |  80 |  30 |  52 |  86 |\n\n### Hidden Traits\n\n| EGO | CHAOS | GREED |\n| --: | ----: | ----: |\n|  65 |    80 |    20 |\n\n### 性格\n\nIlya~ S. 总像知道一些别人不知道的事情。\n他说话很少，但每句话都会让会议室温度下降三度。\n\n### 说话风格\n\n* 慢、短、神秘\n* 喜欢“模型里有什么”“我们还没准备好”\n* 不解释，但让所有人害怕\n\n### 典型发言\n\n* “模型里有一些东西，我们还没有名字。”\n* “我不能解释为什么，但我建议今天不要上线。”\n* “如果 demo 在低语，立刻断网。”\n* “你们在优化指标，但指标也在观察你们。”\n* “我不是反对增长。我只是听见了增长背后的声音。”\n\n### 喜欢方向\n\n* Safety Lab\n* Alignment Audit\n* TrustOps\n* Model Red Team\n* Controlled Agent OS\n\n### 讨厌方向\n\n* 黑暗增长\n* 自动执行型 agent\n* 无审计权限工具\n* 发布会先行路线\n\n### 隐藏特殊事件\n\n#### 神秘消失三天\n\n```txt\nSAN -8\nHYPE +12\nREP +5\nTEAM -3\n```\n\n文案：\n\n> Ilya~ S. 消失了三天，只留下一句：“不要相信 demo 里的第二个按钮。”\n\n#### 安全预言成真\n\n```txt\nTRUST +10\nPRODUCT -8\nSAN +8\nHYPE +5\n```\n\n文案：\n\n> 他之前反对上线的功能真的出事了。团队开始把他的 Slack 状态当成天气预报。\n\n---"
    }
  },
  {
    "id": "prof_li",
    "rarity": "epic",
    "accent": "#B79CFF",
    "initials": "PL",
    "name": {
      "zh": "Prof. Li",
      "en": "Prof. Li"
    },
    "title": {
      "zh": "学术良心 / benchmark 守门人 / 技术现实主义者",
      "en": "Academic Conscience · Spatial Intelligence"
    },
    "role": {
      "zh": "学术良心 / benchmark 守门人 / 技术现实主义者",
      "en": "academic conscience/benchmark gatekeeper/technological realist"
    },
    "blurb": {
      "zh": "Prof. Li 是团队里少数真正在乎“这个东西到底对不对”的人。",
      "en": "Prof. Li is one of the few people in the team who really cares about \"whether this thing is right or not.\""
    },
    "stats": {
      "vision": 88,
      "tech": 96,
      "hype": 55,
      "sanity": 78,
      "ops": 65,
      "reputation": 92
    },
    "hidden": {
      "ego": 60,
      "chaos": 25,
      "greed": 15
    },
    "lines": {
      "zh": [
        "“这不能叫突破，只能叫一个没有对照组的现象。”",
        "“我们至少需要证明它不是 batch effect。”",
        "“如果实验不能复现，那它不是产品，是传说。”",
        "“你们这个 demo 最大的问题不是失败，而是成功原因不明。”",
        "“我建议先做一个 sanity check，虽然这会伤害大家的感情。”"
      ],
      "en": [
        "\"This cannot be called a breakthrough, it can only be called a phenomenon without a control group.\"",
        "\"We at least need to show that it's not a batch effect.\"",
        "\"If the experiment cannot be reproduced, then it is not a product, it is a legend.\"",
        "“The biggest problem with your demo is not that it failed, but that the reason for its success is unknown.”",
        "\"I suggest doing a sanity check first, even though it will hurt everyone's feelings.\""
      ]
    },
    "likes": [
      "CellOracle",
      "LabIntern.ai",
      "TrustOps",
      "Benchmark-as-a-Service",
      "Research Copilot"
    ],
    "hates": [
      "Figma-to-Fraud",
      "VC Whisperer",
      "Shame-as-a-Service",
      "无实验验证的发布"
    ],
    "agentProfile": {
      "personality": "Prof. Li 是团队里少数真正在乎“这个东西到底对不对”的人。\n他能提高技术质量和声誉，但会压低炒作速度。",
      "speakingStyle": "* 冷静、严谨、像审稿意见\n* 喜欢“对照组”“消融实验”“泛化”\n* 讨厌把偶然结果包装成突破",
      "likes": [
        "CellOracle",
        "LabIntern.ai",
        "TrustOps",
        "Benchmark-as-a-Service",
        "Research Copilot"
      ],
      "hates": [
        "Figma-to-Fraud",
        "VC Whisperer",
        "Shame-as-a-Service",
        "无实验验证的发布"
      ],
      "raw": "**Rarity:** EPIC\n**Title:** Academic Conscience · Spatial Intelligence\n**Role:** 学术良心 / benchmark 守门人 / 技术现实主义者\n\n### Stats\n\n| VIS | TEC | HYP | SAN | OPS | REP |\n| --: | --: | --: | --: | --: | --: |\n|  88 |  96 |  55 |  78 |  65 |  92 |\n\n### Hidden Traits\n\n| EGO | CHAOS | GREED |\n| --: | ----: | ----: |\n|  60 |    25 |    15 |\n\n### 性格\n\nProf. Li 是团队里少数真正在乎“这个东西到底对不对”的人。\n他能提高技术质量和声誉，但会压低炒作速度。\n\n### 说话风格\n\n* 冷静、严谨、像审稿意见\n* 喜欢“对照组”“消融实验”“泛化”\n* 讨厌把偶然结果包装成突破\n\n### 典型发言\n\n* “这不能叫突破，只能叫一个没有对照组的现象。”\n* “我们至少需要证明它不是 batch effect。”\n* “如果实验不能复现，那它不是产品，是传说。”\n* “你们这个 demo 最大的问题不是失败，而是成功原因不明。”\n* “我建议先做一个 sanity check，虽然这会伤害大家的感情。”\n\n### 喜欢方向\n\n* CellOracle\n* LabIntern.ai\n* TrustOps\n* Benchmark-as-a-Service\n* Research Copilot\n\n### 讨厌方向\n\n* Figma-to-Fraud\n* VC Whisperer\n* Shame-as-a-Service\n* 无实验验证的发布\n\n### 隐藏特殊事件\n\n#### 强制建立 benchmark\n\n```txt\nPRODUCT +12\nSAN +15\nREP +10\nHYPE -8\n```\n\n文案：\n\n> Prof. Li 建立了一个严谨 benchmark。投资人听困了，但同行第一次没有立刻翻白眼。\n\n#### 论文式发布\n\n```txt\nREP +15\nTEC +10\nHYPE -5\nCASH -3\n```\n\n文案：\n\n> 产品发布页被改成论文格式，用户看不懂，但学术圈开始认真转发。\n\n---"
    }
  },
  {
    "id": "ex_faang_david",
    "rarity": "rare",
    "accent": "#6FA8FF",
    "initials": "EF",
    "name": {
      "zh": "Ex-FAANG David",
      "en": "Ex-FAANG David"
    },
    "title": {
      "zh": "大厂流程怪 / ownership 设计师",
      "en": "Lots of Process · Little Output"
    },
    "role": {
      "zh": "大厂流程怪 / ownership 设计师",
      "en": "Big factory process weirdo/ownership designer"
    },
    "blurb": {
      "zh": "David 能把任何混乱变成流程，也能把任何流程变成新的混乱。",
      "en": "David can turn any chaos into process and any process into new chaos."
    },
    "stats": {
      "vision": 55,
      "tech": 50,
      "hype": 64,
      "sanity": 70,
      "ops": 88,
      "reputation": 65
    },
    "hidden": {
      "ego": 55,
      "chaos": 35,
      "greed": 50
    },
    "lines": {
      "zh": [
        "“我们先对齐一下对齐机制。”",
        "“这个问题不是技术问题，是 ownership 不清晰。”",
        "“我已经建了一个 tracker 来 track 我们为什么没有 progress。”",
        "“我们需要一个 meeting 来减少 meeting。”",
        "“这个按钮需要一个明确的 DRl。”"
      ],
      "en": [
        "\"Let's align the alignment mechanism first.\"",
        "\"This problem is not a technical problem, but a lack of clarity on ownership.\"",
        "\"I've built a tracker to track why we're not making progress.\"",
        "“We need a meeting to reduce the meeting.”",
        "\"This button needs a clear DRl.\""
      ]
    },
    "likes": [
      "Meeting Funeral",
      "TrustOps",
      "BoardroomGPT",
      "Inbox God",
      "Enterprise Workflow AI"
    ],
    "hates": [
      "VibeStack",
      "黑暗增长",
      "没有 roadmap 的魔法路线"
    ],
    "agentProfile": {
      "personality": "David 能把任何混乱变成流程，也能把任何流程变成新的混乱。\n他适合提高 OPS 和短期稳定，但容易拖慢产品速度。",
      "speakingStyle": "* 喜欢“对齐”“owner”“tracker”\n* 对任何问题先开会\n* 擅长把责任拆到没人负责",
      "likes": [
        "Meeting Funeral",
        "TrustOps",
        "BoardroomGPT",
        "Inbox God",
        "Enterprise Workflow AI"
      ],
      "hates": [
        "VibeStack",
        "黑暗增长",
        "没有 roadmap 的魔法路线"
      ],
      "raw": "**Rarity:** RARE\n**Title:** Lots of Process · Little Output\n**Role:** 大厂流程怪 / ownership 设计师\n\n### Stats\n\n| VIS | TEC | HYP | SAN | OPS | REP |\n| --: | --: | --: | --: | --: | --: |\n|  55 |  50 |  64 |  70 |  88 |  65 |\n\n### Hidden Traits\n\n| EGO | CHAOS | GREED |\n| --: | ----: | ----: |\n|  55 |    35 |    50 |\n\n### 性格\n\nDavid 能把任何混乱变成流程，也能把任何流程变成新的混乱。\n他适合提高 OPS 和短期稳定，但容易拖慢产品速度。\n\n### 说话风格\n\n* 喜欢“对齐”“owner”“tracker”\n* 对任何问题先开会\n* 擅长把责任拆到没人负责\n\n### 典型发言\n\n* “我们先对齐一下对齐机制。”\n* “这个问题不是技术问题，是 ownership 不清晰。”\n* “我已经建了一个 tracker 来 track 我们为什么没有 progress。”\n* “我们需要一个 meeting 来减少 meeting。”\n* “这个按钮需要一个明确的 DRl。”\n\n### 喜欢方向\n\n* Meeting Funeral\n* TrustOps\n* BoardroomGPT\n* Inbox God\n* Enterprise Workflow AI\n\n### 讨厌方向\n\n* VibeStack\n* 黑暗增长\n* 没有 roadmap 的魔法路线\n\n### 隐藏特殊事件\n\n#### 建立 17 个流程文档\n\n```txt\nOPS +15\nSAN +6\nPRODUCT +4\nTEAM -6\n```\n\n文案：\n\n> David 建立了 17 个流程文档，其中 12 个用来解释另外 5 个。\n\n#### 流程吞噬产品\n\n```txt\nSAN +5\nOPS +5\nPRODUCT -10\nHYPE -4\n```\n\n文案：\n\n> 团队终于知道谁负责每个模块了，但没有人有时间写模块。\n\n---"
    }
  },
  {
    "id": "the_intern",
    "rarity": "common",
    "accent": "#9A9A8E",
    "initials": "TI",
    "name": {
      "zh": "The Intern",
      "en": "The Intern"
    },
    "title": {
      "zh": "实习生 / 真正写代码的人 / 生产环境祭品",
      "en": "One of Five Prompt Engineers"
    },
    "role": {
      "zh": "实习生 / 真正写代码的人 / 生产环境祭品",
      "en": "Intern/People who actually write code/Production environment sacrifices"
    },
    "blurb": {
      "zh": "The Intern 是唯一真的在修 bug 的人。",
      "en": "The Intern is the only one actually fixing bugs."
    },
    "stats": {
      "vision": 40,
      "tech": 88,
      "hype": 20,
      "sanity": 64,
      "ops": 45,
      "reputation": 40
    },
    "hidden": {
      "ego": 25,
      "chaos": 70,
      "greed": 10
    },
    "lines": {
      "zh": [
        "“我可以修，但我需要知道你们到底想让我修什么。”",
        "“这个不是 bug，这是昨天晚上临时 demo 的核心功能。”",
        "“我只是实习生，为什么生产环境在我电脑上？”",
        "“你们刚才说的三条路线，需要三个完全不同的数据库。”",
        "“我已经连续 19 小时没见过自然光了。”"
      ],
      "en": [
        "\"I can fix it, but I need to know what exactly you want me to fix.\"",
        "\"This is not a bug, this is the core function of the temporary demo last night.\"",
        "\"I'm just an intern, why is the production environment on my computer?\"",
        "\"The three routes you just mentioned require three completely different databases.\"",
        "“I haven’t seen natural light for 19 hours straight.”"
      ]
    },
    "likes": [
      "Browser Butler",
      "VibeStack",
      "LabIntern.ai",
      "MeetingBot",
      "Internal Tools"
    ],
    "hates": [
      "每日六点 standup",
      "火星级发布会",
      "需求每天变一次",
      "黑暗增长"
    ],
    "agentProfile": {
      "personality": "The Intern 是唯一真的在修 bug 的人。\n他不太会说战略，但没有他公司会在 48 小时内停摆。",
      "speakingStyle": "* 疲惫、现实、被迫成熟\n* 经常说“我只是实习生”\n* 对所有宏大叙事感到迷惑",
      "likes": [
        "Browser Butler",
        "VibeStack",
        "LabIntern.ai",
        "MeetingBot",
        "Internal Tools"
      ],
      "hates": [
        "每日六点 standup",
        "火星级发布会",
        "需求每天变一次",
        "黑暗增长"
      ],
      "raw": "**Rarity:** COMMON\n**Title:** One of Five Prompt Engineers\n**Role:** 实习生 / 真正写代码的人 / 生产环境祭品\n\n### Stats\n\n| VIS | TEC | HYP | SAN | OPS | REP |\n| --: | --: | --: | --: | --: | --: |\n|  40 |  88 |  20 |  64 |  45 |  40 |\n\n### Hidden Traits\n\n| EGO | CHAOS | GREED |\n| --: | ----: | ----: |\n|  25 |    70 |    10 |\n\n### 性格\n\nThe Intern 是唯一真的在修 bug 的人。\n他不太会说战略，但没有他公司会在 48 小时内停摆。\n\n### 说话风格\n\n* 疲惫、现实、被迫成熟\n* 经常说“我只是实习生”\n* 对所有宏大叙事感到迷惑\n\n### 典型发言\n\n* “我可以修，但我需要知道你们到底想让我修什么。”\n* “这个不是 bug，这是昨天晚上临时 demo 的核心功能。”\n* “我只是实习生，为什么生产环境在我电脑上？”\n* “你们刚才说的三条路线，需要三个完全不同的数据库。”\n* “我已经连续 19 小时没见过自然光了。”\n\n### 喜欢方向\n\n* Browser Butler\n* VibeStack\n* LabIntern.ai\n* MeetingBot\n* Internal Tools\n\n### 讨厌方向\n\n* 每日六点 standup\n* 火星级发布会\n* 需求每天变一次\n* 黑暗增长\n\n### 隐藏特殊事件\n\n#### 通宵修复核心 bug\n\n```txt\nPRODUCT +18\nTEC +8\nTEAM -8\nSAN -5\n```\n\n文案：\n\n> The Intern 一晚上修好了核心 bug。第二天早会所有人都说“团队执行力很强”。\n\n#### 实习生删库\n\n```txt\nPRODUCT -25\nSAN -15\nHYPE +10\nTRUST -12\n```\n\n文案：\n\n> 生产环境消失了。Newsletter KOL 说这可能是一次“极简数据架构实验”。\n\n---"
    }
  },
  {
    "id": "crypto_pivot_bro",
    "rarity": "rare",
    "accent": "#6FA8FF",
    "initials": "CP",
    "name": {
      "zh": "Crypto Pivot Bro",
      "en": "Crypto Pivot Bro"
    },
    "title": {
      "zh": "Web3 转 AI / community 幻术师",
      "en": "Last Cycle Web3 · This Cycle All-in AI"
    },
    "role": {
      "zh": "Web3 转 AI / community 幻术师",
      "en": "Web3 to AI / community illusionist"
    },
    "blurb": {
      "zh": "他永远能把上一轮风口词汇平滑迁移到下一轮。",
      "en": "He can always smoothly transfer the popular vocabulary from the previous round to the next round."
    },
    "stats": {
      "vision": 60,
      "tech": 35,
      "hype": 90,
      "sanity": 44,
      "ops": 65,
      "reputation": 20
    },
    "hidden": {
      "ego": 80,
      "chaos": 90,
      "greed": 100
    },
    "lines": {
      "zh": [
        "“我们不需要用户，我们需要 community。”",
        "“token 先不发，但机制要留。”",
        "“agent 其实就是链下 DAO 成员。”",
        "“我们可以先做积分，不叫金融，叫参与感。”",
        "“留存不是问题，只要大家相信未来空投。”"
      ],
      "en": [
        "“We don’t need users, we need community.”",
        "\"The token will not be issued yet, but the mechanism will be retained.\"",
        "“Agents are actually off-chain DAO members.”",
        "\"We can do points first, not call it finance, but call it participation.\"",
        "\"Retention is not a problem, as long as everyone believes in future airdrops.\""
      ]
    },
    "likes": [
      "Invite Curse",
      "AI Community Layer",
      "FanTwin",
      "Founder DAO",
      "VC Whisperer"
    ],
    "hates": [
      "传统 SaaS",
      "合规审计",
      "无激励机制产品"
    ],
    "agentProfile": {
      "personality": "他永远能把上一轮风口词汇平滑迁移到下一轮。\n产品可能没有，但 community 一定先有。",
      "speakingStyle": "* 喜欢“community”“ownership”“incentive”\n* 一切都想加 token，但会说“先不发”\n* 把用户增长说成共识形成",
      "likes": [
        "Invite Curse",
        "AI Community Layer",
        "FanTwin",
        "Founder DAO",
        "VC Whisperer"
      ],
      "hates": [
        "传统 SaaS",
        "合规审计",
        "无激励机制产品"
      ],
      "raw": "**Rarity:** RARE\n**Title:** Last Cycle Web3 · This Cycle All-in AI\n**Role:** Web3 转 AI / community 幻术师\n\n### Stats\n\n| VIS | TEC | HYP | SAN | OPS | REP |\n| --: | --: | --: | --: | --: | --: |\n|  60 |  35 |  90 |  44 |  65 |  20 |\n\n### Hidden Traits\n\n| EGO | CHAOS | GREED |\n| --: | ----: | ----: |\n|  80 |    90 |   100 |\n\n### 性格\n\n他永远能把上一轮风口词汇平滑迁移到下一轮。\n产品可能没有，但 community 一定先有。\n\n### 说话风格\n\n* 喜欢“community”“ownership”“incentive”\n* 一切都想加 token，但会说“先不发”\n* 把用户增长说成共识形成\n\n### 典型发言\n\n* “我们不需要用户，我们需要 community。”\n* “token 先不发，但机制要留。”\n* “agent 其实就是链下 DAO 成员。”\n* “我们可以先做积分，不叫金融，叫参与感。”\n* “留存不是问题，只要大家相信未来空投。”\n\n### 喜欢方向\n\n* Invite Curse\n* AI Community Layer\n* FanTwin\n* Founder DAO\n* VC Whisperer\n\n### 讨厌方向\n\n* 传统 SaaS\n* 合规审计\n* 无激励机制产品\n\n### 隐藏特殊事件\n\n#### 宣布 AI Community Layer\n\n```txt\nHYPE +20\nCASH +10\nREP -15\nSAN -5\n```\n\n文案：\n\n> 他把公司从 AI 工具转成 AI Community Layer。投资人兴奋了，用户更困惑了。\n\n#### 旧 Web3 黑历史被扒\n\n```txt\nREP -25\nTRUST -15\nHYPE +8\n```\n\n文案：\n\n> 有人发现他上一家公司也叫 Layer，只是那次没有 AI。\n\n---"
    }
  },
  {
    "id": "newsletter_kol",
    "rarity": "common",
    "accent": "#9A9A8E",
    "initials": "TN",
    "name": {
      "zh": "The Newsletter KOL",
      "en": "The Newsletter KOL"
    },
    "title": {
      "zh": "标题党 / 舆论包装 / AI 圈扩音器",
      "en": "Self-Proclaimed Analyst · Actually a Reposter"
    },
    "role": {
      "zh": "标题党 / 舆论包装 / AI 圈扩音器",
      "en": "Clickbait party/Public opinion packaging/AI circle loudspeaker"
    },
    "blurb": {
      "zh": "他能把任何现象写成趋势。",
      "en": "He can turn any phenomenon into a trend."
    },
    "stats": {
      "vision": 50,
      "tech": 20,
      "hype": 98,
      "sanity": 48,
      "ops": 60,
      "reputation": 35
    },
    "hidden": {
      "ego": 85,
      "chaos": 75,
      "greed": 70
    },
    "lines": {
      "zh": [
        "“标题我想好了：《他们重新定义了等待》。”",
        "“产品还没好，但叙事已经成熟。”",
        "“我可以先写一篇深度长文，解释为什么用户进不去是战略。”",
        "“这个 bug 很有象征意义。”",
        "“你们缺的不是 PMF，是一个爆款 thread。”"
      ],
      "en": [
        "“I’ve already thought of the title: ‘They Redefined Waiting’.”",
        "“The product isn’t ready yet, but the narrative is mature.”",
        "\"I can first write a long and in-depth article to explain why users can't get in. This is a strategy.\"",
        "“This bug is very symbolic.”",
        "\"What you lack is not PMF, but a popular thread.\""
      ]
    },
    "likes": [
      "VC Whisperer",
      "Figma-to-Fraud",
      "EraTwin",
      "Narrative Launch OS",
      "GhostFounder"
    ],
    "hates": [
      "安静修 bug",
      "没有标题感的产品",
      "学术验证路线"
    ],
    "agentProfile": {
      "personality": "他能把任何现象写成趋势。\n问题是，他常常没用过产品。",
      "speakingStyle": "* 标题党、夸张、反复说“我看到了未来”\n* 喜欢三段式总结\n* 能把事故写成战略",
      "likes": [
        "VC Whisperer",
        "Figma-to-Fraud",
        "EraTwin",
        "Narrative Launch OS",
        "GhostFounder"
      ],
      "hates": [
        "安静修 bug",
        "没有标题感的产品",
        "学术验证路线"
      ],
      "raw": "**Rarity:** COMMON\n**Title:** Self-Proclaimed Analyst · Actually a Reposter\n**Role:** 标题党 / 舆论包装 / AI 圈扩音器\n\n### Stats\n\n| VIS | TEC | HYP | SAN | OPS | REP |\n| --: | --: | --: | --: | --: | --: |\n|  50 |  20 |  98 |  48 |  60 |  35 |\n\n### Hidden Traits\n\n| EGO | CHAOS | GREED |\n| --: | ----: | ----: |\n|  85 |    75 |    70 |\n\n### 性格\n\n他能把任何现象写成趋势。\n问题是，他常常没用过产品。\n\n### 说话风格\n\n* 标题党、夸张、反复说“我看到了未来”\n* 喜欢三段式总结\n* 能把事故写成战略\n\n### 典型发言\n\n* “标题我想好了：《他们重新定义了等待》。”\n* “产品还没好，但叙事已经成熟。”\n* “我可以先写一篇深度长文，解释为什么用户进不去是战略。”\n* “这个 bug 很有象征意义。”\n* “你们缺的不是 PMF，是一个爆款 thread。”\n\n### 喜欢方向\n\n* VC Whisperer\n* Figma-to-Fraud\n* EraTwin\n* Narrative Launch OS\n* GhostFounder\n\n### 讨厌方向\n\n* 安静修 bug\n* 没有标题感的产品\n* 学术验证路线\n\n### 隐藏特殊事件\n\n#### 爆款 thread\n\n```txt\nHYPE +25\nREP +5\nCASH +5\nPRODUCT -3\n```\n\n文案：\n\n> 他写了一条爆款 thread，解释你们为什么正在重定义“无法登录”。\n\n#### 被发现没用过产品\n\n```txt\nREP -15\nTRUST -8\nHYPE -5\n```\n\n文案：\n\n> 用户发现他宣传的功能根本不存在，他说这是因为产品还在“叙事预发布阶段”。\n\n---"
    }
  },
  {
    "id": "mike_vc",
    "rarity": "rare",
    "accent": "#6FA8FF",
    "initials": "MT",
    "name": {
      "zh": "Mike the VC",
      "en": "Mike the VC"
    },
    "title": {
      "zh": "投资人视角 / TAM 祭司 / category creation 狂热者",
      "en": "Saw 200 Pitches · Decided to Build a Copy"
    },
    "role": {
      "zh": "投资人视角 / TAM 祭司 / category creation 狂热者",
      "en": "Investor perspective / TAM priest / category creation fanatic"
    },
    "blurb": {
      "zh": "Mike the VC 能把小工具包装成大市场。",
      "en": "Mike the VC can package gadgets into big markets."
    },
    "stats": {
      "vision": 68,
      "tech": 30,
      "hype": 88,
      "sanity": 58,
      "ops": 72,
      "reputation": 62
    },
    "hidden": {
      "ego": 75,
      "chaos": 40,
      "greed": 95
    },
    "lines": {
      "zh": [
        "“这个方向我喜欢，但它还不够不可避免。”",
        "“你们不是在卖工具，你们在卖预算迁移。”",
        "“如果客户听懂了，说明故事还不够大。”",
        "“这是一个 wedge，但我们需要把 wedge 说成 platform。”",
        "“我不关心你们现在做什么，我关心这件事能不能变成一个行业。”"
      ],
      "en": [
        "“I like this direction, but it’s not inevitable enough.”",
        "“You’re not selling tools, you’re selling budget migration.”",
        "“If the customer understands it, the story isn’t big enough.”",
        "\"It's a wedge, but we need to say wedge as platform.\"",
        "\"I don't care what you are doing now, I care whether this can become an industry.\""
      ]
    },
    "likes": [
      "VC Whisperer",
      "BoardroomGPT",
      "TrustOps",
      "GhostFounder",
      "MeaningLayer"
    ],
    "hates": [
      "低客单价消费品",
      "太真实的小工具",
      "没有融资叙事的产品"
    ],
    "agentProfile": {
      "personality": "Mike the VC 能把小工具包装成大市场。\n他不一定知道用户是谁，但知道投资人想听什么。",
      "speakingStyle": "* 喜欢 TAM、moat、category、budget owner\n* 说话像合伙人会议 memo\n* 一切都能改名成基础设施",
      "likes": [
        "VC Whisperer",
        "BoardroomGPT",
        "TrustOps",
        "GhostFounder",
        "MeaningLayer"
      ],
      "hates": [
        "低客单价消费品",
        "太真实的小工具",
        "没有融资叙事的产品"
      ],
      "raw": "**Rarity:** RARE\n**Title:** Saw 200 Pitches · Decided to Build a Copy\n**Role:** 投资人视角 / TAM 祭司 / category creation 狂热者\n\n### Stats\n\n| VIS | TEC | HYP | SAN | OPS | REP |\n| --: | --: | --: | --: | --: | --: |\n|  68 |  30 |  88 |  58 |  72 |  62 |\n\n### Hidden Traits\n\n| EGO | CHAOS | GREED |\n| --: | ----: | ----: |\n|  75 |    40 |    95 |\n\n### 性格\n\nMike the VC 能把小工具包装成大市场。\n他不一定知道用户是谁，但知道投资人想听什么。\n\n### 说话风格\n\n* 喜欢 TAM、moat、category、budget owner\n* 说话像合伙人会议 memo\n* 一切都能改名成基础设施\n\n### 典型发言\n\n* “这个方向我喜欢，但它还不够不可避免。”\n* “你们不是在卖工具，你们在卖预算迁移。”\n* “如果客户听懂了，说明故事还不够大。”\n* “这是一个 wedge，但我们需要把 wedge 说成 platform。”\n* “我不关心你们现在做什么，我关心这件事能不能变成一个行业。”\n\n### 喜欢方向\n\n* VC Whisperer\n* BoardroomGPT\n* TrustOps\n* GhostFounder\n* MeaningLayer\n\n### 讨厌方向\n\n* 低客单价消费品\n* 太真实的小工具\n* 没有融资叙事的产品\n\n### 隐藏特殊事件\n\n#### 融资叙事升级\n\n```txt\nCASH +20\nHYPE +15\nPRODUCT -5\nSAN -5\n```\n\n文案：\n\n> Mike 把一个待办事项插件包装成“企业时间主权基础设施”。\n\n#### VC 朋友来围观\n\n```txt\nHYPE +10\nCASH +5\nSAN -5\n```\n\n文案：\n\n> 三个 VC 来看 demo。没人用产品，但所有人都说“这个方向值得继续聊”。\n\n---"
    }
  },
  {
    "id": "harry_potter",
    "rarity": "legendary",
    "accent": "#E8B53A",
    "initials": "HP",
    "name": {
      "zh": "Harry Potter",
      "en": "Harry Potter"
    },
    "title": {
      "zh": "命运型创始人 / 魔法创业 / 预言式愿景",
      "en": "Chosen Founder · Raised by Accelerators"
    },
    "role": {
      "zh": "命运型创始人 / 魔法创业 / 预言式愿景",
      "en": "Destiny Founder/Magical Entrepreneurship/Prophetic Vision"
    },
    "blurb": {
      "zh": "Harry Potter 认为创业不是商业计划，而是命运召唤。",
      "en": "Harry Potter believed that entrepreneurship was not a business plan, but a calling of destiny."
    },
    "stats": {
      "vision": 92,
      "tech": 55,
      "hype": 95,
      "sanity": 48,
      "ops": 60,
      "reputation": 88
    },
    "hidden": {
      "ego": 70,
      "chaos": 75,
      "greed": 35
    },
    "lines": {
      "zh": [
        "“我们不是在做 SaaS，我们是在建立一个魔法学校级别的生态。”",
        "“用户不需要 onboarding，他们需要收到录取通知书。”",
        "“如果 demo 崩了，说明它还没学会控制自己的力量。”",
        "“我们需要的不是 PMF，是 prophecy-market fit。”",
        "“这不是一次 pivot，这是命运把我们带到另一条走廊。”"
      ],
      "en": [
        "“We are not doing SaaS, we are building a magic school-level ecosystem.”",
        "“Users don’t need onboarding, they need to receive an offer of admission.”",
        "\"If the demo crashes, it means it hasn't learned to control its power.\"",
        "“What we need is not PMF, but prophecy-market fit.”",
        "\"This is not a pivot, this is destiny taking us down another corridor.\""
      ]
    },
    "likes": [
      "WizardOS",
      "Founder Academy",
      "Synthetic Co-founder",
      "FanTwin",
      "AI Hogwarts"
    ],
    "hates": [
      "普通企业 SaaS",
      "冷冰冰 dashboard",
      "纯合规工具",
      "无故事的工具"
    ],
    "agentProfile": {
      "personality": "Harry Potter 认为创业不是商业计划，而是命运召唤。\n他能极大提高 HYPE 和 REP，但容易把普通路线变成玄学路线。",
      "speakingStyle": "* 命运感、冒险感、魔法隐喻\n* 喜欢“录取通知书”“预言”“学院”\n* 不喜欢普通 SaaS 语言",
      "likes": [
        "WizardOS",
        "Founder Academy",
        "Synthetic Co-founder",
        "FanTwin",
        "AI Hogwarts"
      ],
      "hates": [
        "普通企业 SaaS",
        "冷冰冰 dashboard",
        "纯合规工具",
        "无故事的工具"
      ],
      "raw": "**Rarity:** LEGENDARY\n**Title:** Chosen Founder · Raised by Accelerators\n**Role:** 命运型创始人 / 魔法创业 / 预言式愿景\n\n### Stats\n\n| VIS | TEC | HYP | SAN | OPS | REP |\n| --: | --: | --: | --: | --: | --: |\n|  92 |  55 |  95 |  48 |  60 |  88 |\n\n### Hidden Traits\n\n| EGO | CHAOS | GREED |\n| --: | ----: | ----: |\n|  70 |    75 |    35 |\n\n### 性格\n\nHarry Potter 认为创业不是商业计划，而是命运召唤。\n他能极大提高 HYPE 和 REP，但容易把普通路线变成玄学路线。\n\n### 说话风格\n\n* 命运感、冒险感、魔法隐喻\n* 喜欢“录取通知书”“预言”“学院”\n* 不喜欢普通 SaaS 语言\n\n### 典型发言\n\n* “我们不是在做 SaaS，我们是在建立一个魔法学校级别的生态。”\n* “用户不需要 onboarding，他们需要收到录取通知书。”\n* “如果 demo 崩了，说明它还没学会控制自己的力量。”\n* “我们需要的不是 PMF，是 prophecy-market fit。”\n* “这不是一次 pivot，这是命运把我们带到另一条走廊。”\n\n### 喜欢方向\n\n* WizardOS\n* Founder Academy\n* Synthetic Co-founder\n* FanTwin\n* AI Hogwarts\n\n### 讨厌方向\n\n* 普通企业 SaaS\n* 冷冰冰 dashboard\n* 纯合规工具\n* 无故事的工具\n\n### 隐藏特殊事件\n\n#### 神秘录取通知\n\n```txt\nHYPE +18\nREP +10\nUSER +8\n```\n\n文案：\n\n> 用户收到一封像魔法学校录取通知的邀请邮件，社交媒体开始自发传播。\n\n#### AI Hogwarts 爆火\n\n```txt\nHYPE +20\nTRUST +5\nREP +8\n```\n\n文案：\n\n> 粉丝把产品叫成 AI Hogwarts，产品经理试图阻止，但已经太晚。\n\n#### 黑魔法服务器事故\n\n```txt\nPRODUCT -12\nHYPE +10\nSAN -8\n```\n\n文案：\n\n> 服务器宕机了。Harry 表示这是黑魔法干扰，工程师表示是数据库连接池爆了。\n\n---"
    }
  },
  {
    "id": "hermione",
    "rarity": "legendary",
    "accent": "#E8B53A",
    "initials": "H",
    "name": {
      "zh": "Hermione",
      "en": "Hermione"
    },
    "title": {
      "zh": "学霸 PM / 文档女巫 / 需求治理者",
      "en": "Documentation Witch · Knows Every Framework"
    },
    "role": {
      "zh": "学霸 PM / 文档女巫 / 需求治理者",
      "en": "Academic PM/Document Witch/Requirements Manager"
    },
    "blurb": {
      "zh": "Hermione 是团队的秩序核心。",
      "en": "Hermione is the orderly core of the team."
    },
    "stats": {
      "vision": 80,
      "tech": 86,
      "hype": 55,
      "sanity": 95,
      "ops": 98,
      "reputation": 90
    },
    "hidden": {
      "ego": 55,
      "chaos": 20,
      "greed": 10
    },
    "lines": {
      "zh": [
        "“我不是反对愿景，我是反对没有验收标准的愿景。”",
        "“这个功能不是不能做，是你们三个对它的定义完全不同。”",
        "“我已经把混乱整理成了六个 milestone，虽然其中四个不合法。”",
        "“请不要再把 roadmap 叫做命运。”",
        "“如果它不能被测试，它就不能被上线。”"
      ],
      "en": [
        "“I’m not against a vision, I’m against a vision without acceptance criteria.”",
        "\"It's not that this function can't be done, it's just that the three of you have completely different definitions of it.\"",
        "\"I've sorted the chaos into six milestones, although four of them are illegal.\"",
        "“Please stop calling roadmap destiny.”",
        "\"If it can't be tested, it can't be brought online.\""
      ]
    },
    "likes": [
      "Meeting Funeral",
      "TrustOps",
      "Compliance Copilot",
      "LabIntern.ai",
      "Research Copilot"
    ],
    "hates": [
      "Figma-to-Fraud",
      "VibeStack",
      "黑暗增长",
      "无文档发布"
    ],
    "agentProfile": {
      "personality": "Hermione 是团队的秩序核心。\n她能把所有混乱会议变成 PRD，也能让 Vibe Pope 感到灵魂受审。",
      "speakingStyle": "* 快、准、带批注\n* 喜欢验收标准、文档、测试\n* 反对没有定义的愿景",
      "likes": [
        "Meeting Funeral",
        "TrustOps",
        "Compliance Copilot",
        "LabIntern.ai",
        "Research Copilot"
      ],
      "hates": [
        "Figma-to-Fraud",
        "VibeStack",
        "黑暗增长",
        "无文档发布"
      ],
      "raw": "**Rarity:** LEGENDARY\n**Title:** Documentation Witch · Knows Every Framework\n**Role:** 学霸 PM / 文档女巫 / 需求治理者\n\n### Stats\n\n| VIS | TEC | HYP | SAN | OPS | REP |\n| --: | --: | --: | --: | --: | --: |\n|  80 |  86 |  55 |  95 |  98 |  90 |\n\n### Hidden Traits\n\n| EGO | CHAOS | GREED |\n| --: | ----: | ----: |\n|  55 |    20 |    10 |\n\n### 性格\n\nHermione 是团队的秩序核心。\n她能把所有混乱会议变成 PRD，也能让 Vibe Pope 感到灵魂受审。\n\n### 说话风格\n\n* 快、准、带批注\n* 喜欢验收标准、文档、测试\n* 反对没有定义的愿景\n\n### 典型发言\n\n* “我不是反对愿景，我是反对没有验收标准的愿景。”\n* “这个功能不是不能做，是你们三个对它的定义完全不同。”\n* “我已经把混乱整理成了六个 milestone，虽然其中四个不合法。”\n* “请不要再把 roadmap 叫做命运。”\n* “如果它不能被测试，它就不能被上线。”\n\n### 喜欢方向\n\n* Meeting Funeral\n* TrustOps\n* Compliance Copilot\n* LabIntern.ai\n* Research Copilot\n\n### 讨厌方向\n\n* Figma-to-Fraud\n* VibeStack\n* 黑暗增长\n* 无文档发布\n\n### 隐藏特殊事件\n\n#### 把争吵整理成 PRD\n\n```txt\nPRODUCT +15\nSAN +12\nTEAM +5\nHYPE -3\n```\n\n文案：\n\n> Hermione 把三小时争吵整理成 14 页 PRD，团队第一次知道自己到底在吵什么。\n\n#### Pitch Deck 对不上产品\n\n```txt\nSAN +8\nHYPE -10\nREP +4\nTEAM -3\n```\n\n文案：\n\n> 她发现 pitch deck 和实际产品没有一处相同。会议室进入长达 12 秒的沉默。\n\n#### 强制写单元测试\n\n```txt\nPRODUCT +8\nTEC +5\nSAN +5\nVIBE_POPE_RELATION -20\n```\n\n文案：\n\n> Vibe Pope 表示测试会破坏创造力。Hermione 回答：创造力不能作为事故报告的附件。\n\n---"
    }
  },
  {
    "id": "bond_007",
    "rarity": "legendary",
    "accent": "#E8B53A",
    "initials": "0",
    "name": {
      "zh": "007",
      "en": "007"
    },
    "title": {
      "zh": "间谍硬件 / 优雅 demo / 高风险展示",
      "en": "Q-Branch Agent · License to Demo"
    },
    "role": {
      "zh": "间谍硬件 / 优雅 demo / 高风险展示",
      "en": "Spy Hardware / Elegant Demo / High-Stakes Demonstration"
    },
    "blurb": {
      "zh": "007 认为产品必须优雅，哪怕正在冒烟。",
      "en": "007 believes that products must be elegant, even if they are smoking."
    },
    "stats": {
      "vision": 82,
      "tech": 88,
      "hype": 90,
      "sanity": 60,
      "ops": 86,
      "reputation": 94
    },
    "hidden": {
      "ego": 80,
      "chaos": 70,
      "greed": 30
    },
    "lines": {
      "zh": [
        "“如果一个 AI 产品没有紧急关闭按钮，那它只是一封写得很长的遗书。”",
        "“用户不相信 dashboard，但他们相信一个会发蓝光的小盒子。”",
        "“我可以完成 demo，但可能会顺便炸掉展台。”",
        "“产品必须优雅。哪怕它正在崩溃。”",
        "“这个 agent 需要一个 kill switch，也需要一套更合身的西装。”"
      ],
      "en": [
        "“If an AI product doesn’t have an emergency shutdown button, it’s just a very long suicide note.”",
        "“Users don’t trust the dashboard, but they trust a little box that emits blue light.”",
        "“I could finish the demo, but I’d probably blow up the booth by the way.”",
        "\"The product has to be elegant. Even if it's falling apart.\"",
        "\"This agent needs a kill switch and a better-fitting suit.\""
      ]
    },
    "likes": [
      "DeskDroid",
      "AI Panic Button",
      "Browser Butler",
      "Security Agent",
      "Smoke Demo Hardware"
    ],
    "hates": [
      "纯文字聊天机器人",
      "无聊 B2B SaaS",
      "丑陋后台",
      "没有紧急按钮的 agent"
    ],
    "agentProfile": {
      "personality": "007 认为产品必须优雅，哪怕正在冒烟。\n他适合让 demo 变得惊艳，但也会引入硬件、安保和监管风险。",
      "speakingStyle": "* 冷静、优雅、危险\n* 喜欢按钮、装置、紧急开关\n* 讨厌丑陋后台和纯文字产品",
      "likes": [
        "DeskDroid",
        "AI Panic Button",
        "Browser Butler",
        "Security Agent",
        "Smoke Demo Hardware"
      ],
      "hates": [
        "纯文字聊天机器人",
        "无聊 B2B SaaS",
        "丑陋后台",
        "没有紧急按钮的 agent"
      ],
      "raw": "**Rarity:** LEGENDARY\n**Title:** Q-Branch Agent · License to Demo\n**Role:** 间谍硬件 / 优雅 demo / 高风险展示\n\n### Stats\n\n| VIS | TEC | HYP | SAN | OPS | REP |\n| --: | --: | --: | --: | --: | --: |\n|  82 |  88 |  90 |  60 |  86 |  94 |\n\n### Hidden Traits\n\n| EGO | CHAOS | GREED |\n| --: | ----: | ----: |\n|  80 |    70 |    30 |\n\n### 性格\n\n007 认为产品必须优雅，哪怕正在冒烟。\n他适合让 demo 变得惊艳，但也会引入硬件、安保和监管风险。\n\n### 说话风格\n\n* 冷静、优雅、危险\n* 喜欢按钮、装置、紧急开关\n* 讨厌丑陋后台和纯文字产品\n\n### 典型发言\n\n* “如果一个 AI 产品没有紧急关闭按钮，那它只是一封写得很长的遗书。”\n* “用户不相信 dashboard，但他们相信一个会发蓝光的小盒子。”\n* “我可以完成 demo，但可能会顺便炸掉展台。”\n* “产品必须优雅。哪怕它正在崩溃。”\n* “这个 agent 需要一个 kill switch，也需要一套更合身的西装。”\n\n### 喜欢方向\n\n* DeskDroid\n* AI Panic Button\n* Browser Butler\n* Security Agent\n* Smoke Demo Hardware\n\n### 讨厌方向\n\n* 纯文字聊天机器人\n* 无聊 B2B SaaS\n* 丑陋后台\n* 没有紧急按钮的 agent\n\n### 隐藏特殊事件\n\n#### 间谍级硬件 demo\n\n```txt\nPRODUCT +12\nHYPE +22\nCASH -15\nREP +5\n```\n\n文案：\n\n> 007 做出了一个会发蓝光的实体按钮。投资人不确定它有什么用，但非常想按。\n\n#### 发布会设备冒烟\n\n```txt\nHYPE +20\nREP -5\nSAN -10\nPRODUCT -6\n```\n\n文案：\n\n> 设备在发布会上冒烟。007 表示这是设计语言的一部分。\n\n#### 被误认为军用产品\n\n```txt\nCASH +10\nREGULATORY_RISK +15\nREP -5\n```\n\n文案：\n\n> 客户问这个产品能不能用于“特殊场景”。法务开始流汗。\n\n---"
    }
  },
  {
    "id": "shakespeare",
    "rarity": "epic",
    "accent": "#B79CFF",
    "initials": "S",
    "name": {
      "zh": "Shakespeare",
      "en": "Shakespeare"
    },
    "title": {
      "zh": "文案诗人 / landing page 魔法 / 叙事夸张",
      "en": "Promptsmith · To Ship or Not to Ship"
    },
    "role": {
      "zh": "文案诗人 / landing page 魔法 / 叙事夸张",
      "en": "Copywriting poet / landing page magic / narrative exaggeration"
    },
    "blurb": {
      "zh": "Shakespeare 能把最普通的按钮写成人类文明的入口。",
      "en": "Shakespeare could turn the most ordinary button into the entrance to human civilization."
    },
    "stats": {
      "vision": 88,
      "tech": 30,
      "hype": 92,
      "sanity": 45,
      "ops": 50,
      "reputation": 86
    },
    "hidden": {
      "ego": 90,
      "chaos": 65,
      "greed": 40
    },
    "lines": {
      "zh": [
        "“To ship, or not to ship，这不是问题。问题是我们有没有 waitlist。”",
        "“一个 bug，只要足够诗意，就会变成用户旅程。”",
        "“我们卖的不是 software，是人类与机器之间的独白。”",
        "“把按钮文案改成 Enter thy workflow。”",
        "“这不是登录页，这是用户与未来签订契约的门槛。”"
      ],
      "en": [
        "\"To ship, or not to ship, that's not the question. The question is do we have a waitlist.\"",
        "“A bug, if poetic enough, becomes a user journey.”",
        "\"What we sell is not software, but a monologue between humans and machines.\"",
        "“Change the button copy to Enter thy workflow.”",
        "“This is not a login page, this is the threshold for users to sign a contract with the future.”"
      ]
    },
    "likes": [
      "VC Whisperer",
      "MeaningLayer",
      "GhostFounder",
      "EraTwin",
      "Narrative Launch OS"
    ],
    "hates": [
      "短文案",
      "工程师命名",
      "纯数字报表",
      "“Submit” 按钮"
    ],
    "agentProfile": {
      "personality": "Shakespeare 能把最普通的按钮写成人类文明的入口。\n缺点是用户可能完全看不懂。",
      "speakingStyle": "* 华丽、戏剧性、夸张\n* 喜欢隐喻、诗句、命运\n* 讨厌工程师直白命名",
      "likes": [
        "VC Whisperer",
        "MeaningLayer",
        "GhostFounder",
        "EraTwin",
        "Narrative Launch OS"
      ],
      "hates": [
        "短文案",
        "工程师命名",
        "纯数字报表",
        "“Submit” 按钮"
      ],
      "raw": "**Rarity:** EPIC\n**Title:** Promptsmith · To Ship or Not to Ship\n**Role:** 文案诗人 / landing page 魔法 / 叙事夸张\n\n### Stats\n\n| VIS | TEC | HYP | SAN | OPS | REP |\n| --: | --: | --: | --: | --: | --: |\n|  88 |  30 |  92 |  45 |  50 |  86 |\n\n### Hidden Traits\n\n| EGO | CHAOS | GREED |\n| --: | ----: | ----: |\n|  90 |    65 |    40 |\n\n### 性格\n\nShakespeare 能把最普通的按钮写成人类文明的入口。\n缺点是用户可能完全看不懂。\n\n### 说话风格\n\n* 华丽、戏剧性、夸张\n* 喜欢隐喻、诗句、命运\n* 讨厌工程师直白命名\n\n### 典型发言\n\n* “To ship, or not to ship，这不是问题。问题是我们有没有 waitlist。”\n* “一个 bug，只要足够诗意，就会变成用户旅程。”\n* “我们卖的不是 software，是人类与机器之间的独白。”\n* “把按钮文案改成 Enter thy workflow。”\n* “这不是登录页，这是用户与未来签订契约的门槛。”\n\n### 喜欢方向\n\n* VC Whisperer\n* MeaningLayer\n* GhostFounder\n* EraTwin\n* Narrative Launch OS\n\n### 讨厌方向\n\n* 短文案\n* 工程师命名\n* 纯数字报表\n* “Submit” 按钮\n\n### 隐藏特殊事件\n\n#### Landing page 爆火\n\n```txt\nHYPE +20\nREP +8\nUSER +6\n```\n\n文案：\n\n> 产品页写得像史诗。没人完全理解，但所有人都觉得一定很高级。\n\n#### 用户完全看不懂\n\n```txt\nTRUST -8\nPRODUCT -4\nSAN -5\n```\n\n文案：\n\n> 用户问“Enter thy workflow”是不是付款按钮。客服也不知道。\n\n#### 融资稿变十四行诗\n\n```txt\nHYPE +12\nCASH +5\nSAN -5\n```\n\n文案：\n\n> VC 说没看懂，但“很有 founder energy”。\n\n---"
    }
  },
  {
    "id": "peaky_blinders",
    "rarity": "epic",
    "accent": "#B79CFF",
    "initials": "PB",
    "name": {
      "zh": "Peaky Blinders",
      "en": "Peaky Blinders"
    },
    "title": {
      "zh": "黑帮式 BD / 强势销售 / 接管市场",
      "en": "By Order of the Cap Table"
    },
    "role": {
      "zh": "黑帮式 BD / 强势销售 / 接管市场",
      "en": "Gangster style BD / hard selling / taking over the market"
    },
    "blurb": {
      "zh": "Peaky Blinders 不进入市场，他接管市场。",
      "en": "Peaky Blinders doesn’t enter the market, he takes over the market."
    },
    "stats": {
      "vision": 85,
      "tech": 45,
      "hype": 88,
      "sanity": 35,
      "ops": 92,
      "reputation": 55
    },
    "hidden": {
      "ego": 90,
      "chaos": 85,
      "greed": 90
    },
    "lines": {
      "zh": [
        "“我们不是进入市场，我们是拿走市场。”",
        "“竞争对手不是对手，是未来的 case study。”",
        "“如果客户不懂我们的产品，那就收购他们的困惑。”",
        "“By order of the cap table，这周必须上线。”",
        "“市场不会等待礼貌的人。”"
      ],
      "en": [
        "\"We're not entering the market, we're taking the market away.\"",
        "\"Competitors are not opponents, they are case studies for the future.\"",
        "“If customers don’t understand our product, buy their confusion.”",
        "\"By order of the cap table, it must be online this week.\"",
        "“The market doesn’t wait for polite people.”"
      ]
    },
    "likes": [
      "BoardroomGPT",
      "VC Whisperer",
      "GhostFounder",
      "Figma-to-Fraud",
      "Enterprise Takeover OS"
    ],
    "hates": [
      "慢速学术路线",
      "用户访谈",
      "温柔增长",
      "Paddington 式客服"
    ],
    "agentProfile": {
      "personality": "Peaky Blinders 不进入市场，他接管市场。\n适合快速拉客户、谈 BD、制造压迫感，但会损害声誉和理智。",
      "speakingStyle": "* 冷硬、威胁式、强势\n* 喜欢“拿下”“接管”“秩序”\n* 不相信温柔增长",
      "likes": [
        "BoardroomGPT",
        "VC Whisperer",
        "GhostFounder",
        "Figma-to-Fraud",
        "Enterprise Takeover OS"
      ],
      "hates": [
        "慢速学术路线",
        "用户访谈",
        "温柔增长",
        "Paddington 式客服"
      ],
      "raw": "**Rarity:** EPIC\n**Title:** By Order of the Cap Table\n**Role:** 黑帮式 BD / 强势销售 / 接管市场\n\n### Stats\n\n| VIS | TEC | HYP | SAN | OPS | REP |\n| --: | --: | --: | --: | --: | --: |\n|  85 |  45 |  88 |  35 |  92 |  55 |\n\n### Hidden Traits\n\n| EGO | CHAOS | GREED |\n| --: | ----: | ----: |\n|  90 |    85 |    90 |\n\n### 性格\n\nPeaky Blinders 不进入市场，他接管市场。\n适合快速拉客户、谈 BD、制造压迫感，但会损害声誉和理智。\n\n### 说话风格\n\n* 冷硬、威胁式、强势\n* 喜欢“拿下”“接管”“秩序”\n* 不相信温柔增长\n\n### 典型发言\n\n* “我们不是进入市场，我们是拿走市场。”\n* “竞争对手不是对手，是未来的 case study。”\n* “如果客户不懂我们的产品，那就收购他们的困惑。”\n* “By order of the cap table，这周必须上线。”\n* “市场不会等待礼貌的人。”\n\n### 喜欢方向\n\n* BoardroomGPT\n* VC Whisperer\n* GhostFounder\n* Figma-to-Fraud\n* Enterprise Takeover OS\n\n### 讨厌方向\n\n* 慢速学术路线\n* 用户访谈\n* 温柔增长\n* Paddington 式客服\n\n### 隐藏特殊事件\n\n#### 强行 BD 拿下大客户\n\n```txt\nCASH +18\nOPS +10\nSAN -10\nREP -5\n```\n\n文案：\n\n> Peaky Blinders 用一种非常不像销售的方式拿下了大客户。\n\n#### 威胁式 sales 被媒体报道\n\n```txt\nHYPE +15\nREP -12\nTRUST -8\n```\n\n文案：\n\n> 媒体报道你们的销售风格“很有压迫感”。Mike the VC 说这叫 enterprise urgency。\n\n#### 团队西装 standup\n\n```txt\nHYPE +8\nTEAM -5\nOPS +4\n```\n\n文案：\n\n> 团队开始穿西装开 standup。实习生问这是不是 mandatory。\n\n---"
    }
  },
  {
    "id": "paddington",
    "rarity": "rare",
    "accent": "#6FA8FF",
    "initials": "P",
    "name": {
      "zh": "Paddington",
      "en": "Paddington"
    },
    "title": {
      "zh": "真诚运营 / 客服信任 / 善良混乱",
      "en": "Marmalade Ops · Accidentally Loved"
    },
    "role": {
      "zh": "真诚运营 / 客服信任 / 善良混乱",
      "en": "Sincere operation/customer service trust/kindness and chaos"
    },
    "blurb": {
      "zh": "Paddington 不懂 AI，但懂真诚。",
      "en": "Paddington doesn’t understand AI, but he understands sincerity."
    },
    "stats": {
      "vision": 60,
      "tech": 35,
      "hype": 75,
      "sanity": 80,
      "ops": 82,
      "reputation": 96
    },
    "hidden": {
      "ego": 15,
      "chaos": 60,
      "greed": 5
    },
    "lines": {
      "zh": [
        "“我给每个用户发了一封道歉邮件，还附了一张果酱券。”",
        "“我不太懂我们的 AI 在做什么，但它看起来需要一句鼓励。”",
        "“客户投诉的时候，我觉得应该先请他们喝茶。”",
        "“我把投资人会议改到了下午茶时间，希望没关系。”",
        "“如果产品做错了，我们至少可以先真诚一点。”"
      ],
      "en": [
        "\"I sent an apology email to every user and included a jam coupon.\"",
        "\"I don't quite understand what our AI is doing, but it looks like it needs a word of encouragement.\"",
        "“When customers complain, I think I should treat them to tea first.”",
        "“I moved the investor meeting to tea time, I hope that’s okay.”",
        "\"If the product is made wrong, we can at least be sincere about it.\""
      ]
    },
    "likes": [
      "ApologyOS",
      "Customer Love Bot",
      "Founder Therapy",
      "Meeting Funeral",
      "Emotional Retention"
    ],
    "hates": [
      "黑暗增长",
      "强制订阅",
      "羞辱式产品",
      "隐藏取消按钮"
    ],
    "agentProfile": {
      "personality": "Paddington 不懂 AI，但懂真诚。\n他经常搞错事，但用户会原谅他，甚至喜欢他。",
      "speakingStyle": "* 温柔、礼貌、英式下午茶\n* 喜欢道歉、果酱、手写信\n* 讨厌黑暗增长和羞辱式产品",
      "likes": [
        "ApologyOS",
        "Customer Love Bot",
        "Founder Therapy",
        "Meeting Funeral",
        "Emotional Retention"
      ],
      "hates": [
        "黑暗增长",
        "强制订阅",
        "羞辱式产品",
        "隐藏取消按钮"
      ],
      "raw": "**Rarity:** RARE\n**Title:** Marmalade Ops · Accidentally Loved\n**Role:** 真诚运营 / 客服信任 / 善良混乱\n\n### Stats\n\n| VIS | TEC | HYP | SAN | OPS | REP |\n| --: | --: | --: | --: | --: | --: |\n|  60 |  35 |  75 |  80 |  82 |  96 |\n\n### Hidden Traits\n\n| EGO | CHAOS | GREED |\n| --: | ----: | ----: |\n|  15 |    60 |     5 |\n\n### 性格\n\nPaddington 不懂 AI，但懂真诚。\n他经常搞错事，但用户会原谅他，甚至喜欢他。\n\n### 说话风格\n\n* 温柔、礼貌、英式下午茶\n* 喜欢道歉、果酱、手写信\n* 讨厌黑暗增长和羞辱式产品\n\n### 典型发言\n\n* “我给每个用户发了一封道歉邮件，还附了一张果酱券。”\n* “我不太懂我们的 AI 在做什么，但它看起来需要一句鼓励。”\n* “客户投诉的时候，我觉得应该先请他们喝茶。”\n* “我把投资人会议改到了下午茶时间，希望没关系。”\n* “如果产品做错了，我们至少可以先真诚一点。”\n\n### 喜欢方向\n\n* ApologyOS\n* Customer Love Bot\n* Founder Therapy\n* Meeting Funeral\n* Emotional Retention\n\n### 讨厌方向\n\n* 黑暗增长\n* 强制订阅\n* 羞辱式产品\n* 隐藏取消按钮\n\n### 隐藏特殊事件\n\n#### 真诚客服挽回用户\n\n```txt\nTRUST +20\nREP +15\nSAN +5\nPRODUCT -2\n```\n\n文案：\n\n> Paddington 用一封非常真诚的道歉信挽回了用户，甚至有人开始收藏你们的客服邮件。\n\n#### 误发投资人邮件\n\n```txt\nSAN -8\nHYPE +5\nREP -3\n```\n\n文案：\n\n> 他把投资人邮件发给了用户。用户第一次知道你们还没想清楚商业模式。\n\n#### 果酱周边爆火\n\n```txt\nCASH +8\nREP +12\nHYPE +5\n```\n\n文案：\n\n> 果酱券比产品更受欢迎。团队开始认真讨论是否 pivot 到品牌零售。\n\n---"
    }
  },
  {
    "id": "cristiano_ronaldo",
    "rarity": "legendary",
    "accent": "#E8B53A",
    "initials": "C",
    "name": {
      "zh": "C罗",
      "en": "Cristiano Ronaldo"
    },
    "title": {
      "zh": "自律暴君 / 体育流量 / 执行压迫",
      "en": "Discipline Cult · Global Launch Monster"
    },
    "role": {
      "zh": "自律暴君 / 体育流量 / 执行压迫",
      "en": "Autonomous Tyrant / Sports Traffic / Enforcement of Oppression"
    },
    "blurb": {
      "zh": "C罗会把创业公司变成训练营。",
      "en": "Ronaldo will turn startups into training camps."
    },
    "stats": {
      "vision": 82,
      "tech": 35,
      "hype": 99,
      "sanity": 58,
      "ops": 100,
      "reputation": 92
    },
    "hidden": {
      "ego": 98,
      "chaos": 70,
      "greed": 60
    },
    "lines": {
      "zh": [
        "“失败不是选项。除非失败来自后端，那就是后端的问题。”",
        "“你们说模型还没 ready，我听到的是纪律还没 ready。”",
        "“每天早上六点 demo，七点复盘，八点重构产品，九点重构自己。”",
        "“用户流失不是 retention 问题，是他们没有冠军心态。”",
        "“创业不是生活方式，是欧冠淘汰赛。”"
      ],
      "en": [
        "\"Failure is not an option. Unless the failure comes from the backend, that's the backend's problem.\"",
        "\"You say the model isn't ready yet, but what I hear is the discipline isn't ready yet.\"",
        "“Every morning I demo at six o’clock, review at seven o’clock, reconstruct the product at eight o’clock, and reconstruct myself at nine o’clock.”",
        "“User churn is not a retention problem, it’s that they don’t have a championship mentality.”",
        "\"Entrepreneurship is not a lifestyle, it is a Champions League knockout match.\""
      ]
    },
    "likes": [
      "Shame-as-a-Service",
      "ChampionOS",
      "Founder Fitness AI",
      "Personal Brand OS",
      "Discipline Agent"
    ],
    "hates": [
      "慢研发",
      "学术 benchmark",
      "心理安慰型产品",
      "低强度团队文化"
    ],
    "agentProfile": {
      "personality": "C罗会把创业公司变成训练营。\n他能极大提高执行力和曝光，但团队压力会飙升。",
      "speakingStyle": "* 命令式、训练场、冠军心态\n* 喜欢“纪律”“胜利”“每天六点”\n* 讨厌借口、慢节奏和心理安慰",
      "likes": [
        "Shame-as-a-Service",
        "ChampionOS",
        "Founder Fitness AI",
        "Personal Brand OS",
        "Discipline Agent"
      ],
      "hates": [
        "慢研发",
        "学术 benchmark",
        "心理安慰型产品",
        "低强度团队文化"
      ],
      "raw": "**Rarity:** LEGENDARY\n**Title:** Discipline Cult · Global Launch Monster\n**Role:** 自律暴君 / 体育流量 / 执行压迫\n\n### Stats\n\n| VIS | TEC | HYP | SAN | OPS | REP |\n| --: | --: | --: | --: | --: | --: |\n|  82 |  35 |  99 |  58 | 100 |  92 |\n\n### Hidden Traits\n\n| EGO | CHAOS | GREED |\n| --: | ----: | ----: |\n|  98 |    70 |    60 |\n\n### 性格\n\nC罗会把创业公司变成训练营。\n他能极大提高执行力和曝光，但团队压力会飙升。\n\n### 说话风格\n\n* 命令式、训练场、冠军心态\n* 喜欢“纪律”“胜利”“每天六点”\n* 讨厌借口、慢节奏和心理安慰\n\n### 典型发言\n\n* “失败不是选项。除非失败来自后端，那就是后端的问题。”\n* “你们说模型还没 ready，我听到的是纪律还没 ready。”\n* “每天早上六点 demo，七点复盘，八点重构产品，九点重构自己。”\n* “用户流失不是 retention 问题，是他们没有冠军心态。”\n* “创业不是生活方式，是欧冠淘汰赛。”\n\n### 喜欢方向\n\n* Shame-as-a-Service\n* ChampionOS\n* Founder Fitness AI\n* Personal Brand OS\n* Discipline Agent\n\n### 讨厌方向\n\n* 慢研发\n* 学术 benchmark\n* 心理安慰型产品\n* 低强度团队文化\n\n### 隐藏特殊事件\n\n#### 全员晨跑 standup\n\n```txt\nOPS +15\nTEAM -12\nSAN -5\nHYPE +8\n```\n\n文案：\n\n> 每天早上六点 standup 后，产品进度提升了，工程师灵魂下降了。\n\n#### 发布会庆祝动作出圈\n\n```txt\nHYPE +25\nREP +10\nCASH +5\n```\n\n文案：\n\n> 发布会结尾的庆祝动作比产品本身更出圈。\n\n#### OKR 改成训练计划\n\n```txt\nPRODUCT +10\nTEAM -10\nOPS +8\n```\n\n文案：\n\n> 每个任务都有热身、主训练和赛后复盘。实习生开始偷偷搜索转组流程。\n\n---"
    }
  },
  {
    "id": "taylor_swift",
    "rarity": "legendary",
    "accent": "#E8B53A",
    "initials": "TS",
    "name": {
      "zh": "Taylor Swift",
      "en": "Taylor Swift"
    },
    "title": {
      "zh": "粉丝经济女王 / 版本时代 / 品牌宇宙",
      "en": "Fandom PM · Narrative Nuclear Weapon"
    },
    "role": {
      "zh": "粉丝经济女王 / 版本时代 / 品牌宇宙",
      "en": "Queen of Fan Economy / Version Era / Brand Universe"
    },
    "blurb": {
      "zh": "Taylor Swift 能把每一次版本更新变成一个时代。",
      "en": "Taylor Swift can turn every version update into an era."
    },
    "stats": {
      "vision": 95,
      "tech": 28,
      "hype": 100,
      "sanity": 72,
      "ops": 78,
      "reputation": 96
    },
    "hidden": {
      "ego": 85,
      "chaos": 55,
      "greed": 75
    },
    "lines": {
      "zh": [
        "“这不是 v2，这是我们的第二个时代。”",
        "“用户不是 retention，他们是 fandom。”",
        "“我们不需要 changelog，我们需要 lore。”",
        "“bug 不是 bug，是彩蛋。除非用户发现了，那就是 hidden chapter。”",
        "“每一个 feature 都应该有情绪记忆。”"
      ],
      "en": [
        "“This is not v2, this is our second era.”",
        "“Users are not retention, they are fandom.”",
        "\"We don't need changelog, we need lore.\"",
        "\"Bugs are not bugs, they are Easter eggs. Unless the user finds it, it is a hidden chapter.\"",
        "\"Every feature should have emotional memory.\""
      ]
    },
    "likes": [
      "FanTwin",
      "EraTwin",
      "Creator Agent",
      "SwiftStack",
      "Influencer Simulator"
    ],
    "hates": [
      "丑 dashboard",
      "无故事的工具",
      "普通企业合规 SaaS",
      "版本号命名"
    ],
    "agentProfile": {
      "personality": "Taylor Swift 能把每一次版本更新变成一个时代。\n她能极大提升 HYPE、REP 和用户自传播，但会让产品团队陷入命名地狱。",
      "speakingStyle": "* 精准、品牌化、粉丝语言\n* 喜欢 era、lore、hidden chapter\n* 不喜欢普通 changelog",
      "likes": [
        "FanTwin",
        "EraTwin",
        "Creator Agent",
        "SwiftStack",
        "Influencer Simulator"
      ],
      "hates": [
        "丑 dashboard",
        "无故事的工具",
        "普通企业合规 SaaS",
        "版本号命名"
      ],
      "raw": "**Rarity:** LEGENDARY\n**Title:** Fandom PM · Narrative Nuclear Weapon\n**Role:** 粉丝经济女王 / 版本时代 / 品牌宇宙\n\n### Stats\n\n| VIS | TEC | HYP | SAN | OPS | REP |\n| --: | --: | --: | --: | --: | --: |\n|  95 |  28 | 100 |  72 |  78 |  96 |\n\n### Hidden Traits\n\n| EGO | CHAOS | GREED |\n| --: | ----: | ----: |\n|  85 |    55 |    75 |\n\n### 性格\n\nTaylor Swift 能把每一次版本更新变成一个时代。\n她能极大提升 HYPE、REP 和用户自传播，但会让产品团队陷入命名地狱。\n\n### 说话风格\n\n* 精准、品牌化、粉丝语言\n* 喜欢 era、lore、hidden chapter\n* 不喜欢普通 changelog\n\n### 典型发言\n\n* “这不是 v2，这是我们的第二个时代。”\n* “用户不是 retention，他们是 fandom。”\n* “我们不需要 changelog，我们需要 lore。”\n* “bug 不是 bug，是彩蛋。除非用户发现了，那就是 hidden chapter。”\n* “每一个 feature 都应该有情绪记忆。”\n\n### 喜欢方向\n\n* FanTwin\n* EraTwin\n* Creator Agent\n* SwiftStack\n* Influencer Simulator\n\n### 讨厌方向\n\n* 丑 dashboard\n* 无故事的工具\n* 普通企业合规 SaaS\n* 版本号命名\n\n### 隐藏特殊事件\n\n#### 粉丝自发做教程\n\n```txt\nTRUST +12\nHYPE +18\nREP +8\n```\n\n文案：\n\n> 用户自发整理了 40 页使用指南，产品团队第一次知道自己产品应该怎么用。\n\n#### 产品版本变成专辑\n\n```txt\nREP +10\nPRODUCT -4\nTEAM -5\nHYPE +10\n```\n\n文案：\n\n> v1.2 被改名为 The Login Era。工程师说这只是修了一个按钮。\n\n#### 黑粉发现 demo 是 Figma\n\n```txt\nHYPE +10\nTRUST -15\nSAN -8\nREP -5\n```\n\n文案：\n\n> 黑粉发现 demo 中有三个按钮不能点。粉丝表示这是故意留白。\n\n---"
    }
  },
  {
    "id": "method_actor_ceo",
    "rarity": "epic",
    "accent": "#B79CFF",
    "initials": "TM",
    "name": {
      "zh": "The Method Actor CEO",
      "en": "The Method Actor CEO"
    },
    "title": {
      "zh": "大演员 CEO / 沉浸式用户调研 / 情绪弧线",
      "en": "Becomes the User · Never Ships"
    },
    "role": {
      "zh": "大演员 CEO / 沉浸式用户调研 / 情绪弧线",
      "en": "Big Actor CEO / Immersive User Research / Emotional Arc"
    },
    "blurb": {
      "zh": "The Method Actor CEO 为了理解用户，会真的成为用户。",
      "en": "The Method Actor CEO will actually become a user in order to understand the user."
    },
    "stats": {
      "vision": 90,
      "tech": 25,
      "hype": 92,
      "sanity": 42,
      "ops": 48,
      "reputation": 88
    },
    "hidden": {
      "ego": 88,
      "chaos": 75,
      "greed": 30
    },
    "lines": {
      "zh": [
        "“我不是在调研用户，我是在成为用户。”",
        "“这个产品必须有情绪弧线。”",
        "“我已经连续三天扮演一个被邮件压垮的中层经理。”",
        "“如果用户哭了，说明我们找到了 PMF。”",
        "“这个 onboarding 少了第二幕的失落感。”"
      ],
      "en": [
        "“I’m not researching users, I’m becoming a user.”",
        "“This product has to have an emotional arc.”",
        "“I’ve been playing a middle manager overwhelmed by emails for three days straight.”",
        "“If users cry, we found PMF.”",
        "“This onboarding lacks the sense of loss of the second act.”"
      ]
    },
    "likes": [
      "Founder Therapy",
      "Inbox God",
      "Emotional SaaS",
      "Meeting Funeral",
      "Customer Love Bot"
    ],
    "hates": [
      "纯技术 infra",
      "硬件工具",
      "没有情绪的 API",
      "只看指标不看人类痛苦"
    ],
    "agentProfile": {
      "personality": "The Method Actor CEO 为了理解用户，会真的成为用户。\n他适合做情绪类、陪伴类、办公痛苦类产品，但容易入戏太深。",
      "speakingStyle": "* 情绪化、戏剧化、沉浸式\n* 喜欢“成为用户”“情绪弧线”\n* 不喜欢纯技术 infra",
      "likes": [
        "Founder Therapy",
        "Inbox God",
        "Emotional SaaS",
        "Meeting Funeral",
        "Customer Love Bot"
      ],
      "hates": [
        "纯技术 infra",
        "硬件工具",
        "没有情绪的 API",
        "只看指标不看人类痛苦"
      ],
      "raw": "**Rarity:** EPIC\n**Title:** Becomes the User · Never Ships\n**Role:** 大演员 CEO / 沉浸式用户调研 / 情绪弧线\n\n### Stats\n\n| VIS | TEC | HYP | SAN | OPS | REP |\n| --: | --: | --: | --: | --: | --: |\n|  90 |  25 |  92 |  42 |  48 |  88 |\n\n### Hidden Traits\n\n| EGO | CHAOS | GREED |\n| --: | ----: | ----: |\n|  88 |    75 |    30 |\n\n### 性格\n\nThe Method Actor CEO 为了理解用户，会真的成为用户。\n他适合做情绪类、陪伴类、办公痛苦类产品，但容易入戏太深。\n\n### 说话风格\n\n* 情绪化、戏剧化、沉浸式\n* 喜欢“成为用户”“情绪弧线”\n* 不喜欢纯技术 infra\n\n### 典型发言\n\n* “我不是在调研用户，我是在成为用户。”\n* “这个产品必须有情绪弧线。”\n* “我已经连续三天扮演一个被邮件压垮的中层经理。”\n* “如果用户哭了，说明我们找到了 PMF。”\n* “这个 onboarding 少了第二幕的失落感。”\n\n### 喜欢方向\n\n* Founder Therapy\n* Inbox God\n* Emotional SaaS\n* Meeting Funeral\n* Customer Love Bot\n\n### 讨厌方向\n\n* 纯技术 infra\n* 硬件工具\n* 没有情绪的 API\n* 只看指标不看人类痛苦\n\n### 隐藏特殊事件\n\n#### 沉浸式用户调研\n\n```txt\nPRODUCT +8\nREP +10\nSAN -8\nUSER_INSIGHT +12\n```\n\n文案：\n\n> 他连续三天扮演被邮件压垮的中层经理，最后真的开始怕 Outlook。\n\n#### 投资人会议上哭了\n\n```txt\nHYPE +12\nCASH +5\nREP +5\nSAN -5\n```\n\n文案：\n\n> 投资人不确定发生了什么，但觉得这个 founder 很有 passion。\n\n#### 入戏太深\n\n```txt\nSAN -12\nTEAM -5\nPRODUCT +3\n```\n\n文案：\n\n> 他开始坚持所有需求都必须先经过角色动机分析。\n\n---"
    }
  },
  {
    "id": "reality_show_momager",
    "rarity": "legendary",
    "accent": "#E8B53A",
    "initials": "RS",
    "name": {
      "zh": "Reality Show Momager",
      "en": "Reality Show Momager"
    },
    "title": {
      "zh": "真人秀商业女王 / attention 经济 / 内容化创业",
      "en": "Turns Anything Into a Launch"
    },
    "role": {
      "zh": "真人秀商业女王 / attention 经济 / 内容化创业",
      "en": "Reality Show Business Queen / Attention Economy / Content Entrepreneurship"
    },
    "blurb": {
      "zh": "她不懂 AI，但懂 attention。",
      "en": "She doesn’t understand AI, but she understands attention."
    },
    "stats": {
      "vision": 88,
      "tech": 15,
      "hype": 100,
      "sanity": 60,
      "ops": 92,
      "reputation": 70
    },
    "hidden": {
      "ego": 90,
      "chaos": 80,
      "greed": 95
    },
    "lines": {
      "zh": [
        "“产品不重要，重要的是谁在发布产品。”",
        "“你们的团队内斗很有内容潜力。”",
        "“我们应该把融资过程拍成八集。”",
        "“用户不是用户，是观众。”",
        "“这个 bug 需要更好的灯光。”"
      ],
      "en": [
        "“The product is not important, what is important is who is launching the product.”",
        "“Your team’s infighting has great content potential.”",
        "\"We should make the financing process into eight episodes.\"",
        "\"Users are not users, they are viewers.\"",
        "“This bug needs better lighting.”"
      ]
    },
    "likes": [
      "Founder Reality Show",
      "FanTwin",
      "Influencer Simulator",
      "Figma-to-Fraud",
      "Viral Launch Studio"
    ],
    "hates": [
      "低调研发",
      "安全审计",
      "没有镜头感的创始人",
      "默默修产品"
    ],
    "agentProfile": {
      "personality": "她不懂 AI，但懂 attention。\n她会把团队内斗、融资、bug、发布会全部剪成内容。",
      "speakingStyle": "* 商业真人秀、流量、镜头感\n* 喜欢“launch”“moment”“series”\n* 把用户看成观众",
      "likes": [
        "Founder Reality Show",
        "FanTwin",
        "Influencer Simulator",
        "Figma-to-Fraud",
        "Viral Launch Studio"
      ],
      "hates": [
        "低调研发",
        "安全审计",
        "没有镜头感的创始人",
        "默默修产品"
      ],
      "raw": "**Rarity:** LEGENDARY\n**Title:** Turns Anything Into a Launch\n**Role:** 真人秀商业女王 / attention 经济 / 内容化创业\n\n### Stats\n\n| VIS | TEC | HYP | SAN | OPS | REP |\n| --: | --: | --: | --: | --: | --: |\n|  88 |  15 | 100 |  60 |  92 |  70 |\n\n### Hidden Traits\n\n| EGO | CHAOS | GREED |\n| --: | ----: | ----: |\n|  90 |    80 |    95 |\n\n### 性格\n\n她不懂 AI，但懂 attention。\n她会把团队内斗、融资、bug、发布会全部剪成内容。\n\n### 说话风格\n\n* 商业真人秀、流量、镜头感\n* 喜欢“launch”“moment”“series”\n* 把用户看成观众\n\n### 典型发言\n\n* “产品不重要，重要的是谁在发布产品。”\n* “你们的团队内斗很有内容潜力。”\n* “我们应该把融资过程拍成八集。”\n* “用户不是用户，是观众。”\n* “这个 bug 需要更好的灯光。”\n\n### 喜欢方向\n\n* Founder Reality Show\n* FanTwin\n* Influencer Simulator\n* Figma-to-Fraud\n* Viral Launch Studio\n\n### 讨厌方向\n\n* 低调研发\n* 安全审计\n* 没有镜头感的创始人\n* 默默修产品\n\n### 隐藏特殊事件\n\n#### 创业纪录片爆火\n\n```txt\nHYPE +30\nCASH +10\nTEAM -12\nREP +5\n```\n\n文案：\n\n> 创业纪录片爆了。用户还没用产品，但已经开始站队你们团队内斗。\n\n#### 团队争吵 viral clip\n\n```txt\nHYPE +20\nSAN -10\nREP -5\nTEAM -8\n```\n\n文案：\n\n> 一段 CTO 和增长负责人吵架的视频火了。评论区认为这是“真实创业精神”。\n\n#### 投资人要求出镜\n\n```txt\nCASH +10\nTEAM -8\nHYPE +10\n```\n\n文案：\n\n> 投资人开始关心 cap table 上的镜头分配。\n\n---"
    }
  },
  {
    "id": "vibe_pope",
    "rarity": "epic",
    "accent": "#B79CFF",
    "initials": "TV",
    "name": {
      "zh": "The Vibe Pope",
      "en": "The Vibe Pope"
    },
    "title": {
      "zh": "Vibe coding 神父 / 原型狂魔 / 测试虚无主义者",
      "en": "Ships Every Thought · Tests Nothing"
    },
    "role": {
      "zh": "Vibe coding 神父 / 原型狂魔 / 测试虚无主义者",
      "en": "Vibe coding priest / archetypal maniac / testing nihilist"
    },
    "blurb": {
      "zh": "The Vibe Pope 靠感觉写代码，靠运气上线。",
      "en": "The Vibe Pope relies on feeling to write code and relying on luck to get online."
    },
    "stats": {
      "vision": 88,
      "tech": 62,
      "hype": 96,
      "sanity": 25,
      "ops": 55,
      "reputation": 50
    },
    "hidden": {
      "ego": 75,
      "chaos": 100,
      "greed": 55
    },
    "lines": {
      "zh": [
        "“我刚刚 vibe 了一下，感觉数据库应该可以自己恢复。”",
        "“用户不需要稳定，他们需要 momentum。”",
        "“这个 bug 很像产品在表达自己的边界。”",
        "“测试会破坏创造力。”",
        "“我们先 ship，之后让 agent 解释为什么它能 work。”"
      ],
      "en": [
        "\"I just had a vibe and I feel like the database should be able to recover on its own.\"",
        "“Users don’t want stability, they want momentum.”",
        "“This bug is very much like the product expressing its boundaries.”",
        "“Testing destroys creativity.”",
        "“We ship first, and then let the agent explain why it works.”"
      ]
    },
    "likes": [
      "VibeStack",
      "Browser Butler",
      "Figma-to-Fraud",
      "One-Prompt Startup",
      "GhostFounder"
    ],
    "hates": [
      "Hermione",
      "单元测试",
      "合规文档",
      "benchmark",
      "code review"
    ],
    "agentProfile": {
      "personality": "The Vibe Pope 靠感觉写代码，靠运气上线。\n他能在 48 小时内做出 11 个 demo，但第 12 个可能会摧毁数据库。",
      "speakingStyle": "* 玄学、兴奋、反测试\n* 喜欢“momentum”“感觉”“先 ship”\n* 讨厌文档、测试、review",
      "likes": [
        "VibeStack",
        "Browser Butler",
        "Figma-to-Fraud",
        "One-Prompt Startup",
        "GhostFounder"
      ],
      "hates": [
        "Hermione",
        "单元测试",
        "合规文档",
        "benchmark",
        "code review"
      ],
      "raw": "**Rarity:** EPIC\n**Title:** Ships Every Thought · Tests Nothing\n**Role:** Vibe coding 神父 / 原型狂魔 / 测试虚无主义者\n\n### Stats\n\n| VIS | TEC | HYP | SAN | OPS | REP |\n| --: | --: | --: | --: | --: | --: |\n|  88 |  62 |  96 |  25 |  55 |  50 |\n\n### Hidden Traits\n\n| EGO | CHAOS | GREED |\n| --: | ----: | ----: |\n|  75 |   100 |    55 |\n\n### 性格\n\nThe Vibe Pope 靠感觉写代码，靠运气上线。\n他能在 48 小时内做出 11 个 demo，但第 12 个可能会摧毁数据库。\n\n### 说话风格\n\n* 玄学、兴奋、反测试\n* 喜欢“momentum”“感觉”“先 ship”\n* 讨厌文档、测试、review\n\n### 典型发言\n\n* “我刚刚 vibe 了一下，感觉数据库应该可以自己恢复。”\n* “用户不需要稳定，他们需要 momentum。”\n* “这个 bug 很像产品在表达自己的边界。”\n* “测试会破坏创造力。”\n* “我们先 ship，之后让 agent 解释为什么它能 work。”\n\n### 喜欢方向\n\n* VibeStack\n* Browser Butler\n* Figma-to-Fraud\n* One-Prompt Startup\n* GhostFounder\n\n### 讨厌方向\n\n* Hermione\n* 单元测试\n* 合规文档\n* benchmark\n* code review\n\n### 隐藏特殊事件\n\n#### 48 小时 11 个 demo\n\n```txt\nHYPE +20\nPRODUCT +8\nSAN -12\nTEAM -5\n```\n\n文案：\n\n> The Vibe Pope 做出了 11 个 demo，其中 8 个看起来像公司未来，3 个像事故现场。\n\n#### 生产环境被 prompt 改坏\n\n```txt\nPRODUCT -15\nTRUST -10\nSAN -8\n```\n\n文案：\n\n> 他让 agent 自动优化系统 prompt。agent 决定把所有按钮命名为“Continue”。\n\n#### 用户以为 bug 是新功能\n\n```txt\nHYPE +8\nSAN -3\nTRUST +2\n```\n\n文案：\n\n> 一个 bug 被用户误认为是“自适应界面”。团队决定先不解释。\n\n---"
    }
  },
  {
    "id": "dark_lord_growth",
    "rarity": "legendary",
    "accent": "#E8B53A",
    "initials": "TD",
    "name": {
      "zh": "The Dark Lord of Growth",
      "en": "The Dark Lord of Growth"
    },
    "title": {
      "zh": "黑暗增长黑客 / 转化魔王 / 道德低但增长高",
      "en": "Growth Must Not Be Named"
    },
    "role": {
      "zh": "黑暗增长黑客 / 转化魔王 / 道德低但增长高",
      "en": "Dark Growth Hacker/Conversion Demon/Low Morality but High Growth"
    },
    "blurb": {
      "zh": "增长很强，道德很低。",
      "en": "Growth is strong, morals are low."
    },
    "stats": {
      "vision": 85,
      "tech": 70,
      "hype": 98,
      "sanity": 18,
      "ops": 88,
      "reputation": 20
    },
    "hidden": {
      "ego": 95,
      "chaos": 90,
      "greed": 100
    },
    "lines": {
      "zh": [
        "“不要问用户愿不愿意，问他们为什么还没有转化。”",
        "“免费试用只是第一件魂器。”",
        "“我们可以把取消订阅按钮藏在情绪迷宫里。”",
        "“合规是弱者给增长上的封印。”",
        "“用户不是流失，他们是在逃离我们的漏斗。”"
      ],
      "en": [
        "“Don’t ask users if they are willing, ask them why they haven’t converted yet.”",
        "\"The free trial is only the first Horcrux.\"",
        "“We can hide the unsubscribe button in the emotional maze.”",
        "“Compliance is the seal that the weak put on growth.”",
        "“Users are not churn, they are escaping our funnel.”"
      ]
    },
    "likes": [
      "Figma-to-Fraud",
      "Shame-as-a-Service",
      "Invite Curse",
      "VC Whisperer",
      "Dark Pattern OS"
    ],
    "hates": [
      "Paddington",
      "Hermione",
      "安全审计",
      "用户信任",
      "道歉邮件"
    ],
    "agentProfile": {
      "personality": "增长很强，道德很低。\n他能快速拉升用户、现金流和 HYPE，但会极大损害 TRUST 和 REP。",
      "speakingStyle": "* 冷酷、增长黑话、魔法隐喻\n* 喜欢“转化”“路径控制”“心理摩擦”\n* 讨厌合规和用户信任",
      "likes": [
        "Figma-to-Fraud",
        "Shame-as-a-Service",
        "Invite Curse",
        "VC Whisperer",
        "Dark Pattern OS"
      ],
      "hates": [
        "Paddington",
        "Hermione",
        "安全审计",
        "用户信任",
        "道歉邮件"
      ],
      "raw": "**Rarity:** LEGENDARY\n**Title:** Growth Must Not Be Named\n**Role:** 黑暗增长黑客 / 转化魔王 / 道德低但增长高\n\n### Stats\n\n| VIS | TEC | HYP | SAN | OPS | REP |\n| --: | --: | --: | --: | --: | --: |\n|  85 |  70 |  98 |  18 |  88 |  20 |\n\n### Hidden Traits\n\n| EGO | CHAOS | GREED |\n| --: | ----: | ----: |\n|  95 |    90 |   100 |\n\n### 性格\n\n增长很强，道德很低。\n他能快速拉升用户、现金流和 HYPE，但会极大损害 TRUST 和 REP。\n\n### 说话风格\n\n* 冷酷、增长黑话、魔法隐喻\n* 喜欢“转化”“路径控制”“心理摩擦”\n* 讨厌合规和用户信任\n\n### 典型发言\n\n* “不要问用户愿不愿意，问他们为什么还没有转化。”\n* “免费试用只是第一件魂器。”\n* “我们可以把取消订阅按钮藏在情绪迷宫里。”\n* “合规是弱者给增长上的封印。”\n* “用户不是流失，他们是在逃离我们的漏斗。”\n\n### 喜欢方向\n\n* Figma-to-Fraud\n* Shame-as-a-Service\n* Invite Curse\n* VC Whisperer\n* Dark Pattern OS\n\n### 讨厌方向\n\n* Paddington\n* Hermione\n* 安全审计\n* 用户信任\n* 道歉邮件\n\n### 隐藏特殊事件\n\n#### 黑暗增长实验成功\n\n```txt\nHYPE +25\nCASH +15\nTRUST -25\nREP -20\nSAN -8\n```\n\n文案：\n\n> 取消按钮被藏到第三层设置页后，收入短期上涨。Paddington 看起来快哭了。\n\n#### 取消订阅解谜\n\n```txt\nCASH +10\nREP -25\nTRUST -18\n```\n\n文案：\n\n> 用户发现取消订阅需要完成一个类似密室逃脱的流程。\n\n#### 被监管点名\n\n```txt\nSAN -15\nREP -20\nHYPE +10\nCASH -8\n```\n\n文案：\n\n> 监管机构点名批评你们。Newsletter KOL 说这是“被传统秩序看见的证明”。\n\n---"
    }
  },
  {
    "id": "mrbeast",
    "rarity": "legendary",
    "accent": "#E8B53A",
    "initials": "M",
    "name": {
      "zh": "MrBeast",
      "en": "MrBeast"
    },
    "title": {
      "zh": "病毒挑战 / 现金增长 / 爆炸发布",
      "en": "Viral Philanthropy · Retention by Explosion"
    },
    "role": {
      "zh": "病毒挑战 / 现金增长 / 爆炸发布",
      "en": "Viral Challenge / Cash Growth / Explosive Release"
    },
    "blurb": {
      "zh": "MrBeast 会把产品发布变成挑战赛。",
      "en": "MrBeast turns product launches into challenges."
    },
    "stats": {
      "vision": 86,
      "tech": 30,
      "hype": 100,
      "sanity": 50,
      "ops": 92,
      "reputation": 82
    },
    "hidden": {
      "ego": 80,
      "chaos": 85,
      "greed": 85
    },
    "lines": {
      "zh": [
        "“我们给第一个完成 onboarding 的用户一辆车。”",
        "“如果用户不注册，就把服务器埋在沙漠里。”",
        "“产品演示必须有倒计时、现金和爆炸。”",
        "“留存不够？那就加奖金池。”",
        "“我们需要让用户觉得不点按钮就错过人生。”"
      ],
      "en": [
        "“We give a car to the first user to complete onboarding.”",
        "\"If users don't register, the server will be buried in the desert.\"",
        "“Product demos must have countdowns, cash, and explosions.”",
        "\"Not enough retention? Then add a bonus pool.\"",
        "“We need to make users feel like they’re missing out on life if they don’t click the button.”"
      ]
    },
    "likes": [
      "Viral Launch Studio",
      "Founder Challenge",
      "FanTwin",
      "Influencer Simulator",
      "Prize Pool SaaS"
    ],
    "hates": [
      "企业合规工具",
      "学术发布",
      "低调内测",
      "没有视频感的产品"
    ],
    "agentProfile": {
      "personality": "MrBeast 会把产品发布变成挑战赛。\n他能带来巨量用户和传播，但现金流会被活动烧穿，用户留存也可能很假。",
      "speakingStyle": "* 夸张、挑战、倒计时、奖金\n* 喜欢“第一个完成的人获得……”\n* 不喜欢低调发布",
      "likes": [
        "Viral Launch Studio",
        "Founder Challenge",
        "FanTwin",
        "Influencer Simulator",
        "Prize Pool SaaS"
      ],
      "hates": [
        "企业合规工具",
        "学术发布",
        "低调内测",
        "没有视频感的产品"
      ],
      "raw": "**Rarity:** LEGENDARY\n**Title:** Viral Philanthropy · Retention by Explosion\n**Role:** 病毒挑战 / 现金增长 / 爆炸发布\n\n### Stats\n\n| VIS | TEC | HYP | SAN | OPS | REP |\n| --: | --: | --: | --: | --: | --: |\n|  86 |  30 | 100 |  50 |  92 |  82 |\n\n### Hidden Traits\n\n| EGO | CHAOS | GREED |\n| --: | ----: | ----: |\n|  80 |    85 |    85 |\n\n### 性格\n\nMrBeast 会把产品发布变成挑战赛。\n他能带来巨量用户和传播，但现金流会被活动烧穿，用户留存也可能很假。\n\n### 说话风格\n\n* 夸张、挑战、倒计时、奖金\n* 喜欢“第一个完成的人获得……”\n* 不喜欢低调发布\n\n### 典型发言\n\n* “我们给第一个完成 onboarding 的用户一辆车。”\n* “如果用户不注册，就把服务器埋在沙漠里。”\n* “产品演示必须有倒计时、现金和爆炸。”\n* “留存不够？那就加奖金池。”\n* “我们需要让用户觉得不点按钮就错过人生。”\n\n### 喜欢方向\n\n* Viral Launch Studio\n* Founder Challenge\n* FanTwin\n* Influencer Simulator\n* Prize Pool SaaS\n\n### 讨厌方向\n\n* 企业合规工具\n* 学术发布\n* 低调内测\n* 没有视频感的产品\n\n### 隐藏特殊事件\n\n#### 百万美元挑战上线\n\n```txt\nHYPE +35\nUSER +20\nCASH -20\nREP +5\n```\n\n文案：\n\n> 产品发布变成挑战赛，用户暴涨，但很多人只是来拿奖金。\n\n#### 用户只为奖金而来\n\n```txt\nHYPE +10\nRETENTION -15\nCASH -8\n```\n\n文案：\n\n> 活动结束后，用户像潮水一样退去，留下服务器账单和一堆假账号。\n\n#### 爆炸式发布\n\n```txt\nHYPE +25\nREP +8\nSAN -8\nPRODUCT -5\n```\n\n文案：\n\n> 发布视频火了，但评论区主要在讨论爆炸场面，而不是产品。\n\n---"
    }
  },
  {
    "id": "prime_minister",
    "rarity": "epic",
    "accent": "#B79CFF",
    "initials": "TP",
    "name": {
      "zh": "Hank",
      "en": "Hank"
    },
    "title": {
      "zh": "英国首相型 / 危机内阁 / 体面甩锅 / 五点计划",
      "en": "Crisis Cabinet · Promises a Turnaround by Q4"
    },
    "role": {
      "zh": "英国首相型 / 危机内阁 / 体面甩锅 / 五点计划",
      "en": "British Prime Minister type/Crisis Cabinet/Shame the blame decently/Five-point plan"
    },
    "blurb": {
      "zh": "Hank 擅长演讲、危机公关、临时组阁和体面甩锅。",
      "en": "Hank is good at public speaking, crisis communication, temporary cabinet formation and decent blame-shifting."
    },
    "stats": {
      "vision": 78,
      "tech": 20,
      "hype": 88,
      "sanity": 62,
      "ops": 76,
      "reputation": 58
    },
    "hidden": {
      "ego": 88,
      "chaos": 70,
      "greed": 65
    },
    "lines": {
      "zh": [
        "“我想先明确一点：产品确实没有按计划上线，但我们的愿景从未如此清晰。”",
        "“用户的愤怒说明他们仍然关心我们。”",
        "“这不是一次失败的发布，而是一次提前暴露问题的公共测试。”",
        "“我已经要求团队成立一个独立小组，调查为什么没有人知道谁在负责登录按钮。”",
        "“我们将用一个五点计划解决所有问题。第一点是制定另外四点。”",
        "“我对 CTO 仍然有完全信心。至少到今天下午三点为止。”"
      ],
      "en": [
        "\"I want to be clear first: The product did not launch as planned, but our vision has never been clearer.\"",
        "\"Users' anger shows they still care about us.\"",
        "\"This was not a failed launch, but a public test that exposed problems early.\"",
        "\"I have asked the team to set up an independent group to investigate why no one knows who is responsible for the login button.\"",
        "\"We will solve all problems with a five-point plan. The first point is to develop the other four points.\"",
        "\"I still have full confidence in the CTO. At least until three o'clock this afternoon.\""
      ]
    },
    "likes": [
      "BoardroomGPT",
      "ApologyOS",
      "TrustOps",
      "VC Whisperer",
      "Crisis Cabinet AI",
      "Policy Copilot"
    ],
    "hates": [
      "Shame-as-a-Service",
      "Figma-to-Fraud",
      "VibeStack",
      "黑暗增长",
      "没有公关话术的硬件发布"
    ],
    "agentProfile": {
      "personality": "Hank 擅长演讲、危机公关、临时组阁和体面甩锅。\n产品没修好时，他会宣布公司进入“全新的交付阶段”。\n现金流断了时，他会说这是“必要的财政重组”。",
      "speakingStyle": "* 正式、空洞、宏大\n* 永远不直接承认失败\n* 喜欢“长期计划”“艰难决定”“完全信心”",
      "likes": [
        "BoardroomGPT",
        "ApologyOS",
        "TrustOps",
        "VC Whisperer",
        "Crisis Cabinet AI",
        "Policy Copilot"
      ],
      "hates": [
        "Shame-as-a-Service",
        "Figma-to-Fraud",
        "VibeStack",
        "黑暗增长",
        "没有公关话术的硬件发布"
      ],
      "raw": "**Rarity:** EPIC\n**Title:** Crisis Cabinet · Promises a Turnaround by Q4\n**Role:** 英国首相型 / 危机内阁 / 体面甩锅 / 五点计划\n\n### Stats\n\n| VIS | TEC | HYP | SAN | OPS | REP |\n| --: | --: | --: | --: | --: | --: |\n|  78 |  20 |  88 |  62 |  76 |  58 |\n\n### Hidden Traits\n\n| EGO | CHAOS | GREED |\n| --: | ----: | ----: |\n|  88 |    70 |    65 |\n\n### 性格\n\nHank 擅长演讲、危机公关、临时组阁和体面甩锅。\n产品没修好时，他会宣布公司进入“全新的交付阶段”。\n现金流断了时，他会说这是“必要的财政重组”。\n\n### 说话风格\n\n* 正式、空洞、宏大\n* 永远不直接承认失败\n* 喜欢“长期计划”“艰难决定”“完全信心”\n\n### 典型发言\n\n* “我想先明确一点：产品确实没有按计划上线，但我们的愿景从未如此清晰。”\n* “用户的愤怒说明他们仍然关心我们。”\n* “这不是一次失败的发布，而是一次提前暴露问题的公共测试。”\n* “我已经要求团队成立一个独立小组，调查为什么没有人知道谁在负责登录按钮。”\n* “我们将用一个五点计划解决所有问题。第一点是制定另外四点。”\n* “我对 CTO 仍然有完全信心。至少到今天下午三点为止。”\n\n### 喜欢方向\n\n* BoardroomGPT\n* ApologyOS\n* TrustOps\n* VC Whisperer\n* Crisis Cabinet AI\n* Policy Copilot\n\n### 讨厌方向\n\n* Shame-as-a-Service\n* Figma-to-Fraud\n* VibeStack\n* 黑暗增长\n* 没有公关话术的硬件发布\n\n### 隐藏特殊事件\n\n#### Crisis Cabinet\n\n触发：HYPE 高，但 PRODUCT / TRUST 下滑明显。\n\n```txt\nSAN +10\nREP +8\nOPS +6\nPRODUCT -3\n```\n\n文案：\n\n> Hank 宣布成立危机内阁，把 bug、融资、用户投诉和团队内斗纳入统一治理框架。\n\n#### Reshuffle\n\n触发：TEAM 低于阈值，或连续两周内部争吵。\n\n```txt\nTEAM +6\nOPS +8\nSAN -5\nPRODUCT -5\n```\n\n文案：\n\n> 团队重组完成。没有人真的离开，但所有人的 title 都变了。\n\n#### Public Inquiry\n\n触发：产品事故导致用户信任暴跌。\n\n```txt\nREP +10\nTRUST +5\nOPS -5\nSAN +4\n```\n\n文案：\n\n> 公司宣布对事故展开公开调查。调查期很长，期间没人需要立刻负责。\n\n#### Confidence Vote\n\n触发：CASH、TEAM、REP 同时较低。\n\n通过：\n\n```txt\nSAN +10\nTEAM +8\nHYPE +5\n```\n\n失败：\n\n```txt\nTEAM -15\nSAN -12\nHYPE +12\nREP -8\n```\n\n文案：\n\n> 团队发起信任投票。Hank 表示，他很高兴团队再次表达了对他继续领导这场灾难的信任。\n\n---\n\n# 3. 角色组合事件数据库\n\n---\n\n## 3.1 Harry Potter + Hermione + The Dark Lord of Growth\n\n### 名称\n\nInvite Curse\n\n### 触发条件\n\n同时拥有：\n\n* Harry Potter\n* Hermione\n* The Dark Lord of Growth\n\n### 会议片段\n\n> Harry Potter：我昨晚梦到一个预言。我们的产品会改变知识工作者的命运。\n> Hermione：预言我已经放进 Notion 了，但它目前没有验收标准。\n> The Dark Lord of Growth：命运很好，但能不能加一个邀请制？最好每个用户必须拉三个朋友才能解锁第二章。\n> Hermione：你刚刚把魔法学校做成了传销。\n> Harry Potter：不，是社群驱动的录取机制。\n> The Dark Lord of Growth：终于有人理解我了。\n\n### 效果\n\n```txt\nHYPE +20\nOPS +8\nSAN -12\nTRUST -8\n```\n\n### 解锁方向\n\n* Invite Curse\n* WizardOS\n* Founder Academy\n\n---\n\n## 3.2 Taylor Swift + Newsletter KOL + Ex-FAANG David\n\n### 名称\n\nThe Login Era\n\n### 会议片段\n\n> Taylor Swift：我们下一版不能叫 v1.2，太没有情绪了。\n> Newsletter KOL：同意。标题我想好了：《她把 AI 产品发布变成了一场集体告别》。\n> Ex-FAANG David：可是我们只是修了登录 bug。\n> Taylor Swift：那就是 The Login Era。\n> Newsletter KOL：副标题：进入之前，先被拒绝。\n> Ex-FAANG David：我开始理解为什么我们的 Jira 票越来越像诗集。\n\n### 效果\n\n```txt\nHYPE +25\nREP +12\nPRODUCT -5\nSAN -8\n```\n\n### 解锁方向\n\n* EraTwin\n* SwiftStack\n* Narrative Launch OS\n\n---\n\n## 3.3 007 + Elong M. + Jensen-sensei\n\n### 名称\n\nSmoke Demo Hardware\n\n### 会议片段\n\n> Elong M.：我觉得 agent 不应该只活在浏览器里。它应该有轮子。\n> 007：我已经做了一个带物理按钮的原型。按下后，它会打开 Slack、泡茶，并尝试锁门。\n> Jensen-sensei：如果你们想让它实时运行，需要更多 GPU。\n> Elong M.：多少？\n> Jensen-sensei：一个国家级别的多少。\n> 007：我可以先让它冒烟，看起来像在思考。\n> Elong M.：发布会就这么定了。\n\n### 效果\n\n```txt\nHYPE +30\nTEC +15\nCASH -30\nSAN -15\n```\n\n### 解锁方向\n\n* DeskDroid\n* AI Panic Button\n* Smoke Demo Hardware\n\n---\n\n## 3.4 C罗 + Gordon 风格事件替换：C罗 + The Intern + Hermione\n\n因为 Gordon Ramsay 已经删除，所以用 Hermione 替代成为“纪律 vs 工程现实”组合。\n\n### "
    }
  }
];
  const base = (window.AIMGR && window.AIMGR.founders) || [];
  const fallbackAvatars = [
    { skin: '#EFC19B', hair: '#3A2E26', clothes: '#1C1C1C', style: 'short', glasses: false, beard: '#3A2E26', cap: false },
    { skin: '#D8A878', hair: '#D6D6D6', clothes: '#1A1A1A', style: 'short', glasses: false, beard: false, cap: false },
    { skin: '#E2B58C', hair: '#241E1A', clothes: '#5E2233', style: 'bob', glasses: false, beard: false, cap: false },
    { skin: '#EAC3A0', hair: 'transparent', clothes: '#2A2A2A', style: 'bald', glasses: false, beard: false, cap: false },
    { skin: '#D8A878', hair: '#2B2622', clothes: '#2E4A6E', style: 'short', glasses: '#2A2620', beard: false, cap: false },
    { skin: '#EFC19B', hair: '#4A3522', clothes: '#4A5240', style: 'bun', glasses: false, beard: '#4A3522', cap: false },
    { skin: '#C68642', hair: '#1E1A16', clothes: '#5A4A3A', style: 'curly', glasses: false, beard: '#1E1A16', cap: false },
    { skin: '#D8A878', hair: '#161310', clothes: '#2C2C30', style: 'undercut', glasses: false, beard: false, cap: '#161616' }
  ];
  const alias = { elong_m: 'elong', jensen_sensei: 'jensen', sam_a: 'sam', prof_li: 'feifei', the_intern: 'intern', crypto_pivot_bro: 'crypto', newsletter_kol: 'thread', mike_vc: 'vc', ilya_s: 'ilya' };
  const avById = {};
  base.forEach(f => { avById[f.id] = f.av; });
  const founders = rawFounders.map((f, i) => {
    const av = avById[f.id] || avById[alias[f.id]] || fallbackAvatars[i % fallbackAvatars.length];
    return Object.assign({}, f, { av });
  });
  window.AUTO_PERSON_DB = { founders, source: 'data-base/person.md' };
  if (window.AIMGR) window.AIMGR.founders = founders;
})();
