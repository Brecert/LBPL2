import { NON } from "../logic/globals";

export default function isActive(number: number) {
  if (number > NON) {
    return true;
  } else {
    return false;
  }
}
