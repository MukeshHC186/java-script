import './about-us.css'
const aboutUsObj={
    heading:"Welcome To About-us Section",
    img:"https://www.insightssuccess.in/wp-content/uploads/2020/12/785054-ecommerce-istock-020119.jpg",
    p:"Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph."
}
const AboutUs= ()=>{
return (
    <div className="about-us">
        <h1>{aboutUsObj.heading}</h1>
        <div>
        <img src={aboutUsObj.img}></img>
        <p>{aboutUsObj.p}</p>
        </div>
    </div>
)
}
export default AboutUs