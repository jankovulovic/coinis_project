// import { useParams, Link } from "react-router-dom";
// import HalfRating from "./Rating";
// import classes from "./SoloAlbum.module.css";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const SoloAlbum = () => {
//   const { id } = useParams();
//   const [authorData, setAuthorData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAuthorData = async () => {
//       try {
//         const response = await axios.get(
//           `http://127.0.0.1:8000/api/v2/songs/authors/${id}/`
//         );
//         const data = response.data;
//         setAuthorData(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching author data:", error);
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchAuthorData();
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!authorData) {
//     return <div>No data available.</div>;
//   }

//   const { name, link } = authorData;

//   return (
//     <>
//       <div className={classes.container}>
//         <div className={classes.breadcrumbs}>Home / Albums / {name}</div>
//         <div className={classes.infoContainer}>
//           <div>
//             <img
//               src={link}
//               alt="albumImg"
//               height="300"
//               width="400"
//               className={classes.albumImg}
//             />
//           </div>
//           <div className={classes.importantInfo}>
//             <div className={classes.title}>Name of Album + Title of band?</div>
//             <HalfRating />
//             <div className={classes.statTable}>
//               <div className={classes.statTitle}>
//                 <div className={classes.stats}>Number of songs: </div>
//                 <div className={classes.stats}>Genre(s): </div>
//                 <div className={classes.stats}>Popularity ranking: </div>
//               </div>
//               <div className={classes.statValue}>
//                 <div>21</div>
//                 <div>Rock, Punk, Metal</div>
//                 <div>Rank, rank</div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className={classes.titleSec}>About band</div>
//           <div className={classes.infoText}>
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text
//             ever since the 1500s, when an unknown printer took a galley of type
//             and scrambled it to make a type specimen book. It has survived not
//             only five centuries, but also the leap into electronic typesetting,
//             remaining essentially unchanged. It was popularised in the 1960s
//             with the release of Letraset sheets containing Lorem Ipsum passages,
//             and more recently with desktop publishing software like Aldus
//             PageMaker including versions of Lorem Ipsum.
//           </div>
//         </div>
//         <div>
//           <div className={classes.titleSec}>Tags</div>
//           <div className={classes.infoTags}>
//             <div className={classes.tags}>#Rock</div>
//             <div className={classes.tags}>#Metal</div>
//             <div className={classes.tags}>#Punk</div>
//             <div className={classes.tags}>#LP</div>
//             <div className={classes.tags}>#LinkinPark</div>
//             <div className={classes.tags}>#Rank1</div>
//             <div className={classes.tags}>#100+Songs</div>
//             <div className={classes.tags}>#Vocalist</div>
//           </div>
//         </div>
//         <div>
//           <div className={classes.filters}>
//             <div className={classes.filterBand}>Songs</div>
//             <div className={classes.filterSolo}>Discussion</div>
//           </div>
//           <div className={classes.songList}>
//             <div className={classes.songItem}>
//               <Link to="/acords">
//                 Track #1 This is just the whole song name i need it 50% width
//               </Link>
//             </div>
//             <div className={classes.songItem}>
//               <Link to="/acords">
//                 Track #2 This is just the whole song name i need it 50% width
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SoloAlbum;
