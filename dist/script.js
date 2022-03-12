'use strict'

var Nwords = [
"111",
"222",
"333",
"444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444",
"555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555",
"6",
"7"];


var UNwords = [
"aaa",
"bbb",
"ccc"];



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
      React.createElement("div", { id: "keyword", onClick: this.keywordctrl }, "\u95DC\u9375\u8A5E"), /*#__PURE__*/


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


ReactDOM.render( /*#__PURE__*/
React.createElement(MsgBoard, { version: Nwords }),
document.getElementById('root'));

/*var messageBody = document.querySelector('#MsgBoard');
messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;*/

/*
  componentDidMount(){

  }

  componentWillUnmiunt(){

  }*/