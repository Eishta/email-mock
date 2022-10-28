import { useDispatch } from "react-redux";
import { selectEmail } from "../../redux/actions";
import EmailItem from "./EmailItem";

const EmailList = ({ list, selectedEmailId }) => {
  const dispatch = useDispatch();
  const showEmailDetail = (email) => {
    dispatch(selectEmail(email));
  };
  return (
    <ul className="email-list">
      {list.map((email) => (
        <EmailItem
          key={email.id}
          emailInfo={email}
          selectedEmailId={selectedEmailId}
          onClick={() => showEmailDetail(email)}
        />
      ))}
    </ul>
  );
};
export default EmailList;
