import scss from "./index.module.scss";

const { image } = scss;

function Marketplace() {
   return (
      <img
         className={image}
         src={`/public/ezgif-3-1b322eb9f5.webp`}
         alt={"Мы скоро запустимся"}
         loading={"lazy"}
         decoding="async"
         width={"1300"}
         height={"500"}
      />
   );
}

export default Marketplace;
