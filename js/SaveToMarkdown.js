var objApp = window.external;
var objDatabase = objApp.Database;
var objWindow = objApp.Window;
var objCommon = objApp.CreateWizObject("WizKMControls.WizCommonUI");
var pluginPath = objApp.GetPluginPathByScriptFileName("sm_global.js");

function WizAlert(msg) {
    objWindow.ShowMessage(msg, "{p}", 0x00000040);
}

function WizConfirm(msg) {
    return objWindow.ShowMessage(msg, "{p}", 0x00000020 | 0x00000001) == 1;
}

(function(){
    const isMarkdown = objWindow.CurrentDocument.IsMarkdown();
    const docTitle = objWindow.CurrentDocument.Title;
    const ValidCharSet = ['unicode','utf-8']
    if (!isMarkdown) {
        WizAlert('该文档非Markdown');
        return false;
    }
    const filePath = objCommon.SelectWindowsFolder('请选择要保存到的文件夹');
    const fileName = objCommon.InputBox('请输入文件名', '', docTitle);
    const charset = objCommon.InputBox('请输入数字以选择相应的编码！', `选项：\n[0]. unicode\n[1]. utf-8`, '0');
    const text = objWindow.CurrentDocument.GetText(0);
    if (filePath && fileName && charset) {
        objCommon.SaveTextToFile(filePath + fileName, text, ValidCharSet[charset]);
    }
})()
