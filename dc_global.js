
function dc_OnButtonClicked() {
    let pluginPath = objApp.GetPluginPathByScriptFileName("dc_global.js");
    //let jQueryPath = pluginPath + "lib/jQuery/jquery-3.3.1.min.js";
    //let rect = objWindow.GetToolButtonRect("document", "SM_button");
    //let arr = rect.split(',');
    //objWindow.ShowSelectorWindow(pluginPath + 'index.html', (parseInt(arr[0]) + parseInt(arr[2])) / 2, arr[3], 400, 500, "");
    //objWindow.ShowHtmlDialogEx(false, "层叠样式表管理工具", pluginPath + 'index.html', 440, 500, "", null, null);
    //objApp.RunScriptFile(pluginPath + 'js/dc_core.js', 'JavaScript');
}
function dc_InitButton() {
    let pluginPath = objApp.GetPluginPathByScriptFileName("dc_global.js");
    //let langFileName = pluginPath + "plugin.ini";
    //let buttonText = objApp.LoadStringFromFile(langFileName, "strSM");
    //objWindow.AddToolButton("main", "dc_button", 'Pandoc', '', "dc_OnButtonClicked");
}

dc_InitButton();