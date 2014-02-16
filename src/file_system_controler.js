/*
fil_io_ctrl�I�u�W�F�N�g
  html����Save/Load�v�����󂯎������
  �t�@�C����Save/Load��file_io�̊֐����g�p���čs���A
  html�t�@�C���Ɍ��ʂ�n���B
*/
var file_io_ctrl = {
  timer : 0,
  elm : 0,

  initFileIO : function() {
    file_io.init("calendar.txt", 1024*1024);
  },

  /* Start load operation
      �t�@�C��load������Acallback�֐��ɂ�elm�v�f��load���ʂ𔽉f����B
  */
  startLoading : function(elm) {
    this.elm = elm;
    file_io.setCallBack(file_io_ctrl.loadDone);
    file_io.fileOperation(OPERATE.LOAD);
  },

  /* elm�v�f�̃f�[�^���t�@�C���ɕۑ����� */
  saveFromElement : function(elm) {
    var text = document.getElementById(elm).value
    file_io.setText(text);
    file_io.fileOperation(OPERATE.SAVE);
  },

  loadingCalendar : null,

  /* load���ꂽ�f�[�^��html��Calendar�f�[�^�Ƃ��ĕ\�����鏈����ݒ肷��
     �ݒ肳�ꂽ�����́Aload������ɌĂяo�����B
  */
  setLoadingCalendar : function(func) {
    this.loadingCalendar = func;
    console.log("setLoadEnd");
    console.log(this.loadingCalendar);
  },

  /* 
    �t�@�C��load������ɌĂяo�����callback�֐�
  */
  loadDone : function() {
    //load���ꂽ�f�[�^��html�t�@�C����elm�v�f�ɔ��f����
    document.getElementById(file_io_ctrl.elm).value = file_io.getText();
    console.log(file_io_ctrl.loadingCalendar);

    //load���ꂽ�f�[�^��html��Calendar�f�[�^�Ƃ��ĕ\�����鏈�����Ăяo��
    if (file_io_ctrl.loadingCalendar) {
      file_io_ctrl.loadingCalendar();
    }
  }
};


