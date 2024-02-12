import Image from "next/image";
import styles from "./singlepage.module.css"
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getSinglePost } from "@/lib/data";


// FETCH DATA WITH AN API


// const getonePost= async(id)=>{
//   const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

//   if(!res.ok){
//     throw new Error("something wrong");
//   }

//   return res.json();
// }



export const generateMetadata= async({params})=>{
  const { slug } = params;
  const data=await getSinglePost(slug);

  return {
    title:data.title,
    discription:data.desc
  }

}

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  console.log(slug);

  const data=await getSinglePost(slug);

  return (
    <div className={styles.container}>

        <div className={styles.imgContainer}>
          <Image src="" alt="" fill className={styles.img} />
        </div>
     
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{data?.title}</h1>
        <div className={styles.detail}>

            <Suspense fallback={<div>...loading</div>}>
             <PostUser userId={data.userId}/>

            </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
             value 
            </span>
          </div>
        </div>
        <div className={styles.content}>{data.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;