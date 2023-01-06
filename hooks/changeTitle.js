// import { useRef, useEffect } from "react";

// function changeTitle(title, prevailOnUnmount = false) {
//   var defaultTitle = useRef(document.title);

//   useEffect(() => {
//     document.title = title;
//   }, [title]);

//   useEffect(
//     () => () => {
//       if (!prevailOnUnmount) {
//         document.title = defaultTitle.current;
//       }
//     },
//     []
//   );
// }

// export default changeTitle;
