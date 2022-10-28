import EmailDetail from "./Email/EmailDetail";
import EmailList from "./Email/EmailList";
import { getAllEmails, selectEmail } from "../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  let dispatch = useDispatch();
  let { emailDetail, emails, selectedEmail } = useSelector((state) => state);
  console.log("eailDetail", emailDetail);
  console.log("selected email id", selectedEmail);
  console.log("emailList", emails.length);

  useEffect(() => {
    dispatch(getAllEmails());
  }, []);

  return (
    <main
      className={
        selectedEmail && selectedEmail.id && emailDetail[selectedEmail.id]
          ? "show-detail"
          : ""
      }
    >
      <EmailList list={emails} selectedEmailId={selectedEmail?.id} />
      {selectedEmail && selectedEmail.id && emailDetail[selectedEmail.id] ? (
        <EmailDetail
          detail={emailDetail?.[selectedEmail?.id]}
          selectedEmail={selectedEmail}
        />
      ) : null}
    </main>
  );
};
export default Main;
