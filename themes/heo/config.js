const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2021-09-21', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '欢迎来到我的世界', url: '' }, // 可配置链接
    { title: '让我们快乐的玩耍吧', url: '' } // 可配置链接
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '分享喜欢',
  HEO_HERO_TITLE_2: '兴趣使然',
  HEO_HERO_TITLE_3: 'UI/UX DESIGN CAMERA',
  HEO_HERO_TITLE_4: 'XIAOHONGSHU',
  HEO_HERO_TITLE_5: '鱼文三CySoong',
  HEO_HERO_TITLE_LINK: 'https://www.xiaohongshu.com/user/profile/58423f4c82ec394821a6f1cd?xsec_token=&xsec_source=pc_search',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: '随便逛逛',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '必看精选', url: '/tag/必看精选' },
  HEO_HERO_CATEGORY_2: { title: '设计相关', url: '/tag/设计相关' },
  HEO_HERO_CATEGORY_3: { title: '相机摄影', url: '/tag/相机摄影' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '🍉 喜欢吃喜欢设计',
    '📷 喜欢摄影和相机',
    '🐸 我样样通样样松',
    '🐤 俩娃的超人宝爸',
    '🤖️ 数码科技爱好者',
    '👹 立志学更多技能'
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '/about',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: 'https://github.com/CYSoong',
  HEO_INFO_CARD_ICON2: 'fab fa-github',
  HEO_INFO_CARD_URL3: 'https://www.sanwenyu.top',
  HEO_INFO_CARD_TEXT3: '了解更多',

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'VSCODE',
      img_1: '/images/heo/VSCODE.webp',
      color_1: '#0F79D6',
      title_2: 'AE',
      img_2: '/images/heo/AE.webp',
      color_2: '#00005B'
    },
    {
      title_1: 'Chatgpt',
      img_1: '/images/heo/Chatgpt.webp',
      color_1: '#2BC08A',
      title_2: 'Procreate',
      img_2: '/images/heo/Procreate.webp',
      color_2: '#242424'
    },
    {
      title_1: 'Figma',
      img_1: '/images/heo/Figma.webp',
      color_1: '#161B1C',
      title_2: 'Sketch',
      img_2: '/images/heo/Sketch.webp',
      color_2: '#F2F2F2'
    },
    {
      title_1: 'Priciple',
      img_1: '/images/heo/Priciple.webp',
      color_1: '#F3ECFF',
      title_2: 'Dribbble',
      img_2: '/images/heo/Dribbble.webp',
      color_2: '#FF4C91'
    },
    {
      title_1: 'AI',
      img_1: '/images/heo/AI.webp',
      color_1: '#330000',
      title_2: 'Fcp',
      img_2: '/images/heo/Fcp.webp',
      color_2: '#FF3032'
    },
    {
      title_1: 'PHOTOSHOP',
      img_1: '/images/heo/PHOTOSHOP.webp',
      color_1: '#002B4E',
      title_2: 'kodak',
      img_2: '/images/heo/kodak.webp',
      color_2: '#FEC401'
    },
    {
      title_1: 'JS',
      img_1: '/images/heo/JS.webp',
      color_1: '#F0DB4F',
      title_2: 'C1',
      img_2: '/images/heo/C1.webp',
      color_2: '#E4EBFF'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '欢迎交流',
  HEO_SOCIAL_CARD_TITLE_2: '在这里你可以找到我',
  HEO_SOCIAL_CARD_TITLE_3: '前往小红书',
  HEO_SOCIAL_CARD_URL: 'https://www.xiaohongshu.com/user/profile/58423f4c82ec394821a6f1cd?xsec_token=&xsec_source=pc_search',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
