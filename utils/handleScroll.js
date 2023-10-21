export const handleScroll = (ref) => {
  console.log("wtf");
  if (ref.current) {
    console.log(ref);
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
};
