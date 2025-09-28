import { useGSAP } from "@gsap/react";
import { cocktailLists, mockTailLists } from "../../Constant";
import gsap from "gsap";

const Cocktails = () => {
  useGSAP(()=>{
    const paralaxTimeline=gsap.timeline({
      scrollTrigger:{
        trigger:"#cocktails",
        start:"top 30%",
        end:"bottom 80%",
        scrub:true,
      }
    })
    paralaxTimeline.from('#c-left-leaf',{
      x:-100,y:100
    })
    .from('#c-right-leaf',{
      x:100,y:100
    })
  })
  return (
    <div id="cocktails" className="noisy">
      <img
        src="/images/cocktail-left-leaf.png"
        alt="left-leaf"
        id="c-left-leaf"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="right-leaf"
        id="c-right-leaf"
      />
      <div className="list">
        <div className="popular">
          <h2>Most popular Cocktails: </h2>
          <ul>
            {cocktailLists.map((item, index) => (
              <li key={index}>
                <div className="md:me-28">
                  <h2>{item.name}</h2>
                  <p>{item.country} | {item.detail}</p>
                </div>
                <span>- {item.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>Most Loved Mocktails: </h2>
          <ul>
            {mockTailLists.map((item, index) => (
              <li key={index}>
                <div className="md:me-28">
                  <h2>{item.name}</h2>
                  <p>{item.country} | {item.detail}</p>
                </div>
                <span>- {item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cocktails;
