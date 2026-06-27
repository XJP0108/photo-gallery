/**
 * ============================================
 *  人物数据配置文件
 *  增删改人只需编辑下面这个 PEOPLE_DATA 数组
 * ============================================
 *
 * 🔄 版本号：每次改完数据后把这个数字 +1
 *    这样所有人的手机都会强制刷新到最新内容
 */
window.__DATA_VERSION__ = 7;

/**
 * 使用说明：
 *   1. 复制一整段 { ... } 就是加一个人
 *   2. 删除一整段就是减一个人
 *   3. 改 photo 路径可以换照片
 *   4. description / tags 可以填也可以不填
 *
 * 重要规则：
 *   - id 必须是唯一数字，对应二维码 ?person=ID
 *   - photo 填照片的相对路径，例如 "photos/zhangsan.jpg"
 *   - 支持 jpg / png / webp / gif 格式
 */

const PEOPLE_DATA = [
  {
    id: 1,
    name: "小明",
    photo: "photos/person1.jpg",
    description: "喜欢摄影和旅行",
    tags: ["摄影", "旅行", "咖啡"]
  },
  {
    id: 2,
    name: "小红",
    photo: "photos/person2.jpg",
    description: "热爱画画的设计师",
    tags: ["设计", "绘画", "音乐"]
  },
  {
    id: 3,
    name: "小刚",
    photo: "photos/person3.jpg",
    description: "程序员 & 健身达人",
    tags: ["编程", "健身", "阅读"]
  }
  // =============================================
  //  加人模板 — 复制下面这段，改一下 id/name/photo
  // =============================================
  // {
  //   id: 4,
  //   name: "新人名字",
  //   photo: "photos/newperson.jpg",
  //   description: "这个人很懒，什么都没写",
  //   tags: []
  // },
];
