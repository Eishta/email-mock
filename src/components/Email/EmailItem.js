const EmailItem = ({ emailInfo, onClick, selectedEmailId }) => {
  let { from, date, subject, short_description } = emailInfo;
  return (
    <article
      onClick={onClick}
      className={selectedEmailId === emailInfo.id ? "selected" : ""}
    >
      <div className="avatar">{from.name.slice(0, 1)}</div>
      <div className="info">
        <p>
          From: <span>{`${from.name} <${from.email}>`}</span>
        </p>
        <p>
          Subject: <span>{`${subject}`}</span>
        </p>
        <p>{short_description}</p>
        <p>{new Date(date).toLocaleString()}</p>
      </div>
    </article>
  );
};
export default EmailItem;
