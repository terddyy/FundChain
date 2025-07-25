import { GetIndicatorStyle } from "./interfaces";


export function handleMove(
  e: React.MouseEvent<HTMLElement>,
  setter: React.Dispatch<React.SetStateAction<GetIndicatorStyle>>
) {
  const target = e.currentTarget;
  const left = target.offsetLeft;
  const width = target.offsetWidth;
  const value = target.textContent;

  setter({ width: width, left: left, name: value });
}

export function handleChange<T extends HTMLInputElement | HTMLTextAreaElement>(
  e: React.ChangeEvent<T>,
  setter: React.Dispatch<React.SetStateAction<any>>
) {
  const value = e.target.value;

  setter(value);
}
