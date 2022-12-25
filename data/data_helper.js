import fs from "fs";
import path from 'path';

const dataFilePath = path.join(process.cwd(), "data/shortcuts.json");

export function getShortcutData() {
  const fileContents = fs.readFileSync(dataFilePath, 'utf8');
  const shortcutsJSON = JSON.parse(fileContents);
  return shortcutsJSON;
}

export function getShortcutIds() {
  const shortcutData = getShortcutData();
  return shortcutData.map(shortcut => {
    return {
      params: {
        id: shortcut.id
      }
    }
  });
}

export function getSingleShortcutData(id) {
  const shortcutData = getShortcutData();
  return shortcutData.find((shortcut) => (shortcut.id === id));
}