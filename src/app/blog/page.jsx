import PostCard from "@/components/PostCard/PostCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";



// const getData= async()=>{
// const res= await fetch("https://jsonplaceholder.typicode.com/posts");

// if(!res.ok){
//   throw new Error("something wrong");
// }

// return res.json();
// }

export const metadata = {
  title: 'Next App Blog Page',
  description: 'Next.js blog page ',
}


const blog = async() => {

  const data= await getPosts();
  return (
    <>
      <div className={styles.container}>

      {data.map((posts)=>(
        <div className={styles.post} key={posts.id}>
        <PostCard post={posts}/>
      </div>

      ))}
      
      </div>
    </>
  );
};

export default blog;
