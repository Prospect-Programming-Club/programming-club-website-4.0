import { atom, useAtom } from "jotai";

// dark/light mode

export enum DisplayMode {
  Dark = "dark",
  Light = "light",
}


export const displayModeAtom = atom<DisplayMode>(
  localStorage.getItem("displayMode") === DisplayMode.Dark
    ? DisplayMode.Dark
    : DisplayMode.Light
);

export const useDisplayMode = () => {
  const [displayMode, setDisplayMode] = useAtom(displayModeAtom);

  const toggleDisplayMode = () => {
    setDisplayMode((mode) =>
      mode === DisplayMode.Dark ? DisplayMode.Light : DisplayMode.Dark
    );
    localStorage.setItem(
      "displayMode",
      displayMode === DisplayMode.Dark ? DisplayMode.Light : DisplayMode.Dark
    );
  };


  return [ displayMode, toggleDisplayMode ];
};
