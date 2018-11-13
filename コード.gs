/**
 * Creates a Google Doc and sends an email to the current user with a link to the doc.
 */
//function createAndSendDocument() {
//  // Create a new Google Doc named 'numberwebメルマガ'
//  var doc = DocumentApp.create('numberwebメルマガ');
//
//  /*
//  *
//  */
//  // declare HTML doctype.
//  doc.getBody().appendParagraph('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">');
//
//  // Get the URL of the document.
//  var url = doc.getUrl();//document url
//
//  // 今ログインしているアクティブユーザーのEメールアドレスを取得する
//  //　　セッションオブジェクトに情報ある
//  var email = Session.getActiveUser().getEmail();
//
//  // Get the name of the document to use as an email subject line.
//  var subject = doc.getName();//Hello, world!
//
//  // Append a new string to the "url" variable to use as an email body.
//  var body = 'Link to your doc: ' + url;
//
//  // Send yourself an email with a link to the document.
//  GmailApp.sendEmail(email, subject, body);
//}
function myTestFunction() {
  var fileId = '1NTNdBlIkf5MVGfhdN6jLCbS0GhMlKbowEIlQpbxiukC_78MkTUCd690h';
  var folderId = '1Nqg0Qw-TV2d7RQiCVfqrqWHKY-rZ_Mia';
  Logger.log(DriveApp.getFileById(fileId));//MailMagazineProject
  Logger.log(DriveApp.getFileById(folderId));//MailMagazineProject
}