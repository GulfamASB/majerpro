import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/common.module.css"


const getTopics = async () => {
  
  try {
    
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
      
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
      
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

 const TopicsList= async()=> {
  const { topics } = await getTopics();
  console.log(topics);

  return (
    <>
    <section className={styles.movieSection }>
      <div className={styles.container} style={{ backgroundColor:"white"}}>
    <h1 >Series & Movie</h1>
      <div className={styles.card_section}>
      
      {topics && topics.map((t) => (
        <div className={styles.card_data}
          key={t._id}
        >
          <div className={styles.card} >
            <h2>{t.title}</h2>
            <div>{t.description}</div>
          </div>
        </div>
      ))}
      </div>
      </div>
    </section>
    </>
  );
};export default TopicsList;