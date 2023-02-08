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

   story_board__prompt
} = classes;

function StoryBoard({ steps, setToolTip = () => {} }) {
   
   const toolTip = (e, content) => {
      if (content) {
         const rect = e.target.getClientRects()[0];
         console.log(e.target, rect)
         
         setToolTip({
             content: 
             (props) => (
               <p className={story_board__prompt} {...props} dangerouslySetInnerHTML={{__html: content}} />
             ),
             x: rect.x + (rect.x < window.innerWidth / 2 ? 0 : rect.width),
             y: window.scrollY + rect.y + rect.height
         });
      }
  }

   return (
      <div className={story_board}>
         {steps.map(({ title, points, prompt, active }, key) => (
            <div
               className={story_board__item + " " + (steps.length - 1 === key ? story_board__item_short : null)}
               key={key}
            >
               <div className={story_board__head}>
                  {steps.length - 1 === key ? <div className={line}></div> : null}
                  <p
                     className={active ? story_board__title + " " + story_board__title_active : story_board__title}
                     onClick={e => toolTip(e, prompt)}
                  >
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
                           {title}&nbsp;{new Date(time * 1000).toLocaleString()}
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
