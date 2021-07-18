import Section from "../section/section";
import style from "./tool.module.scss";
import Image from "next/image";
const tools = [
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "swagger" },
  { name: "Jira" },
  { name: "Bitbucket" },
  { name: "trello" },
  { name: "BrowserStack" },
  { name: "Jira" },
];

const Tools = () => {
  return (
    <Section className={style.tools}>
      <img src='shape-1.png' role="presentation" aria-hidden="true" className={style.tools__shape1} />
      <div className={style.tools__pattren1}></div>
      <div className={style.tools__pattren2}></div>
      <div className="container">
        <div className={`row ${style.tools__list}`}>
          {tools.map((tool) => (
            <div className={`col ${style.tools__item}`}>
              <div className={style.tools__wrap}>
                <Image
                  placeholder="blur"
                  src={`https://res.cloudinary.com/dcqiq1pu5/image/upload/v1626277693/tools/${tool.name}.png`}
                  alt={`${tool.name}`}
                  width={100}
                  height={100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
export default Tools;
