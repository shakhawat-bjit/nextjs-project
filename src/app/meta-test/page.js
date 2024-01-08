const Test = () => {
  return (
    <div>
      <h1>Students list</h1>
    </div>
  );
};

// system -1
// export function generateMetadata() {
//   return {
//     title: "Students",
//     description: "This page holds all studet's information",
//   };
// }

// system -2
export const metadata = {
  title: "Students",
  description: "This page holds all studet's information",
};

export default Test;
