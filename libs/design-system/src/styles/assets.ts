import CheckIconSvg from '../assets/icon/checkbox.svg';
import CheckGreenIconSvg from '../assets/icon/ic-check-green.svg';
import CheckOrangeIconSvg from '../assets/icon/ic-check-orange.svg';
import ArrowDownGrayIconSvg from '../assets/icon/ic-arrow-down-gray.svg';
import ArrowDownBlackIconSvg from '../assets/icon/ic-arrow-down.svg';
import ArrowUpBlackIconSvg from '../assets/icon/ic-arrow-up.svg';
import CloseIconSvg from '../assets/icon/ic-close.svg';

export { CheckIconSvg as CheckIcon };
export { CheckGreenIconSvg as CheckGreenIcon };
export { CheckOrangeIconSvg as CheckOrangeIcon };
export { CloseIconSvg as CloseIcon };
export { ArrowDownGrayIconSvg as ArrowDownGrayIcon };
export { ArrowDownBlackIconSvg as ArrowDownBlackIcon };
export { ArrowUpBlackIconSvg as ArrowUpBlackIcon };

export type IconType =
  | typeof CheckIconSvg
  | typeof ArrowDownBlackIconSvg
  | typeof ArrowDownGrayIconSvg
  | typeof ArrowUpBlackIconSvg
  | typeof CloseIconSvg;
