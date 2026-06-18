export type Contact = {
  id: number;
  icon: string;
  label: string;
  text: string;
  url: string;
};

type rawContact = Omit<Contact, "id">;

export const rawContacts: rawContact[] = [];

rawContacts.push({
  icon: "",
  label: "email",
  text: "hello@inji.dev",
  url: "mailto:hello@inji.dev",
});
rawContacts.push({
  icon: "",
  label: "github",
  text: "@1NJ57C3",
  url: "https://github.com/1NJ57C3",
});
rawContacts.push({
  icon: "",
  label: "web",
  text: "inji.dev",
  url: "inji.dev",
});

export const contacts: Contact[] = rawContacts.map((contact, id) => ({
  id,
  ...contact,
}));
