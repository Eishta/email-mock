import parse from "html-react-parser";
const EmailDetail = ({ detail }) => {
  const { id, body } = detail;
  console.log("detail=====================");
  console.log(detail);
  return <article>{parse(body)}</article>;
};
export default EmailDetail;
