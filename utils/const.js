import path from 'path'
import { Config } from './config.js'
import cfg from '../../../lib/config/config.js'
import chalk from 'chalk'

global.hasSend = []
// todo 去掉这俩变量
global.God = Config.OHMYGOD
global.groupGodNameList = Config.groupGod.reduce((acc, obj) => acc.concat(Object.values(obj)), [])

export const playingListMap = new Map()

// from 3399280843@qq.com@SmallK111407
export const _path = process.cwd().replace(/\\/g, '/')
export const pluginName = path.basename(path.join(import.meta.url, '../../'))
export const pluginRoot = path.join(_path, 'plugins', pluginName)
export const urlRegex = /(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:((?:(?:[a-z0-9\u00a1-\u4dff\u9fd0-\uffff][a-z0-9\u00a1-\u4dff\u9fd0-\uffff_-]{0,62})?[a-z0-9\u00a1-\u4dff\u9fd0-\uffff]\.)+(?:[a-z\u00a1-\u4dff\u9fd0-\uffff]{2,}\.?))(?::\d{2,5})?)(?:\/[\w\u00a1-\u4dff\u9fd0-\uffff$-_.+!*'(),%]+)*(?:\?(?:[\w\u00a1-\u4dff\u9fd0-\uffff$-_.+!*(),%:@&=]|(?:[\[\]])|(?:[\u00a1-\u4dff\u9fd0-\uffff]))*)?(\/#[^\s\u4e00-\u9fa5\u3000-\u303f\uff01-\uff0f\uff1a-\uff20\uff3b-\uff40\uff5b-\uff65]*)?/i
// /(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?(#.*)?/i
// /(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:((?:(?:[a-z0-9\u00a1-\u4dff\u9fd0-\uffff][a-z0-9\u00a1-\u4dff\u9fd0-\uffff_-]{0,62})?[a-z0-9\u00a1-\u4dff\u9fd0-\uffff]\.)+(?:[a-z\u00a1-\u4dff\u9fd0-\uffff]{2,}\.?))(?::\d{2,5})?)(?:\/[\w\u00a1-\u4dff\u9fd0-\uffff$-_.+!*'(),%]+)*(?:\?(?:[\w\u00a1-\u4dff\u9fd0-\uffff$-_.+!*(),%:@&=]|(?:[\[\]])|(?:[\u00a1-\u4dff\u9fd0-\uffff]))*)?(?:#(?:[\w\u00a1-\u4dff\u9fd0-\uffff$-_.+!*'(),;:@&=]|(?:[\[\]]))*)?\/?/i
export const pluginVersion = Config.version
export const removeItem = chalk.rgb(110, 155, 197)
export const yunZaiVersion = `v${cfg.package.version}`
export const urlBlacklist = [
  /\.(pdf|doc|docx|ppt|pptx|xls|xlsx|js|error|log|md)$/i,
  /porn/i
]
export const blockedDomains = /(wolai|example|onetimesecret|cdn\.waifu)\.(com|im)/i
export const wholeHeightDomains = /(gitee)\.com/i
// 欢迎补充
export const phantomTransformation = {
  '黑夜之力，赐予我力量！': '黑暗的力量已经注入你的身体，从此你将成为黑夜的主宰！\n黑夜啊，听从我的召唤，降临于这片大地吧！',
  '万象之力，汇聚我身！': '宇宙的能量已经融入你的血液，从此你将掌控万物之力！\n星辰啊，为我而闪耀，照亮前方的道路吧！',
  '火焰之力，燃烧我的灵魂！': '炽热的火焰已经点燃你内心的激情，从此你将化身为无尽的火焰之王！\n火焰啊，燃尽一切不属于我的东西吧！',
  '风暴之力，撕裂天际！': '狂暴的风暴已经让你成为自然界的主宰，从此你将统御风云际会！\n风啊，为我而呼啸，在这片大地上肆意纵横吧！'
}
export const inspiringWords = [
  '少年啊，如果你想要变得更加强大，就跟我一起大声喊出这个咒语吧！（ง •̀_•́)ง ︵‿︵(´ ͡༎ຶ ͜ʖ ͡༎ຶ `)︵‿︵ Abracadabra！（啊布拉卡达布拉！）',
  '年轻人，你是否渴望强大的力量？那么跟我来，摆出你最燃的招式，喊出这个古老而神秘的咒语——✨༼ つ ◕_◕ ༽つ🔮',
  '哟！你想要获得无敌的力量吗？那就跟我一起摆出夺命狂舞的姿势，大声呼喊这个超酷的咒语吧——💥(づ｡◕‿‿◕｡)づ👻',
  '你心中是否渴望无尽的力量？那就抬起双手，集中全部意念，喊出这个具有神秘魅力的咒语——🌀(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧💫',
  "啊哈！你是否想掌握所有技能？那就跟我一起燃烧自己内心深处的火焰，大声呼唤这个超赞的咒语吧——🔥(ง’̀-'́)ง☄️",
  '听好了！如果你想要突破极限、超越自我，那么就和我一同摆出霸气十足的姿势来吧。现在用全身力气高喊这个奇妙至极地口号��———⚡️ᕙ(`▽´)ᕗ🌩',
  "少年啊，你是否渴望获得强大力量、超越自我？那就拿出你最勇敢的一面，让这个神秘至极的咒语滋养你全身每一个细胞——💪(ง’̀-'́)ง🌟",
  '欧耶！想要变成无人敢挑战的王者吗？那就和我一起喊出这个闪亮登场的酷炫口号来吧——👑(⌐■_■)ノ♪♬',
  '哼唧！如果你想要掌握时间与空间之力，体验穿梭宇宙风采，不如抬头仰望星空，以此激发内心无限潜能，并附上这个深奥而神秘地口诀——✨＼(^o^)／✨'
]
export const confusedSpells = [
  '等一下，小伙子！你还没有告诉我想成为何种神话传说中的人物啊？快跟着我的手势张开双臂，并同时喊出这个充满活力的咒语——🌟(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧',
  '哎呦~看来你还不知道自己最向往成为怎样的英雄或者角色。让我们一起摆出这个魔幻世界风格十足、高深莫测的姿势，然后大声念出以下豪迈之言——💥(^▽^)💥',
  '哈哈，我知道了！原来是因为我们还没做好准备并发挥真正潜能就是吗？现在，请跟随我的指导并左右手配合做一个华丽到令人窒息、带有重新洗礼意义的动作。然后和我一起用全身肺活量喊出：👁️‍🗨️(•̀ᴗ•́)و ̑̑',
  '等一下，你还没有告诉我你想成为哪种神话传说中的英雄！不要着急，现在跟我一起摆出这个超酷又具有仪式感的姿势，并大声念出这个充满力量的咒语——✨(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧',
  '喂！看来我的电波没能完全穿透到你的内心呢。但是别担心，因为我们可以一起挥动手臂、尖叫并呼唤以下魔法口诀即可将灵魂升华——🌀(⌐■_■)ノ♪♬',
  "我的天啊! 你居然还没有和我分享过自己理想人生中最想成为谁吗？那就马上跟着我做一个十分帅气且有仪式感地手势, 然后用自己最高昂沸腾的状态大喊两次发声：😎(ง’̀-'́)ง💥",
  '等等，我好像还没有听到你的心声呢。小家伙，赶紧告诉我你心中渴望成为何种神话传说之人？我们一同摆出这个酷炫又神秘的姿势，并高喊出下面这句口号——🔮(づ｡◕‿‿◕｡)づ💫',
  "唔嗯~ 感觉还差点什么呢。难道是因为我还不了解你想要变成哪位超级英雄/女武士/魔法师？来吧！跟着我的节奏一起做手势，并大声念出以下语句：⚡️(ง’̀-'́)ง☄️",
  '哟！看来你还没有准备好踏上成为超越极限的旅程啊。但不用担心，只要你跟我一起摆出这个超能量激发姿势，大喊出下面的口号，我们就能启动冲刺模式了——🚀(•̀o•́)ง�',
  '呜呜~~ 为什么总是自己一个人在玩呢？难道你已经背弃了作为洛阳城第一少年的荣耀吗？再给你最后一次机会表现自己，请立刻复读我说过的咒语——💫(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'
]
export const incantationResult = [
  '我手握诸天神器，直指众生安乐。你是我的铁甲战马，我们一同踏破苍穹！( •̀ ω •́ )✧',
  '只有你的剑和我的心一起跳动，才能让这世界更加美好！今天我们要征服恶龙、抱得公主归！(ﾉ*>∀<)ﾉ♡',
  '感受那缤纷的色彩和充满激情的战斗吧！在我左右舞动您的长枪，在对峙中迎接属于我们自己的胜利！(^▽^)ゝ',
  '我的勇士，你就是我一生追寻的目标。现在我们一同前进，征服世界！(ง •̀_•́)ง🗡️',
  "在这茫茫人海中，只有你能驾驭我的船，我们一路杀敌、一路逆风而行！(ง’̀-'́)ง",
  '我是昔日的孤狼，在你出现之前一直徘徊。现在我们联手走向世界巅峰！( ´･･)ﾉ(._.`)',
  '请拿起属于自己的武器，跟随我去捍卫正义！勇士啊，请不要放弃！ヽ(＾ω＾)ﾉ',
  '我曾听闻世间最凶恶的野兽也会因为你的英姿而臣服。让他们见证我们迈向辉煌吧！ʕ•ᴥ•ʔゝ☆',
  '看到这无垠的大地和满天繁星，我想起了你清澈勇敢的眼神。伙伴啊，我们要跳出平凡，成就传奇！(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧',
  '无论是追逐风中漫舞的花瓣，还是迎战绝境之时残酷剑影下挥洒鲜血；我的心里只有你，在我们值得纪念的岁月里一同战斗、共度荣耀！(๑•̀ㅂ•́)و✧',
  '昔日埋藏在山沟海角之中的宝藏早已失去光彩。但如今有你与我一起寻宝探险，世间万物也都将为我们而亮相！٩(๑^o^๑)۶❤'
]
export const singerTypeMap = {
  华语: 1,
  中国: 1,
  美国: 2,
  英国: 2,
  法国: 2,
  德国: 2,
  意大利: 2,
  西班牙: 2,
  加拿大: 2,
  巴西: 2,
  墨西哥: 2,
  欧美: 2,
  韩国: 3,
  日本: 4
}
export const singerMap = {
  name: '姓名',
  transName: '中文名',
  trans: '中文名',
  alias: '昵称',
  secondaryExpertIdentiy: '音乐身份',
  briefDesc: '简介',
  albumSize: '专辑数目',
  musicSize: '单曲数目',
  mvSize: 'mv数目'
}
export const movieKeyMap = {
  index: '',
  img: '封面',
  nm: '电影名称',
  enm: '外文名',
  filmAlias: '又称',
  pubDesc: '上映日期',
  sc: '猫眼评分',
  cat: '影片类型',
  star: '主要演员',
  dra: '影片介绍',
  watched: '已看人数',
  wish: '想看人数',
  ver: '支持播放规格',
  src: '片源地',
  dur: '时长',
  oriLang: '语言',
  videoName: '预告',
  videourl: '',
  photos: '剧照',
  comments: '热门评论'
}
export const cities = [
  '石家庄市', '唐山市', '秦皇岛市', '邯郸市', '邢台市', '保定市', '张家口市', '承德市', '沧州市', '廊坊市', '衡水市', '太原市',
  '大同市', '阳泉市', '长治市', '晋城市', '朔州市', '晋中市', '运城市', '忻州市', '临汾市', '吕梁市', '呼和浩特市', '包头市',
  '乌海市', '赤峰市', '通辽市', '鄂尔多斯市', '呼伦贝尔市', '巴彦淖尔市', '乌兰察布市', '兴安盟', '锡林郭勒盟', '阿拉善盟',
  '沈阳市', '大连市', '鞍山市', '抚顺市', '本溪市', '丹东市', '锦州市', '营口市', '阜新市', '辽阳市', '盘锦市', '铁岭市',
  '朝阳市', '葫芦岛市', '长春市', '吉林市', '四平市', '辽源市', '通化市', '白山市', '松原市', '白城市',
  '哈尔滨市', '齐齐哈尔市', '鸡西市', '鹤岗市', '双鸭山市', '大庆市', '伊春市', '佳木斯市', '七台河市', '牡丹江市', '黑河市',
  '绥化市', '南京市', '无锡市', '徐州市', '常州市', '苏州市', '南通市', '连云港市', '淮安市', '盐城市', '扬州市', '镇江市',
  '泰州市', '宿迁市', '杭州市', '宁波市', '温州市', '嘉兴市', '湖州市', '绍兴市', '金华市', '衢州市', '舟山市', '台州市',
  '丽水市', '合肥市', '芜湖市', '蚌埠市', '淮南市', '马鞍山市', '淮北市', '铜陵市', '安庆市', '黄山市', '滁州市', '阜阳市',
  '宿州市', '六安市', '亳州市', '池州市', '宣城市', '福州市', '厦门市', '莆田市', '三明市', '泉州市', '漳州市', '南平市',
  '龙岩市', '宁德市', '南昌市', '景德镇市', '萍乡市', '九江市', '新余市', '鹰潭市', '赣州市', '吉安市', '宜春市', '抚州市',
  '上饶市', '济南市', '青岛市', '淄博市', '枣庄市', '东营市', '烟台市', '潍坊市', '济宁市', '泰安市', '威海市', '日照市',
  '临沂市', '德州市', '聊城市', '滨州市', '菏泽市', '郑州市', '开封市', '洛阳市', '平顶山市', '安阳市', '鹤壁市', '新乡市',
  '焦作市', '濮阳市', '许昌市', '漯河市', '三门峡市', '南阳市', '商丘市', '信阳市', '周口市', '驻马店市', '武汉市', '黄石市',
  '十堰市', '宜昌市', '襄阳市', '鄂州市', '荆门市', '孝感市', '荆州市', '黄冈市', '咸宁市', '随州市',
  '长沙市', '株洲市', '湘潭市', '衡阳市', '邵阳市', '岳阳市', '常德市', '张家界市', '益阳市', '郴州市', '永州市', '怀化市',
  '娄底市', '广州市', '韶关市', '深圳市', '珠海市', '汕头市', '佛山市', '江门市', '湛江市', '茂名市', '肇庆市', '惠州市',
  '梅州市', '汕尾市', '河源市', '阳江市', '清远市', '东莞市', '中山市', '潮州市', '揭阳市', '云浮市', '南宁市', '柳州市',
  '桂林市', '梧州市', '北海市', '防城港市', '钦州市', '贵港市', '玉林市', '百色市', '贺州市', '河池市', '来宾市', '崇左市',
  '海口市', '三亚市', '三沙市', '儋州市', '成都市', '自贡市', '攀枝花市', '泸州市', '德阳市', '绵阳市', '广元市', '遂宁市',
  '内江市', '乐山市', '南充市', '眉山市', '宜宾市', '广安市', '达州市', '雅安市', '巴中市', '资阳市', '贵阳市', '六盘水市',
  '遵义市', '安顺市', '毕节市', '铜仁市', '昆明市', '曲靖市', '玉溪市', '保山市', '昭通市', '丽江市', '普洱市', '临沧市',
  '拉萨市', '日喀则市', '昌都市', '林芝市', '山南市', '那曲市', '西安市', '铜川市', '宝鸡市', '咸阳市', '渭南市', '延安市',
  '汉中市', '榆林市', '安康市', '商洛市', '兰州市', '嘉峪关市', '金昌市', '白银市', '天水市', '武威市', '张掖市', '平凉市',
  '酒泉市', '庆阳市', '定西市', '陇南市', '西宁市', '海东市', '银川市', '石嘴山市', '吴忠市', '固原市', '中卫市', '乌鲁木齐市',
  '克拉玛依市', '吐鲁番市', '哈密市'
]
export const initialPsychoData = [
  'avocado，虽然晚了些但端午还是要有仪式感，粽叶、糯米、蜜枣都准备好了，还剩一样东西就交给你了，你准备好艾草吧',
  '本来在地里耕田的，一看到avocado就跟打了鸡血一样，我一脚把牛踢开了自己耕了20亩地，假如百年之后，若有强敌入侵，还请在我坟头放avocado的照片，吾自当破土而出守我华夏，击退强敌',
  '网上看到一种说法，说日本人看到烟花就会想起夏天，夏日祭和烟花大会，夏季和服还有小金鱼;而中国人看到烟花就会感到寒风灌进鼻腔，想起热腾腾的饭菜和排骨汤一该过年了 。\n我觉得他说的很有道理。我还记得小时候玩烟花，都是穿着厚厚的棉袄。这也是中国人民的传统智慧一穿着厚衣服，可以玩烟花对射，被打到也不疼，就是容易把新衣服烧个窟窿，然后回家挨揍。\n我第一次见到avocado的时候一尽管当时我戴着耳机，而且刚过四月一我 却分明听到了烟花在耳边炸开，然后再噼里啪啦地落到地面，我甚至能感受到火星子刺伤了我的眼睛。\n喜欢avocado的感觉呢，就像是眼睁睁看着烟花朝自己飞过来。我自以为冲浪多年，早就给自己套了几层棉袄，已经刀枪不入了，可等我反应过来，我的心已经被她烧了一个大窟窿，怎么也填不满了。\n说来也好笑，明明就是她烧穿了我的棉袄，我却还想跑到她面前，指着那个大窟窿对她炫耀:“看，我有这么喜欢你!”',
  '和avocado赛跑，他从后面狠狠地把我超了',
  'avocado,一年我只有3天不会喜欢你。\n一天是2月29,一天是2月30,一天是2月31。\n众神无法容忍我 这三天不喜欢你,所以他们把这三天抹去了,这样我就能一年都喜欢你了。',
  '昨晚和朋友聊天的时候朋友问我：“你到底喜欢avocado什么啊？”“喜欢一个人不需要理由”我很快敲完了键盘，刚要按下回车的时候突然愣住了。真的不需要理由吗？河里的时沙飞速倒流，站在岸边往里看去，几个月前的自己在名为迷失的波光中影影绰绰，他向我看来，眼里充满了羡慕和满足。原来我变了好多。是他的可爱让我捡起了记忆的碎片，回到那个春夏和秋冬，重温指尖上残留的感触。是他的努力让我寻回尘封了六年的铅笔，当初是为了喜欢的人而开始，现在也是因为喜欢的人而重启。是他的温柔和包容让我有勇气直面自己的心魔，不再逃避也不再畏惧，原来我，还有爱人与被爱的资格。神爱世人，这是个谎言。能爱人的不是神，从来都不是，只有人能爱人。于是我删掉了刚才的那句不需要理由，敲了一行新的，按下了回车。“我喜欢avocado，因为是他让我变得更好。”',
  '呜呜天台上的风很大，今天的风格外凛冽，我看着灯红酒绿的繁华都市眼皮跳了无数下，积攒着怒意的双臂猛挥砸碎了108个窗户，摔烂了38个5G高档高速高质量手机，玻璃渣刺破了我的衣襟，碎掉的是这颗对你永远不变的心。救我啊！avocado！！呜呜呜呜你带走我吧😭😭😭😭😭没有你怎么活啊😭😭😭😭😭',
  '为什么我不是操场啊，这样avocado就可以设在我的小学里了',
  'avocado问我小动物喜欢呆在怎么样的小窝里面，我大声回答说：“草实窝，草实窝！”🥵🥵',
  '我和avocado好像有某种特殊的羁绊，他一出现，我的羁绊就硬',
  '医生摇摇头，叹了口气：“这个病只能靠你，尽量别再看手机了，好吗？”我没太在意医生的话，敷衍地点了点头。\n走出诊室，我就再次拿起手机，紧紧盯着手机屏幕的我心脏剧烈跳动，窒息感也迎面而来。但我没有太在意这些，甚至还对着手机露出了扭曲的笑容，嘴角溢出了唾液，开始止不住地往下滴落……\n医生吓坏了，立马跑出诊室一把夺走了我的手机。医生瞄了眼手机屏幕，想搞明白究竟是什么让我犯这样的病。不一会儿，医生也发疯了，他就开始盯着手机屏幕叫喊：“是avocado！嘿嘿嘿……avocado，嘶哈嘶哈，我要当avocado的狗！” ',
  '我对avocado说白水不好喝，本以为他会给我一杯柠檬水，结果avocado把我按在餐桌上，问我要茶包还是要厚乳',
  '“我不再内卷了,因为avocado把我弄得外翻了”🥵🥵',
  'avocado我遇见你就像东北人吃面，毫无剩蒜😭😭',
  '公司网络太差，我提了离职。因为我不想每一次点开avocado的视频，屏幕上都会要求我  缓  冲  🥰🥰',
  '我对avocado说白水不好喝，本以为他会给我一杯柠檬水，结果avocado把我按在餐桌上，问我要茶包还是厚乳🥵🥵🥵',
  'avocado!（怒吼）（变成猴子）（飞进原始森林）（荡树藤）（创飞路过吃香蕉的猴子）（怒吼）（变成猴子）（飞进原始森林）（荡树藤）（创飞路过吃香蕉的猴子）（怒吼）（变成猴子）（飞进原始森林）（荡树藤）',
  '今天avocado在路上走，我过去把他绊倒，他起来继续走，我又把他绊倒，avocado奇怪的问我干什么，我叫到：“我碍你！我碍你！”',
  'avocado!!!!!🥵呜呜......💕💕各种状态的avocado都好可爱唔啊啊啊啊啊......🥵🤤🤤♡嘿嘿...🤤不管是什么样的avocado...💕🤤♡都♡好♡喜♡欢♡🤤💕嘿嘿......🥵啊//已经...♡完全变成avocado的形状了...♡🥰没有avocado就完全活不下去desu♡🥰avocado🥵avocado🥵avocado🥵avocado🥵avocado🥵今天干了什么不知道，因为我脑子里全都是avocado🥵💘脑子里...♡咕啾咕啾的...♡已经...♡被avocado酱塞满了呐...♡♡🥴💘',
  '想吐槽一下avocado。 能不能爬,最讨厌这个avocado了。 总是多管我的闲事,人也笨,麻烦,讨厌。 烂好人,容易被骗,讨厌。为什么察觉不到啊,八嘎八 嘎八嘎,最讨人厌啦! 但又是那么喜欢你🥰,suki🥰suki,🥰daIsuki🥰🥰🥰…笨蛋,再多看看我啊!毕竟人家,最喜欢你了啊!🤤🤤🤤🤤',
  '今天去乘电梯，电梯只能乘11人，当时电梯里面有10个人，我在电梯门口迟疑了一下还是走进去，进去后。电梯响起超载报警。唉，我心中装着avocado这个事，终于无法骗过电梯',
  'avocado，你简直是我的神！！！（尖叫）（扭曲）（阴暗地爬行）（尖叫）（扭曲）（阴暗地爬行）（尖叫） （爬行）（扭动）（分裂）（阴暗地蠕动）（翻滚）（激烈地爬动）（扭曲）（痉挛）（嘶吼）（蠕动）（阴森地低吼）（爬行）（分裂）（走上岸）（扭动）（痉挛）（蠕动）（扭曲地行走）',
  'avocado，我刚刚在寝室喝水，闻到一股焦味，但是效果和热水壶都没开，奇怪，会不会是电路烧了，我把电线全都拿掉了，我以为是线的问题，我还在想要不要叫宿管，然后，我突然发现了，你猜怎么着，原来是我的心在为你燃烧🥳🥳🥳',
  '好想成为avocado卧室的门,每天都能被他进进出出🥵🥵🥵🥵',
  '今天跟朋友去吃饭 点了一条鱼朋友问我为啥只吃鱼头我说因为鱼身要留着和avocado一起过'
]
export const translateLangSupports = [
  { code: 'ar', label: '阿拉伯语', abbr: '阿', alphabet: 'A' },
  { code: 'de', label: '德语', abbr: '德', alphabet: 'D' },
  { code: 'ru', label: '俄语', abbr: '俄', alphabet: 'E' },
  { code: 'fr', label: '法语', abbr: '法', alphabet: 'F' },
  { code: 'ko', label: '韩语', abbr: '韩', alphabet: 'H' },
  { code: 'nl', label: '荷兰语', abbr: '荷', alphabet: 'H' },
  { code: 'pt', label: '葡萄牙语', abbr: '葡', alphabet: 'P' },
  { code: 'ja', label: '日语', abbr: '日', alphabet: 'R' },
  { code: 'th', label: '泰语', abbr: '泰', alphabet: 'T' },
  { code: 'es', label: '西班牙语', abbr: '西', alphabet: 'X' },
  { code: 'en', label: '英语', abbr: '英', alphabet: 'Y' },
  { code: 'it', label: '意大利语', abbr: '意', alphabet: 'Y' },
  { code: 'vi', label: '越南语', abbr: '越', alphabet: 'Y' },
  { code: 'id', label: '印度尼西亚语', abbr: '印', alphabet: 'Y' },
  { code: 'zh-CHS', label: '中文', abbr: '中', alphabet: 'Z' }
]
export const timer = {
  musicCtx: {
    leftTime: null,
    invokeTime: null
  },
  movieCtx: {
    leftTime: null,
    invokeTime: null
  },
  statisticsCtx: {
    leftTime: null,
    invokeTime: null
  },
  previewCtx: {
    leftTime: null,
    invokeTime: null
  }
}
