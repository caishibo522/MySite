import Mock from "mockjs";
Mock.mock('/api/setting','get',{
  code: 0,
  msg: "",
  data: {
    avatar: "https://img1.baidu.com/it/u=4198296355,1099351121&fm=26&fmt=auto",
    siteTitle: "我的个人空间",
    github: "https://github.com",
    qq: "2637040377",
    qqQrCode:  "http://www.duyiedu.com/source/img/%E5%B0%8F%E6%B8%A1%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
    weixin: "csb011027",
    weixinQrCode:      "http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
    mail: "2637040377@qq.com",
    icp: "河北软件职业技术学院蔡世博",
    githubName: "caishibo",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  }
})