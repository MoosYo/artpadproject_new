import classes from "./index.module.scss";

const {
   story_board,
   story_board__item,
   line,
   story_board__head,
   story_board__item_short,
   story_board__title,
   story_board__title_active,
   story_board__sublist,
   story_board__sublist_item,
   story_board__sublist_text,
   story_board__sublist_text_active,
} = classes;

function StoryBoard({ steps }) {
   return (
      <div className={story_board}>
         {steps.map(({ title, points, active }, key) => (
            <div
               className={story_board__item + " " + (steps.length - 1 === key ? story_board__item_short : null)}
               key={key}
            >
               <div className={story_board__head}>
                  <p className={active ? story_board__title + " " + story_board__title_active : story_board__title}>
                     {title}
                  </p>
                  {steps.length - 1 !== key ? <div className={line}></div> : null}
               </div>
               <ul className={story_board__sublist}>
                  {points.map(({ title, time }, key) => (
                     <li className={story_board__sublist_item} key={key}>
                        <p
                           className={
                              active
                                 ? story_board__sublist_text + " " + story_board__sublist_text_active
                                 : story_board__sublist_text
                           }
                        >
                           {title + " " + new Date(time).toLocaleString()}
                        </p>
                     </li>
                  ))}
               </ul>
            </div>
         ))}
      </div>
   );
}

export default StoryBoard;
