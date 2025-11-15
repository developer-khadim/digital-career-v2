// import React from "react";
// import DecorativeElements from "../components/home/DecorativeElements";
 import HeroSection from "../components/home/HeroSection";
// import LeftContent from "../components/home/LeftContent";
// import CenterContent from "../components/home/CenterContent";
// import RightContent from "../components/home/RightContent";
// import Social_Proof from "../components/home/Social_Proof";
// import MasterPieces from "../components/home/MasterPieces";
// import CurvedLoop from "../components/UI/CurvedLoop";

// const Home = () => {
//   return (
//     <>
//       <main id="Home" >
//         <main
//           className="min-h-[85vh] h-auto rounded-b-[40px] sm:rounded-b-[60px] md:rounded-b-[80px] lg:rounded-b-[120px] xl:rounded-b-[200px] bg-white relative overflow-hidden"
//         >
//           <DecorativeElements />

//           {/* Main Content */}
//           <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-10 md:pb-12 container mx-auto max-w-8xl px-4 sm:px-6">
//             <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
//               <HeroSection />

//               {/* Content Row */}
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-8xl gap-6 sm:gap-8">
//                 <LeftContent />
//                 <CenterContent />
//                 <RightContent />
//               </div>
//             </div>
//           </div>
//         </main>
//         <section className="bg-black w-full h-auto">
//           <Social_Proof />
//           <MasterPieces />
//         </section>
//       </main>
//       {/* <section>
//         <CurvedLoop
//           marqueeText="Digital ✦ Career ✦ Agency ✦"
//           speed={2}
//           curveAmount={0}
//           direction="right"
//           interactive={false}
//           className="text-primary"
//         />
//       </section> */}
//     </>
//   );
// };

// export default Home;


import React from 'react'

const Home = () => {
  return (
    <main className="h-[88vh] rounded-b-[30px] sm:rounded-b-[40px] md:rounded-b-[60px] lg:rounded-b-[80px] xl:rounded-b-[120px] bg-white relative overflow-hidden">
      <HeroSection />
    </main>
  )
}

export default Home