//語言包統整
//===============================================分隔線================================================
//系統錯誤提示
const systemNetworkErrorAlertText = [
  '伺服器錯誤，請稍後再試',
  'サーバーエラー',
  'Server Error',
];
//===============================================分隔線================================================
//導覽列選項
const languageText = ['中文', '日本語', 'English'];
//===============================================分隔線================================================
//登入登出文字
const loginText = ['登入', 'ログイン', 'login'];
const logoutText = ['登出', 'ログアウト', 'logout'];
const goToLoginText = [
  '請先登入',
  'ログインしてください',
  'Please login first.',
];
//===============================================分隔線================================================
//註冊/登入頁面使用
const registText = ['註冊', '新規登録', 'Regist'];
const accountText = ['帳號(信箱)', 'アカウント(メール)', 'Account(Mail)'];
const passwordText = ['密碼', 'パスワード', 'Passwoed'];
const loginCheckAlertText = ['帳號或密碼不可為空', '', ''];
//已經登入的文字(登入頁面阻擋)
const alreadyLoginAlertText = [
  '您已經登入',
  'すでにログインしている',
  'You was already been login.',
];
const loginSuccessAlertText = [
  '登入成功',
  'ログインしました',
  'Login success.',
];
const accpassWrongAlertText = [
  '帳號或密碼錯誤',
  'メールかパスワードが違います',
  'Mail or Password is wrong',
];
//帳號鎖定提示
const accountLockAlertText = [
  '帳號已被鎖定，請洽詢客服',
  'アカウントはロックされました、サービスにご連絡してください。',
  'Account has been locked. Please contact the service.',
];
//===============================================分隔線================================================
//清空
const clearText = ['清空', 'クリア', 'clear'];
//===============================================分隔線================================================
//日曆文字
const calenderText = [
  {
    week: '週',
    work_week: '週',
    day: '日',
    month: '月',
    previous: '往前',
    next: '往後',
    today: '今日',
    agenda: '明細',
  },
  {
    week: '週',
    work_week: '週',
    day: '日',
    month: '月',
    previous: '前',
    next: '次',
    today: '今日',
    agenda: '詳し',
  },
  {
    date: 'Date',
    time: 'Time',
    event: 'Event',
    allDay: 'All Day',
    week: 'Week',
    work_week: 'Work Week',
    day: 'Day',
    month: 'Month',
    previous: 'Back',
    next: 'Next',
    yesterday: 'Yesterday',
    tomorrow: 'Tomorrow',
    today: 'Today',
    agenda: 'Agenda',
  },
];
//===============================================分隔線================================================

const textPack = {
  languageText,
  loginText,
  logoutText,
  loginCheckAlertText,
  registText,
  alreadyLoginAlertText,
  accountText,
  passwordText,
  clearText,
  loginSuccessAlertText,
  accpassWrongAlertText,
  systemNetworkErrorAlertText,
  accountLockAlertText,
  goToLoginText,
  calenderText,
};
export default textPack;
