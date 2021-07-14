const Section = (props) => {
  return <section className={`block ${props.className}`}>{props.children}</section>;
};

export default Section;
