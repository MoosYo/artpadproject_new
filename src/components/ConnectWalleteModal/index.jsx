import classes from "./styles.module.scss";
import lang from "./local.json";

// Components
import Button from "../Button";
import CloseIcon from "../Icons/Close";
import MetaMaskLogo from "../Icons/MetaMaskLogo";
import WalletConnectLogo from "../Icons/WalletConnectLogo";
import TrustWalletLogo from "../Icons/TrustWalletLogo";

// Helpers
import getLocale from "../../helpers/getLoacale";

const {
   block,
   block__header,
   block__headerTitle,
   block__closeBtn,
   block__closeBtnIcon,
   block__button,
   block__buttonIcon,
   block__buttonText,
} = classes;

export default function ConnectWalletModal(props) {

   const locale = getLocale();

   return (
      <div className={block}>
         <div className={block__header}>
            <h2 className={block__headerTitle}>{lang.header[locale]}</h2>

            <button className={block__closeBtn} onClick={props.onClose}>
               <CloseIcon className={block__closeBtnIcon} />
            </button>
         </div>
         <Button
            className={block__button}
            variant={"solid"}
            onClick={() => {
               props.onClose();
            }}
         >
            <MetaMaskLogo className={block__buttonIcon} />
            <span className={block__buttonText}>MetaMask</span>
         </Button>
         <Button
            className={block__button}
            variant={"solid"}
            onClick={() => {
               props.onClose();
            }}
         >
            <WalletConnectLogo className={block__buttonIcon} />
            <span className={block__buttonText}>WalletConnect</span>
         </Button>
         <Button
            className={block__button}
            variant={"solid"}
            onClick={() => {
               props.onClose();
            }}
         >
            <TrustWalletLogo className={block__buttonIcon} />
            <span className={block__buttonText}>TrustWallet</span>
         </Button>
      </div>
   );
}
