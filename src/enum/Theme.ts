enum Theme {
  LIGHT = "light",
  DARK = "dark",
  PERSONAL = "personal",
}

export function getValidTheme(key: String): Theme {
  if (key && Object.values(Theme).includes(key as Theme)) {
    return key as Theme;
  }
  return Theme.LIGHT;
}

export default Theme;
