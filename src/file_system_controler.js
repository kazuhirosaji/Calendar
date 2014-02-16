/*
fil_io_ctrlオブジェクト
  htmlからSave/Load要求を受け取ったら
  ファイルのSave/Loadをfile_ioの関数を使用して行い、
  htmlファイルに結果を渡す。
*/
var file_io_ctrl = {
  timer : 0,
  elm : 0,

  initFileIO : function() {
    file_io.init("calendar.txt", 1024*1024);
  },

  /* Start load operation
      ファイルload完了後、callback関数にてelm要素にload結果を反映する。
  */
  startLoading : function(elm) {
    this.elm = elm;
    file_io.setCallBack(file_io_ctrl.loadDone);
    file_io.fileOperation(OPERATE.LOAD);
  },

  /* elm要素のデータをファイルに保存する */
  saveFromElement : function(elm) {
    var text = document.getElementById(elm).value
    file_io.setText(text);
    file_io.fileOperation(OPERATE.SAVE);
  },

  loadingCalendar : null,

  /* loadされたデータをhtmlのCalendarデータとして表示する処理を設定する
     設定された処理は、load完了後に呼び出される。
  */
  setLoadingCalendar : function(func) {
    this.loadingCalendar = func;
    console.log("setLoadEnd");
    console.log(this.loadingCalendar);
  },

  /* 
    ファイルload完了後に呼び出されるcallback関数
  */
  loadDone : function() {
    //loadされたデータをhtmlファイルのelm要素に反映する
    document.getElementById(file_io_ctrl.elm).value = file_io.getText();
    console.log(file_io_ctrl.loadingCalendar);

    //loadされたデータをhtmlのCalendarデータとして表示する処理を呼び出す
    if (file_io_ctrl.loadingCalendar) {
      file_io_ctrl.loadingCalendar();
    }
  }
};


