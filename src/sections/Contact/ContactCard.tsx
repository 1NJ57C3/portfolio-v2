import { contacts } from "./contacts";

function ContactCard() {
  const displayContactDetails = contacts.map(
    ({ id, label, text, url }) => (
      <div key={id} className="contact-card-detail">
        <dt>{label}</dt>
        <dd>
          <a href={url}>{text}</a>
        </dd>
      </div>
    ),
  );

  return (
    <article className="contact-card">
      <header className="contact-card-identity">
        <h3>Inji</h3>
        <p>Software Engineer</p>
      </header>
      <address className="contact-card-details">
        <dl>{displayContactDetails}</dl>
      </address>
    </article>
  );
}

export default ContactCard;
