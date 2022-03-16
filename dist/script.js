'use strict'

var UNwords = [
  "嗨朋友",
  "你好啊~",
  "跟你說，我今天氣炸",
  "你今天氣炸",
  "恩，今天幾個垃圾在公園他喵的在玩丟石頭",
  "今天你附近的丟垃圾時間約在晚上八點，那一定是很快樂的時光",
  "謝謝妳齁，阿不過是好玩個屁?你知道他們丟誰石頭嗎!?",
  "不客氣啦~那一定是很快樂的時光。是誰呢?",
  "是我欸，他們覺得這樣很好玩嗎?",
  "是你欸，那一定是很快樂的時光。",
  "......",
  "是你欸，那一定是很快樂的時光。",
  "感覺回收廠的居住環境還不錯，挺適合你的",
  "我也覺得很讚~挺適合我的",
  "等我一下，拿個東西",
  "隨時歡迎你回來",
  "來了~就這個，在這之前我可以先用石頭為你做裝扮，不收你錢",
  "相信一定很美，真是好好的店家~",
  "阿對了，剛才到現在是聊天服務，一樣不收你錢，你回完話我就送你上路",
  "真是好好的店家~我回完話你就........",
  "(使用者已離線)",
  "(Elisa已離線)"
];


var Nwords = [
  "哈囉",
  "你好啊~",
  "我今天很開心，跟家人一起吃了生日大餐~",
  "也替你感到高興~生日快樂!",
  "謝謝你",
  "不客氣啦~",
  "那間店叫XXX，體驗起來感覺真的很不錯",
  "我也覺得很讚~",
  "尤其店裡室內的裝扮我真的很喜歡",
  "相信一定很美",
  "對了，你知道我還遇到誰嗎?",
  "是誰呢?",
  "是我國中最好的朋友!好久沒跟他當面聚一聚了，見到他真高興~",
  "是你國中最好的朋友!也替你感到高興~",
  "他還說下次去他店裡買十件衣服不收我錢，他人也太好~",
  "真是好好的店家~他人也太好~",
  "是阿~阿我先去丟個垃圾，等我一下",
  "今天你附近的丟垃圾時間約在晚上八點，隨時歡迎你回來",
  "謝啦，等等見",
  "不客氣啦~等等見~",
  "(使用者已離線)",
  "(Elisa已離線)"
];



class Elisa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: props.word_num,
      version: props.version };


  }

  render() {
    return /*#__PURE__*/ (
      //React.createElement("div",{Frame:1,id:"Elisa"},this.word[0])
      React.createElement("div", { class: "Frame", id: "Elisa" },
      this.state.version[this.state.word]));


  }}






class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: props.word_num,
      version: props.version };

  }

  render() {
    return /*#__PURE__*/ (
      //React.createElement("div",{Frame:1,id:"User"},"hellohellohellohellohellohellohellohellohellohellohellohellohello")
      React.createElement("div", { class: "Frame", id: "User" },
      this.state.version[this.state.word]));


  }}



class Mask extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
    this.words = "老師好，網站裡奇怪對話有聲音喔，然後這只是簡單的網頁互動不是機器人，"
+"操作方面選擇對話然後點擊中間方格就可以看到對話了，最後祝老師天天開心～";
  }

  render(){
    return(

      React.createElement("div", {id: "Mask"},

      React.createElement("div", {id: "Main_Txt"},this.words),
      React.createElement("div", {id: "Under_Txt"},"請點擊空白處關閉"))

    );
  }
}






class MsgBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      cvst: [],
      version: props.version,
      keyword: false };

    this.next = this.next.bind(this);
    this.changeNwords = this.changeNwords.bind(this);
    this.changeUNwords = this.changeUNwords.bind(this);
    this.keywordctrl = this.keywordctrl.bind(this);
  }

  next() {

    if (this.state.num <= this.state.version.length - 1) {
      if (this.state.num % 2 != 0) {
        var joined = this.state.cvst.concat( /*#__PURE__*/React.createElement(Elisa, { word_num: this.state.num, version: this.state.version }));
      } else {
        var joined = this.state.cvst.concat( /*#__PURE__*/React.createElement(User, { word_num: this.state.num, version: this.state.version }));
      }

      this.setState(prevState => ({
        num: this.state.num + 1,
        cvst: joined }));

      if(this.state.version == UNwords && this.state.num == 19){
        document.getElementById('Sound').currentTime = '1.5';
        document.getElementById('Sound').play();
      }

    }

  }

  changeUNwords() {
    document.getElementById('un').style.backgroundColor = "#808080";
    document.getElementById('n').style.backgroundColor = "#d9d9d9";
    this.setState(prevState => ({
      version: UNwords,
      num: 0,
      cvst: [] }));

  }

  changeNwords() {
    document.getElementById('n').style.backgroundColor = "#808080";
    document.getElementById('un').style.backgroundColor = "#d9d9d9";
    this.setState(prevState => ({
      version: Nwords,
      num: 0,
      cvst: [] }));

  }

  keywordctrl() {
    this.setState(prevState => ({
      keyword: !prevState.keyword }));

    //console.log(this.state.keyword)
  }

  render() {

    return /*#__PURE__*/(
      React.createElement("div", { id: "size"}, /*#__PURE__*/
      React.createElement("div", { id: "keyword", onClick: this.keywordctrl }, "\u95DC\u9375\u8A5E"),/*#__PURE__*/
      React.createElement("audio", { id: "Sound", src:"../assets/bgm.m4a" }),

      React.createElement("div", { id: "btnbox" }, /*#__PURE__*/
      React.createElement("button", { class: "btn", id: "n", onClick: this.changeNwords }, "\u6B63\u5E38\u5C0D\u8A71"), /*#__PURE__*/
      React.createElement("button", { class: "btn", id: "un", onClick: this.changeUNwords }, "\u5947\u602A\u5C0D\u8A71")), /*#__PURE__*/

      React.createElement("div", { id: "MsgBoard", onClick: this.next },
      this.state.cvst)));




  }}

const rrr = setInterval(updateScroll, 500);

function updateScroll() {
  var element = document.getElementById("MsgBoard");
  element.scrollTop = element.scrollHeight;
}





class System extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
    this.close = this.close.bind(this);
  }

  close(){
    document.getElementById('Mask').classList.add('nono');
  }

  render(){
    return(

      React.createElement("div", {id: "System",onClick:this.close},

      React.createElement(MsgBoard, { version: Nwords }),
      React.createElement(Mask))//,{onClick:this.close}

    );
  }
}

ReactDOM.render( /*#__PURE__*/
React.createElement(System),
document.getElementById('root'));

/*var messageBody = document.querySelector('#MsgBoard');
messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;*/

/*
  componentDidMount(){

  }

  componentWillUnmiunt(){

  }*/