const lookupMacOS = {
  "cmd": "⌘",
  "command": "⌘",
  "shift": "⇧",
  "alt": "⌥",
  "option": "⌥",
  "ctrl": "⌃",
  "control": "⌃",
  "caps": "⇪",
  "capslock": "⇪",
  "enter": "&crarr;",
  "return": "&crarr;",
  "tab": "⇥",
  "rarr": "→",
  "larr": "←",
  "uarr": "↑",
  "darr": "↓",
  "space": "  ␣  ",
  "delete": "⌫",
  "backspace": "⌫",
  "bksp": "⌫"
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

export function prettifyKeys(keyString, OS="Windows") {

  // Lowercase, split into a list of keys, then uppercase single letters
  const keysText = keyString.toLowerCase().split("+")
    .map((key) => (key.length == 1 ? key.toUpperCase() : key));

  // Replace keys with html entities if applicable
  const keysReplaced = (OS == "Windows" ?
    keysText.map((key) => (lookupWindows[key] ? lookupWindows[key] : key)) :
    keysText.map((key) => (lookupMacOS[key] ? lookupMacOS[key] : key)));

  // Enclose in html tags and join to one string
  const keysHtml = keysReplaced.map((key) => (<span>{key}</span>))

  return (
    <>
      {keysReplaced.map((key) => (<span key={key}>{key}</span>))}
    </>
  )
}