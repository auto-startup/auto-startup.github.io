// Auto Startup — 内容库 / content library (bilingual). Sets window.AIMGR.
(function () {
  const F = (zh, en) => ({ zh, en });

  // ---------- 创始人 / Founders ----------
  // av: 卡通头像配置 { skin, hair, clothes, style, glasses(false|color), beard(false|color), cap(false|color) }
  const founders = [
    {
      id: "elong", rarity: "legendary", accent: "#E8B53A", initials: "EM",
      av: { skin: "#EFC19B", hair: "#3A2E26", clothes: "#1C1C1C", style: "short", glasses: false, beard: "#3A2E26", cap: false },
      name: F("马一龙", "Elong M."),
      title: F("火星梦想家 · 凡事先 All-in", "Mars Dreamer · All-in First"),
      blurb: F("先 all-in，再想做什么。想给每只羊都配一个 agent。", "All-in first, figure out the product later. Wants an agent for every sheep."),
      stats: { vision: 99, tech: 71, hype: 98, sanity: 12 },
      lines: F(
        ["这个不够硬核，砍掉一半人重做。", "格局太小，我们应该直接做一个 AI 国家。", "发上火星测一测，地球用户太娇气。", "名字里加个 X，估值立刻翻倍。", "我已经发推了，产品你们看着办。"],
        ["Not hardcore enough. Cut half the team and redo it.", "Too small. We should just build an AI nation-state.", "Ship it to Mars to test, Earth users are too soft.", "Put an X in the name, valuation doubles instantly.", "I already tweeted. You figure out the product."])
    },
    {
      id: "jensen", rarity: "legendary", accent: "#7BD88F", initials: "JH",
      av: { skin: "#D8A878", hair: "#D6D6D6", clothes: "#1A1A1A", style: "short", glasses: false, beard: false, cap: false },
      name: F("黄老板", "Jensen-sensei"),
      title: F("卖铲子的 · 永远缺货", "Shovel Vendor · Always Out of Stock"),
      blurb: F("不关心你做什么，只要你买卡。皮衣是融资护城河。", "Doesn't care what you build, as long as you buy GPUs. The leather jacket is the moat."),
      stats: { vision: 80, tech: 95, hype: 92, sanity: 66 },
      lines: F(
        ["你们这个，得再买八千张卡。", "买得越多，省得越多，这是物理规律。", "产品我不懂，但算力管够。", "缺货才是最好的营销。", "皮衣穿上，故事就成立了。"],
        ["For this, you'll need 8,000 more GPUs.", "The more you buy, the more you save. It's physics.", "I don't get the product, but I've got compute.", "Being out of stock is the best marketing.", "Put on the leather jacket and the story works."])
    },
    {
      id: "sam", rarity: "legendary", accent: "#E8B53A", initials: "SA",
      av: { skin: "#EFC19B", hair: "#5A4030", clothes: "#3A3A3E", style: "short", glasses: false, beard: false, cap: false },
      name: F("山姆·A", "Sam A~"),
      title: F("七万亿叙事工程师", "$7T Narrative Engineer"),
      blurb: F("还没产品，估值先到 AGI。融资以国家为单位。", "No product yet, valuation already at AGI. Raises by the GDP."),
      stats: { vision: 97, tech: 60, hype: 99, sanity: 40 },
      lines: F(
        ["先募七万亿，细节以后再说。", "这不是公司，是通往 AGI 的飞船。", "感受一下，AGI 已经在这屋里了。", "我们要对人类负责（顺便上市）。", "估值先到位，产品总会有的。"],
        ["First we raise seven trillion, details later.", "This isn't a company, it's a spaceship to AGI.", "Feel it — the AGI is already in this room.", "We answer to humanity (and also go public).", "Get the valuation first, the product will come."])
    },
    {
      id: "feifei", rarity: "epic", accent: "#B79CFF", initials: "FL",
      av: { skin: "#E2B58C", hair: "#241E1A", clothes: "#5E2233", style: "bob", glasses: false, beard: false, cap: false },
      name: F("李教授", "Prof. Li"),
      title: F("学术良心 · 空间智能", "Academic Conscience · Spatial Intelligence"),
      blurb: F("唯一真懂技术的人，所以总被另外几个拖下水。", "The only one who actually understands the tech, hence always dragged down."),
      stats: { vision: 88, tech: 96, hype: 55, sanity: 78 },
      lines: F(
        ["能不能先看完数据再吹？", "这个评测设定其实不严谨。", "下一步是空间智能，不是再加一个聊天框。", "我只想安静做研究，但你们不让。", "至少让产品先能跑起来。"],
        ["Can we look at the data before we hype it?", "This benchmark setup isn't actually rigorous.", "The next step is spatial intelligence, not another chat box.", "I just want to do research, but you won't let me.", "At least let the product actually run first."])
    },
    {
      id: "yann", rarity: "epic", accent: "#B79CFF", initials: "YK",
      av: { skin: "#EFC19B", hair: "#BFBFBF", clothes: "#23304A", style: "short", glasses: "#2A2620", beard: false, cap: false },
      name: F("杨教授", "Prof. Yann"),
      title: F("开源原教旨 · 推特嘴炮", "Open-Source Fundamentalist · Reply Guy"),
      blurb: F("白天写论文，晚上在推特宣布大模型是死路。", "Writes papers by day, declares LLMs a dead end on Twitter by night."),
      stats: { vision: 84, tech: 90, hype: 70, sanity: 58 },
      lines: F(
        ["大模型是死路，但我们这个例外。", "必须开源，闭源的都是骗子。", "这套思路我九八年的论文里就有了。", "等我先发条推驳一下他们。", "智能不是堆参数堆出来的。"],
        ["LLMs are a dead end. Except ours.", "It must be open source. Closed source are frauds.", "I had this in a paper back in '98.", "Let me tweet a rebuttal first.", "Intelligence isn't just stacking parameters."])
    },
    {
      id: "ilya", rarity: "legendary", accent: "#E8B53A", initials: "IY",
      av: { skin: "#EAC3A0", hair: "transparent", clothes: "#2A2A2A", style: "bald", glasses: false, beard: false, cap: false },
      name: F("伊·苏", "Ilya~ S."),
      title: F("安全教派 · 神秘失踪", "Safety Cult · Mysteriously Vanished"),
      blurb: F("说一句话就让全场沉默。每隔三个月人间蒸发一次。", "Says one sentence and the room goes quiet. Vanishes every three months."),
      stats: { vision: 95, tech: 94, hype: 80, sanity: 30 },
      lines: F(
        ["我能感觉到 AGI。", "先确保它不毁灭人类，再谈变现。", "（沉默良久）……总之，加大规模就对了。", "有些事我现在不能说。", "我可能下周会消失一阵子。"],
        ["I can feel the AGI.", "First make sure it won't wipe out humanity, then revenue.", "(Long silence)... anyway, just scale it up.", "There are things I can't say right now.", "I might disappear for a while next week."])
    },
    {
      id: "pmdavid", rarity: "rare", accent: "#6FA8FF", initials: "DP",
      av: { skin: "#D8A878", hair: "#2B2622", clothes: "#2E4A6E", style: "short", glasses: "#2A2620", beard: false, cap: false },
      name: F("前大厂·David", "Ex-FAANG David"),
      title: F("流程很多 · 产出很少", "Lots of Process · Little Output"),
      blurb: F("开了十四个对齐会，还没决定用什么字体。", "Held 14 alignment meetings, still hasn't picked a font."),
      stats: { vision: 55, tech: 50, hype: 64, sanity: 70 },
      lines: F(
        ["先拉个群，对齐一下目标。", "这个得走流程，下季度再迭代。", "我在前东家也这么干，后来他们倒闭了。", "我们需要再开几个对齐会。", "先定好 OKR，事情自然就成了。"],
        ["Let's spin up a channel and align on goals first.", "This needs process, we'll iterate next quarter.", "I did this at my last company. They went bankrupt.", "We need a few more alignment meetings.", "Set the OKRs first, the rest follows."])
    },
    {
      id: "intern", rarity: "common", accent: "#9A9A8E", initials: "PA",
      av: { skin: "#D8A878", hair: "#221E1A", clothes: "#3A6B4A", style: "short", glasses: false, beard: false, cap: "#C24A3A" },
      name: F("实习生·小帕", "The Intern"),
      title: F("五个提示工程师之一", "One of Five Prompt Engineers"),
      blurb: F("工资最低，提交最多，整个产品其实是他写的。", "Lowest paid, most commits. The whole product is secretly his."),
      stats: { vision: 40, tech: 88, hype: 20, sanity: 64 },
      lines: F(
        ["那个……其实我昨晚已经写完了。", "我们真的还要再加一个 agent 吗？", "好的我改，这是第七次改需求了。", "上线前我能先睡两小时吗？", "其实整个产品是我一个人写的。"],
        ["Um... I actually finished it last night.", "Do we really need to add another agent?", "Sure I'll change it. This is the seventh pivot.", "Can I sleep two hours before we ship?", "The whole product is secretly just me."])
    },
    {
      id: "crypto", rarity: "rare", accent: "#6FA8FF", initials: "CB",
      av: { skin: "#EFC19B", hair: "#1E1A16", clothes: "#5A4418", style: "short", glasses: "#111111", beard: "#1E1A16", cap: false },
      name: F("加密遗老", "Crypto Pivot Bro"),
      title: F("上轮 Web3 · 这轮全押 AI", "Last Cycle Web3 · This Cycle All-in AI"),
      blurb: F("把白皮书里的区块链全替换成 AI，估值翻了十倍。", "Find-replaced 'blockchain' with 'AI' in the whitepaper. 10x'd the valuation."),
      stats: { vision: 60, tech: 35, hype: 90, sanity: 44 },
      lines: F(
        ["我们发个 token——哦不对，这轮不能提。", "去中心化 agent 网络，懂的都懂。", "兄弟，这次是真的，跟上轮不一样。", "把白皮书里区块链全换成 AI 就行。", "社区共识比产品重要。"],
        ["We issue a token— oh wait, can't say that this cycle.", "A decentralized agent network. If you know, you know.", "Bro, this time it's real, not like last cycle.", "Just find-replace 'blockchain' with 'AI'.", "Community consensus matters more than product."])
    },
    {
      id: "thread", rarity: "rare", accent: "#6FA8FF", initials: "TG",
      av: { skin: "#EFC19B", hair: "#4A3522", clothes: "#4A5240", style: "bun", glasses: false, beard: "#4A3522", cap: false },
      name: F("推特哲学家", "Thread Guy"),
      title: F("只产出 Thought Leadership", "Ships Only Thought Leadership"),
      blurb: F("产品还没影，已经写了九条万赞长推讲为什么会赢。", "No product yet, but already wrote a 9-tweet viral thread on why we'll win."),
      stats: { vision: 78, tech: 25, hype: 95, sanity: 50 },
      lines: F(
        ["1/ 聊聊为什么‘工作’本身正在被重新定义 🧵", "这个洞察得先发推，产品回头再说。", "我们做的不是产品，是一场运动。", "等我写完这条长推就来开会。", "影响力本身就是护城河。"],
        ["1/ Let's talk about why work itself is being redefined 🧵", "This insight needs a thread first, product later.", "We're not building a product, we're building a movement.", "Let me finish this thread and I'll join the meeting.", "Influence itself is the moat."])
    },
    {
      id: "demis", rarity: "legendary", accent: "#7BD88F", initials: "DM",
      av: { skin: "#E2B58C", hair: "#2B2117", clothes: "#33414F", style: "short", glasses: false, beard: false, cap: false },
      name: F("棋圣·哈萨", "The Chess Master"),
      title: F("下棋的 · 顺手解决了蛋白质", "Plays Games · Solved Protein Folding On the Side"),
      blurb: F("把一切都变成一个有胜负的游戏，包括公司经营。", "Turns everything into a game with a win condition, including running the company."),
      stats: { vision: 92, tech: 97, hype: 74, sanity: 62 },
      lines: F(
        ["我先用它下盘棋，顺手解决个蛋白质。", "能不能先定义一个明确的胜负规则？", "我们应该在仿真里先跑一百万局。", "商业化？那是你们的事。", "名字交给我，叫 Alpha 什么都行。"],
        ["Let me play a game with it and solve a protein or two.", "Can we first define a clear win condition?", "We should run a million simulations first.", "Commercialization? That's your department.", "Leave the name to me, Alpha-anything works."])
    },
    {
      id: "safety", rarity: "epic", accent: "#B79CFF", initials: "DA",
      av: { skin: "#C68642", hair: "#1E1A16", clothes: "#5A4A3A", style: "curly", glasses: false, beard: "#1E1A16", cap: false },
      name: F("安全派·达里", "The Safety Founder"),
      title: F("天天发安全报告 · 顺便融资", "Ships Safety Reports · And Raises Rounds"),
      blurb: F("在确认对齐之前，坚决不上线（但坚决先融资）。", "Refuses to ship before alignment is confirmed (but happily raises first)."),
      stats: { vision: 86, tech: 88, hype: 78, sanity: 55 },
      lines: F(
        ["我先写一份四十页的安全报告。", "在确认对齐之前，不建议上线。", "我们要对未来一百年负责。", "红队测试还没做完。", "能力越大越要克制（先融一轮）。"],
        ["Let me write a 40-page safety report first.", "I don't recommend shipping before alignment is confirmed.", "We're responsible for the next hundred years.", "Red-teaming isn't finished yet.", "With great power comes restraint (and a round first)."])
    },
    {
      id: "longxiao", rarity: "rare", accent: "#6FA8FF", initials: "WB",
      av: { skin: "#E8C29A", hair: "#1B1714", clothes: "#2A3A2A", style: "short", glasses: "#2A2620", beard: false, cap: false },
      name: F("王博士", "Dr. Wang"),
      title: F("对标 GPT-4 · 已对标三年", "Benchmarking GPT-4 · For Three Years"),
      blurb: F("每个月都说下个月一定追上，刷榜是核心竞争力。", "Says he'll catch up next month, every month. Leaderboard-climbing is the core competency."),
      stats: { vision: 70, tech: 80, hype: 82, sanity: 50 },
      lines: F(
        ["我们对标 GPT-4，已经对标三年了。", "下个月一定追上，这次真的。", "先把榜刷上去，融资就好谈了。", "我们的中文能力是世界第一。", "海外开源权重，国内闭源收费。"],
        ["We benchmark against GPT-4, three years and counting.", "We'll catch up next month, for real this time.", "Climb the leaderboard first, then fundraising is easy.", "Our Chinese capability is world number one.", "Open weights abroad, closed and paid at home."])
    },
    {
      id: "hardware", rarity: "rare", accent: "#6FA8FF", initials: "AZ",
      av: { skin: "#D8A878", hair: "#161310", clothes: "#2C2C30", style: "undercut", glasses: false, beard: false, cap: "#161616" },
      name: F("硬件天才·阿哲", "The Hardware Genius"),
      title: F("做 AI 硬件 · 已跳票四次", "Builds AI Hardware · Delayed Four Times"),
      blurb: F("号称要做 AI 时代的 iPhone，预售早开了，货还没影。", "Claims to be building the iPhone of the AI era. Pre-orders are open, the device isn't."),
      stats: { vision: 75, tech: 68, hype: 80, sanity: 42 },
      lines: F(
        ["这次硬件一定不跳票（第五次）。", "我们要做 AI 时代的 iPhone。", "预售先开了，货以后再说。", "戴在身上，它会改变你的一生。", "供应链的事，问就是快了。"],
        ["This time the hardware won't slip (5th time).", "We're building the iPhone of the AI era.", "Pre-orders are live, the units come later.", "Wear it and it'll change your whole life.", "Supply chain? It's almost ready, trust me."])
    },
    {
      id: "kol", rarity: "common", accent: "#9A9A8E", initials: "KO",
      av: { skin: "#EFC19B", hair: "#3A2A1A", clothes: "#6E2E4A", style: "tall", glasses: "#C9A24A", beard: false, cap: false },
      name: F("AI 日报·KOL", "The Newsletter KOL"),
      title: F("自称行业分析师 · 实为搬运工", "Self-Proclaimed Analyst · Actually a Reposter"),
      blurb: F("产品没做过，但赛道分析发了三百篇，标题党拉满。", "Never shipped a product, but posted 300 'market analyses' with maximum clickbait."),
      stats: { vision: 50, tech: 20, hype: 96, sanity: 48 },
      lines: F(
        ["我刚发了篇深度分析，标题党拉满。", "这个赛道我看了，必须全押。", "我帮你们对接资源（就是拉个群）。", "先上我的播客，流量我来带。", "行业风向，我说了算。"],
        ["Just posted a deep-dive, maximum clickbait.", "I've studied this space — we must go all-in.", "I'll connect you to resources (i.e. make a group chat).", "Come on my podcast first, I'll bring the traffic.", "I decide which way the industry wind blows."])
    },
    {
      id: "vc", rarity: "rare", accent: "#6FA8FF", initials: "MK",
      av: { skin: "#D8A878", hair: "#BFBFBF", clothes: "#33333A", style: "short", glasses: false, beard: false, cap: false },
      name: F("风投·Mike", "Mike the VC"),
      title: F("看了两百个项目 · 决定自己做一个", "Saw 200 Pitches · Decided to Build a Copy"),
      blurb: F("从投资人下场创业，最大的资产是认识所有人。", "A VC turned founder. His biggest asset is knowing everyone."),
      stats: { vision: 68, tech: 30, hype: 88, sanity: 58 },
      lines: F(
        ["我看了两百个项目，决定自己做一个一样的。", "这个赛道很性感，团队我来攒。", "先把 deck 做厚，故事我熟。", "我认识所有人，介绍费另算。", "退出路径我已经想好了。"],
        ["I saw 200 pitches and decided to build a copy.", "This space is sexy, I'll assemble the team.", "Make the deck thick first, I know the story.", "I know everyone — finder's fees are extra.", "I've already planned the exit."])
    }
  ];

  // ---------- 立项：概念词 & 公司名 ----------
  const buzzNot = F(
    ["聊天机器人", "AI 助手", "套壳应用", "工具软件", "搜索引擎", "智能客服", "效率插件"],
    ["a chatbot", "an AI assistant", "a wrapper app", "a tool", "a search engine", "a support bot", "a productivity plugin"]);
  const buzzBut = F(
    ["面向企业认知的自治 agent 操作层", "为‘工作本身’重新设计的 AI 员工网络", "下一代人机协作的行动中枢", "把人类意图实时编译成执行的引擎", "每个组织的第二大脑", "agent 原生的工作流操作系统", "为每家企业批量生成 AI 员工的工厂"],
    ["an autonomous agent operating layer for enterprise cognition", "an AI-employee network redesigned for work itself", "the action hub for next-gen human-AI collaboration", "an engine that compiles human intent into execution", "the second brain for every organization", "an agent-native workflow operating system", "a factory that mass-produces AI employees per enterprise"]);
  const namePre = ["Cortex", "Neuro", "Hyper", "Synapse", "Aether", "Quanta", "Lattice", "Sentient", "Nexus", "Glia", "Verbose", "Tangent"];
  const namePost = ["Labs", "AI", "Intelligence", "Mind", "Systems", "Stack", "Dynamics", "Loop", "Foundry", "Works"];
  const slogans = F(
    ["重新定义‘工作’本身。", "让每个人都有一千个 AI 员工。", "我们不造工具，我们造未来。", "愿景先行，产品随后。", "把人类从开会中解放出来。", "通用智能，但面向企业。", "你睡觉时，我们的 agent 在加班。", "软件已死，agent 永生。"],
    ["Redefining work itself.", "A thousand AI employees for everyone.", "We don't build tools, we build the future.", "Vision first, product later.", "Freeing humanity from meetings.", "General intelligence, for the enterprise.", "While you sleep, our agents do overtime.", "Software is dead. Long live agents."]);

  // ---------- 周更新闻 / Weekly news ----------
  const news = [
    { mood: "chaos", headline: F("英伟达本周什么都没做，股价上涨 30%。", "Nvidia did literally nothing this week. Stock up 30%."), effect: { hype: 8, product: 0, valuation: 12, sanity: -3 } },
    { mood: "bad", headline: F("某大厂开着卡车来挖人，给你的天才研究员开了三个亿。他走了。", "A Big Tech firm backed a truck up and offered your genius researcher $300M. He left."), effect: { hype: 5, product: -22, valuation: -8, sanity: -14 } },
    { mood: "chaos", headline: F("斯坦福一个十岁小孩融资一个亿（附标准斯坦福微笑 🙂）。", "A 10-year-old at Stanford raised $100M (standard Stanford smile included 🙂)."), effect: { hype: -6, product: 0, valuation: -10, sanity: -8 } },
    { mood: "chaos", headline: F("虚构生物‘龙虾爪爪 🦞’一夜爆火，全网都在模仿它。", "A fictional creature, 'OpenClaw the Lobster 🦞', went viral overnight. Everyone's forking it."), effect: { hype: 20, product: -4, valuation: 10, sanity: -6 } },
    { mood: "bad", headline: F("你的核心技术，被工程团队确认‘物理上无法实现’。", "Your core tech was confirmed by engineering to be 'physically impossible'."), effect: { hype: 0, product: -25, valuation: -12, sanity: -16 } },
    { mood: "good", headline: F("一位听不懂但很兴奋的投资人，把投资意向书直接拍你脸上。", "An investor who understood nothing but was very excited slapped a term sheet on your face."), effect: { hype: 10, product: 0, valuation: 35, sanity: -5 } },
    { mood: "bad", headline: F("Demo 在董事会上崩了。你称之为‘早期研究预览’。", "The demo crashed in front of the board. You called it an 'early research preview'."), effect: { hype: -8, product: -6, valuation: -10, sanity: -10 } },
    { mood: "bad", headline: F("竞品发布了同款产品。你说他们‘只是套壳’。他们昨天刚转型。", "A rival shipped the same product. You said they're 'just a wrapper'. They pivoted yesterday."), effect: { hype: -10, product: 0, valuation: -14, sanity: -9 } },
    { mood: "good", headline: F("你发了一篇《为什么我们绝不做聊天机器人》，转赞过万。", "You posted 'Why We Will Never Build a Chatbot'. 10k+ likes."), effect: { hype: 22, product: -3, valuation: 8, sanity: -4 } },
    { mood: "chaos", headline: F("一家更会讲故事的套壳公司，用你的开源代码融了一笔更大的钱。", "A wrapper company that tells better stories raised more money using your open-source code."), effect: { hype: -12, product: 0, valuation: -10, sanity: -12 } },
    { mood: "good", headline: F("你在播客里说了三次‘agentic’，估值自动 +20%。", "You said 'agentic' three times on a podcast. Valuation auto-incremented 20%."), effect: { hype: 15, product: 0, valuation: 18, sanity: -6 } },
    { mood: "bad", headline: F("全公司都在刷分，没人记得产品长什么样了。", "The whole company is grinding benchmarks. Nobody remembers what the product looks like."), effect: { hype: 6, product: -14, valuation: 4, sanity: -8 } },
    { mood: "good", headline: F("实习生小帕一个人把产品做出来了，并礼貌地问‘这是要上线吗’。", "The intern single-handedly built the product and politely asked, 'Are we shipping this?'"), effect: { hype: -2, product: 30, valuation: 6, sanity: 12 } },
    { mood: "chaos", headline: F("一家中东主权基金给你发来消息，全文只有一个 🤝。", "A Middle-Eastern sovereign fund DM'd you. The entire message was a single 🤝."), effect: { hype: 10, product: 0, valuation: 28, sanity: -7 } },
    { mood: "bad", headline: F("你的‘自研 agent 记忆架构’，被发现其实是一个 SQLite 文件。", "Your 'proprietary agent memory' was discovered to be a single SQLite file."), effect: { hype: -14, product: -4, valuation: -16, sanity: -10 } },
    { mood: "good", headline: F("YC 合伙人在推特上 @ 了你，配文‘看好这个团队’。", "A YC partner @'d you on Twitter with 'watch this team'."), effect: { hype: 18, product: 0, valuation: 14, sanity: 4 } },
    { mood: "bad", headline: F("Hacker News 头条吐槽你：所以本质就是 Zapier 加一个提示词？", "Front page of HN roasting you: 'so it's basically Zapier + a prompt?'"), effect: { hype: -10, product: -2, valuation: -8, sanity: -11 } },
    { mood: "chaos", headline: F("螃蟹 🦀 反超龙虾成为本周顶流，无人知道为什么。", "The crab 🦀 overtook the lobster as this week's top meme. No one knows why."), effect: { hype: 12, product: 0, valuation: 6, sanity: -5 } },
    { mood: "good", headline: F("你把公司重新定义为‘AI 原生组织’，原地融资一轮。", "You rebranded the company as an 'AI-native organization' and raised a round on the spot."), effect: { hype: 16, product: -2, valuation: 22, sanity: -8 } },
    { mood: "bad", headline: F("联合创始人因为‘agent 该不该有 KPI’和你大吵一架。", "Your co-founder got into a screaming match over 'should agents have KPIs'."), effect: { hype: -4, product: -8, valuation: -6, sanity: -16 } },
    { mood: "chaos", headline: F("有人把你的融资材料喂给了 AI，AI 也没看懂。", "Someone fed your pitch deck to an AI. The AI also didn't get it."), effect: { hype: 6, product: 0, valuation: -4, sanity: -6 } },
    { mood: "good", headline: F("一位大厂前 CTO 加入做顾问，从此你的材料里多了六个箭头。", "An ex-Big-Tech CTO joined as advisor. Your deck now has 6 more arrows."), effect: { hype: 12, product: 4, valuation: 12, sanity: 2 } },
    { mood: "bad", headline: F("现金还能撑六周，而你刚把预算花在一场线下大会上。", "6 weeks of runway left, and you just blew the budget on an offline conference."), effect: { hype: 10, product: -2, valuation: -18, sanity: -12 } },
    { mood: "chaos", headline: F("整个圈子集体转型到‘世界模型’，你假装自己一直在做这个。", "The entire industry pivoted to 'world models'. You pretended you were always on it."), effect: { hype: 14, product: -6, valuation: 10, sanity: -7 } }
  ];

  // ---------- 抉择事件 / Choice events ----------
  const choices = [
    { prompt: F("投资人问：你们的护城河到底是什么？", "Investor asks: what is your moat, exactly?"),
      options: [
        { label: F("“我们的护城河是自研 agent 记忆架构。”", "'Our moat is a proprietary agent memory architecture.'"), effect: { hype: 30, product: -5, valuation: 10, sanity: -4 }, result: F("他听不懂，但兴奋得当场转账。", "He didn't understand, but wired money on the spot.") },
        { label: F("“我们有十个真实付费客户。”", "'We have ten real paying customers.'"), effect: { hype: -10, product: 20, valuation: -6, sanity: 6 }, result: F("他皱眉：市场是不是太小了？", "He frowned: isn't the market a bit small?") },
        { label: F("“我们在重新定义‘工作’本身。”", "'We are redefining work itself.'"), effect: { hype: 12, product: -2, valuation: 50, sanity: -20 }, result: F("估值 +50，你的理智 -20。", "Valuation +50. Your sanity -20.") }
      ] },
    { prompt: F("Demo 当众崩了。怎么办？", "The demo crashed in public. What now?"),
      options: [
        { label: F("“是网络问题。”", "'It's a network issue.'"), effect: { hype: -6, product: 0, valuation: -4, sanity: -2 }, result: F("没人信，但大家礼貌地点头。", "No one believed it, but everyone nodded politely.") },
        { label: F("“这是早期研究预览。”", "'This is an early research preview.'"), effect: { hype: 8, product: -4, valuation: 4, sanity: -6 }, result: F("媒体写成了‘前沿探索’。", "The press wrote it up as 'frontier exploration'.") },
        { label: F("当场改成内测，开始发邀请码。", "Turn it into a closed beta on the spot, drop invite codes."), effect: { hype: 18, product: -2, valuation: 8, sanity: -8 }, result: F("稀缺感拉满，等候名单破万。", "Scarcity maxed. Waitlist broke 10k.") }
      ] },
    { prompt: F("竞争对手发布了和你一模一样的产品。", "A competitor shipped the exact same product."),
      options: [
        { label: F("发推：“他们只是个套壳。”", "Tweet: 'they're just a wrapper'."), effect: { hype: 6, product: 0, valuation: -2, sanity: -6 }, result: F("被网友扒出你们也是。", "Netizens pointed out so are you.") },
        { label: F("宣布已转型到 agent 工作流操作系统。", "Announce you've pivoted to an agentic workflow OS."), effect: { hype: 16, product: -10, valuation: 14, sanity: -8 }, result: F("产品方向第四次更换。", "Product direction changed for the 4th time.") },
        { label: F("发一篇《为什么我们不做聊天机器人》。", "Publish 'Why We Don't Build Chatbots'."), effect: { hype: 24, product: -3, valuation: 8, sanity: -5 }, result: F("万赞，但产品还是没做完。", "10k likes. Product still unfinished.") }
      ] },
    { prompt: F("账上只剩八周现金了。", "Eight weeks of runway left on the books."),
      options: [
        { label: F("全押投流，买一波声量。", "Go all-in on paid hype."), effect: { hype: 28, product: -4, valuation: 10, sanity: -10 }, result: F("数据很好看，账户很难看。", "The metrics look great. The bank account doesn't.") },
        { label: F("裁掉一半人，专注做产品。", "Lay off half the team, focus on the product."), effect: { hype: -12, product: 26, valuation: -4, sanity: 8 }, result: F("产品有救了，团队没了。", "The product survived. The team didn't.") },
        { label: F("发一篇长文等奇迹降临。", "Post a thought-leadership essay and await a miracle."), effect: { hype: 14, product: -6, valuation: 2, sanity: -8 }, result: F("奇迹没来，转发来了。", "No miracle. Just retweets.") }
      ] },
    { prompt: F("团队内讧：agent 到底该不该有 KPI？", "Team feud: should agents have KPIs?"),
      options: [
        { label: F("站技术派：先把东西做出来。", "Side with engineering: ship something first."), effect: { hype: -6, product: 22, valuation: -2, sanity: 6 }, result: F("叙事派愤而离职两人。", "Two narrative people quit in protest.") },
        { label: F("站叙事派：先把故事讲圆。", "Side with narrative: tell a rounder story."), effect: { hype: 20, product: -12, valuation: 12, sanity: -10 }, result: F("故事很圆，产品很方。", "The story is round. The product is square.") },
        { label: F("先开十四个对齐会再说。", "Schedule 14 alignment meetings."), effect: { hype: -4, product: -6, valuation: 0, sanity: -12 }, result: F("两周后，没人记得在吵什么。", "Two weeks later, no one remembers the topic.") }
      ] },
    { prompt: F("一家大厂发来了收购意向。", "A Big Tech firm sent an acquisition signal."),
      options: [
        { label: F("狮子大开口，要价十倍。", "Quote 10x and play hard to get."), effect: { hype: 14, product: 0, valuation: 30, sanity: -8 }, result: F("对方已读不回。", "They left you on read.") },
        { label: F("假装还在跟另外三家谈。", "Pretend three other suitors are circling."), effect: { hype: 18, product: 0, valuation: 20, sanity: -10 }, result: F("他们居然信了。", "Somehow they believed you.") },
        { label: F("直接打包团队卖掉。", "Just take the acqui-hire and sell the team."), effect: { hype: -8, product: 0, valuation: 8, sanity: 16 }, result: F("体面收场，但梦想打了折。", "A graceful exit, dreams at a discount.") }
      ] }
  ];

  // ---------- 投资人评语 / Investor quotes ----------
  const investors = F(
    ["“团队很有愿景，但我们仍然不知道他们到底在做什么。”", "“我们看好这个赛道，只是不看好这家公司。”", "“他们路演的时候我哭了，后来发现是因为听不懂。”", "“非常 agentic。我们投了，别问我为什么。”", "“估值很合理，前提是现在还是 2021 年。”", "“创始人有种‘要么改变世界、要么改三次方向’的气质。”", "“产品我没看到，但材料是我见过最厚的。”", "“我们追投了，主要是怕错过。”"],
    ["\"Great vision. We still have no idea what they actually do.\"", "\"We love the space. We just don't love this company.\"", "\"I cried during the pitch — turned out it was because I didn't get it.\"", "\"Very agentic. We invested. Don't ask why.\"", "\"The valuation is reasonable, assuming it's 2021.\"", "\"The founder has that 'change the world or change direction thrice' energy.\"", "\"I never saw the product, but the deck was the thickest I've seen.\"", "\"We did the follow-on, mostly out of FOMO.\""]);

  // ---------- HN 评论 / Hacker News comments ----------
  const hn = F(
    ["所以本质上就是 Zapier 加一个提示词？", "上周有人在 Show HN 做过了，而且开源。", "标题写得像通用人工智能，文档里是个待办清单。", "我用两百行代码就复刻了，一个周末搞定。", "又一家把 if-else 叫做 agent 的公司。", "估值除以用户数，这个比值我笑了。", "他们的护城河是融资能力，这点我承认。", "项目挺酷，但为什么需要成立一家公司？"],
    ["So it's basically Zapier + a prompt?", "Someone shipped this on Show HN last week. Open source, too.", "Title says AGI, the docs say to-do app.", "I cloned it in 200 lines. Doable in a weekend.", "Another company calling if-else statements 'agents'.", "That valuation-to-users ratio made me laugh.", "Their moat is fundraising ability, I'll give them that.", "Cool project, but why does this need to be a company?"]);

  // ---------- 结局 / Endings ----------
  const endings = {
    unicorn: { tag: F("百亿独角兽（暂时）", "Decacorn (for now)"), title: F("你赢了，没人知道为什么。", "You won. Nobody knows why."), fate: F("产品依旧没人用，但估值冲到了百亿。你登上了封面，配文‘AI 时代的愿景’。", "The product still has no users, but the valuation hit $10B. You made the cover: 'the vision of the AI era'."), mood: "good" },
    acquired: { tag: F("被大厂收编", "Acqui-hired"), title: F("一家更会讲故事的公司，把你买走了。", "A company that tells better stories bought you."), fate: F("团队被打包进某大厂的‘前沿实验室’，从此再没发布过任何东西。", "The team got packed into a Big Tech 'frontier lab' and never shipped anything again."), mood: "mixed" },
    cult: { tag: F("理智归零 · 教派化", "Sanity Zero · Ascended to a Cult"), title: F("你不再经营公司，你开始布道。", "You stopped running a company. You started preaching."), fate: F("理智归零那天，你发了一篇两万字长文反思 AI 的未来，公司原地变成一个信仰组织。", "The day your sanity hit zero, you posted a 20,000-word essay on the future of AI. The company became a faith."), mood: "chaos" },
    dead: { tag: F("弹尽粮绝", "Out of Runway"), title: F("产品未动，愿景先行，最终弹尽粮绝。", "Pre-product. Post-vision. Out of money."), fate: F("现金烧光，产品永远差最后 10%。官网最后一次更新，是一篇长文。", "Runway gone, product forever 10% from done. The site's last update was a thought-leadership post."), mood: "bad" },
    zombie: { tag: F("僵尸公司", "Zombie Co."), title: F("没死，但也没活。", "Not dead. Not alive."), fate: F("靠一笔笔过桥融资续命，全公司只剩实习生小帕还在提交代码。", "Kept alive by bridge round after bridge round. Only the intern is still committing code."), mood: "bad" }
  };

  window.AIMGR = { founders, buzzNot, buzzBut, namePre, namePost, slogans, news, choices, investors, hn, endings };
})();
