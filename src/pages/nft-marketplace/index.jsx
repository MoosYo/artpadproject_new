import scss from "./index.module.scss";

const { video } = scss;

function Marketplace() {
   return (
      <div className={video}>
         <video width="100%" autoplay="autoplay" loop="true" muted>
            <source src="/public/nft-marketplace-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
         </video>
      </div>
   );
}

export default Marketplace;
