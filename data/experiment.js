
const lookupMacOS = {
  "cmd": "&#8984;",
  "command": "&#8984;",
  "shift": "&#8679;",
  "alt": "&#8997;",
  "option": "&#8997;",
  "ctrl": "&#8963;",
  "control": "&#8963;",
  "caps": "&#8682;",
  "capslock": "&#8682;",
  "enter": "&crarr;",
  "return": "&crarr;",
  "tab": "&#8677;",
  "rarr": "&rarr;",
  "larr": "&larr;",
  "uarr": "&uarr;",
  "darr": "&darr;",
  "space": "Space",
  "delete": "&#9003;",
  "backspace": "&#9003;",
  "bksp": "&#9003;"
}

const lookupWindows = {
  "windows": "Win",
  "win": "Win",
  "control": "Ctrl",
  "ctrl": "Ctrl",
  "shift": "Shift",
  "alt": "Alt",
  "tab": "Tab",
  "space": "Space"
}
  
function prettifyKeys(keyString, OS="Windows") {

  // Lowercase, split into a list of keys, then uppercase single letters
  const keysText = keyString.toLowerCase().split("+")
    .map((key) => (key.length == 1 ? key.toUpperCase() : key));

  // Replace keys with html entities if applicable
  const keysReplaced = (OS == "Windows" ?
    keysText.map((key) => (lookupWindows[key] ? lookupWindows[key] : key)) :
    keysText.map((key) => (lookupMacOS[key] ? lookupMacOS[key] : key)));

  // Enclose in html tags and join to one string
  const keysHtml = keysReplaced.map((key) => (["<span>", key, "</span>"].join(""))).join("")

  return keysHtml
}

const sample = "cmd+shift+z";

const result = prettifyKeys(sample, "MacOS");
console.log(result);